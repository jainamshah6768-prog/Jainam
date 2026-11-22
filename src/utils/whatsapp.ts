import { BAKERY_CONTACT } from '../data/bakeryCatalog';
import { CartItem, FulfillmentMethod, OrderReceipt, PaymentMethod } from '../types/bakery';
import { formatINR } from './currency';

const WHATSAPP_COUNTRY_PREFIX = '91';
const WHATSAPP_NUMBER = `${WHATSAPP_COUNTRY_PREFIX}${BAKERY_CONTACT.phoneRaw}`;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function formatPaymentLabel(paymentMethod: PaymentMethod, paymentReference?: string): string {
  if (paymentMethod === 'gpay') {
    const refText = paymentReference?.trim() ? ` (UPI Ref: ${paymentReference.trim()})` : '';
    return `Online GPay (${BAKERY_CONTACT.phoneDisplay})${refText}`;
  }
  if (paymentMethod === 'cod') {
    return 'Cash on Delivery (COD)';
  }
  return 'Card / Contactless at Door or Counter';
}

function formatCartLines(items: CartItem[]): string[] {
  const lines: string[] = [];
  items.forEach((item, index) => {
    const lineTotal = item.unitPrice * item.quantity;
    lines.push(
      `${index + 1}. ${item.name} (${item.variantLabel}) — ${item.quantity} × ${formatINR(item.unitPrice)} = ${formatINR(lineTotal)}`
    );
    if (item.customItems && item.customItems.length > 0) {
      lines.push(
        `   Pack Mix: ${item.customItems.map((ci) => `${ci.count}× ${ci.name}`).join(', ')}`
      );
    }
    if (item.note) {
      lines.push(`   Note: ${item.note}`);
    }
  });
  return lines;
}

export function formatReceiptWhatsAppMessage(receipt: OrderReceipt): string {
  const deliveryLine =
    receipt.fulfillment === 'delivery'
      ? `Delivery Address: ${receipt.address || ''}${receipt.postalCode ? `, PIN ${receipt.postalCode}` : ''}`
      : `Pickup Location: ${BAKERY_CONTACT.fullAddress}`;

  const lines: string[] = [
    '*Jain Oven Pack — New Order*',
    `Order Ref: #${receipt.orderNumber}`,
    `Placed At: ${receipt.placedAt}`,
    `Slot: ${receipt.timeSlot}`,
    '',
    '*Customer Details*',
    `Name: ${receipt.customerName}`,
    `Phone: ${receipt.phone}`,
    `Fulfillment: ${receipt.fulfillment === 'delivery' ? 'Local Delivery' : 'Bakery Pickup'}`,
    deliveryLine,
    `Payment: ${formatPaymentLabel(receipt.paymentMethod, receipt.paymentReference)}`,
    '',
    '*Order Items*',
    ...formatCartLines(receipt.items),
    '',
    `Subtotal: ${formatINR(receipt.subtotal)}`,
    `${receipt.fulfillment === 'delivery' ? 'Delivery' : 'Pickup'}: ${
      receipt.deliveryNote
        ? receipt.deliveryNote
        : receipt.deliveryFee === 0
          ? 'Free'
          : formatINR(receipt.deliveryFee)
    }`,
    `*Grand Total: ${formatINR(receipt.total)}*`,
    '',
    '100% Eggless · Pure Vegetarian · Zero Onion/Garlic',
  ];

  return lines.join('\n');
}

export interface CartDraftWhatsAppParams {
  items: CartItem[];
  subtotal: number;
  deliveryFee?: number;
  deliveryLabel?: string;
  total?: number;
  fulfillment?: FulfillmentMethod;
  customerName?: string;
  phone?: string;
  address?: string;
  deliveryArea?: string;
  postalCode?: string;
  timeSlot?: string;
  paymentMethod?: PaymentMethod;
  gpayRef?: string;
}

export function formatCartDraftWhatsAppMessage({
  items,
  subtotal,
  deliveryFee = 0,
  deliveryLabel,
  total,
  fulfillment = 'pickup',
  customerName,
  phone,
  address,
  deliveryArea,
  postalCode,
  timeSlot,
  paymentMethod = 'gpay',
  gpayRef,
}: CartDraftWhatsAppParams): string {
  const computedTotal = total ?? subtotal + deliveryFee;
  const lines: string[] = ['*Jain Oven Pack — Order Request*'];

  if (timeSlot) {
    lines.push(`Preferred Slot: ${timeSlot}`);
  }
  if (customerName?.trim() || phone?.trim()) {
    lines.push('');
    lines.push('*Customer Details*');
    if (customerName?.trim()) lines.push(`Name: ${customerName.trim()}`);
    if (phone?.trim()) lines.push(`Phone: ${phone.trim()}`);
  }

  lines.push('');
  lines.push(`Fulfillment: ${fulfillment === 'delivery' ? 'Local Delivery' : 'Bakery Pickup'}`);
  if (fulfillment === 'delivery') {
    const fullAddr = [address?.trim(), deliveryArea].filter(Boolean).join(', ');
    if (fullAddr) {
      lines.push(`Address: ${fullAddr}${postalCode?.trim() ? `, PIN ${postalCode.trim()}` : ''}`);
    } else if (deliveryArea) {
      lines.push(`Area: ${deliveryArea}`);
    }
  } else {
    lines.push(`Pickup At: ${BAKERY_CONTACT.fullAddress}`);
  }
  lines.push(`Payment: ${formatPaymentLabel(paymentMethod, gpayRef)}`);

  lines.push('');
  lines.push('*Order Items*');
  lines.push(...formatCartLines(items));
  lines.push('');
  lines.push(`Subtotal: ${formatINR(subtotal)}`);
  if (deliveryLabel) {
    lines.push(`${fulfillment === 'delivery' ? 'Delivery' : 'Pickup'}: ${deliveryLabel}`);
  }
  lines.push(`*Total Payable: ${formatINR(computedTotal)}*`);
  lines.push('');
  lines.push('100% Eggless · Pure Vegetarian · Zero Onion/Garlic');

  return lines.join('\n');
}
