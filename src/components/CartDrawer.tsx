import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Copy,
  MessageCircle,
  Minus,
  Plus,
  Trash2,
  X,
} from 'lucide-react';
import { BAKERY_CONTACT } from '../data/bakeryCatalog';
import { CartItem, FulfillmentMethod, OrderReceipt, PaymentMethod } from '../types/bakery';
import { formatINR } from '../utils/currency';
import {
  buildWhatsAppUrl,
  formatCartDraftWhatsAppMessage,
  formatReceiptWhatsAppMessage,
} from '../utils/whatsapp';
import { RibbonGiftBoxIllustration } from './BakeryOrnaments';
import { ResilientImage } from './ResilientImage';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, quantity: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  lastReceipt: OrderReceipt | null;
  onOrderConfirmed: (receipt: OrderReceipt) => void;
  onDismissReceipt: () => void;
}

const MIN_DELIVERY_ORDER = 200;
const FREE_DELIVERY_THRESHOLD = 1000;
const NORMAL_DELIVERY_FEE = 50;
const MULUND_QUICK_DELIVERY_FEE = 100;
const DELIVERY_AREAS = ['Mulund West', 'Shivaji Nagar', 'Kisan Nagar 1'] as const;
type DeliveryArea = (typeof DELIVERY_AREAS)[number];
type DeliverySpeed = 'normal' | 'quick';

const TIME_SLOTS = [
  'Afternoon (12:00 PM – 2:30 PM)',
  'Evening (2:30 PM – 5:30 PM)',
  'Late Evening (5:30 PM – 8:00 PM)',
];

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  lastReceipt,
  onOrderConfirmed,
  onDismissReceipt,
}: CartDrawerProps) {
  const [step, setStep] = useState<'cart' | 'checkout'>('cart');
  const [fulfillment, setFulfillment] = useState<FulfillmentMethod>('delivery');
  const [deliveryArea, setDeliveryArea] = useState<DeliveryArea>('Mulund West');
  const [deliverySpeed, setDeliverySpeed] = useState<DeliverySpeed>('normal');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('gpay');
  const [gpayRef, setGpayRef] = useState('');
  const [copiedGpay, setCopiedGpay] = useState(false);
  const [copiedOrder, setCopiedOrder] = useState(false);
  const [timeSlot, setTimeSlot] = useState(TIME_SLOTS[0]);
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (items.length === 0 && step === 'checkout') {
      setStep('cart');
    }
  }, [items.length, step]);

  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const isDeliveryEligible = subtotal > MIN_DELIVERY_ORDER;
  const qualifiesFreeDelivery = subtotal > FREE_DELIVERY_THRESHOLD;

  useEffect(() => {
    if (!isDeliveryEligible && fulfillment === 'delivery') {
      setFulfillment('pickup');
    }
  }, [isDeliveryEligible, fulfillment]);

  useEffect(() => {
    if (deliveryArea !== 'Mulund West' && deliverySpeed === 'quick') {
      setDeliverySpeed('normal');
    }
  }, [deliveryArea, deliverySpeed]);

  if (!isOpen) return null;

  const isMulundQuick = fulfillment === 'delivery' && deliveryArea === 'Mulund West' && deliverySpeed === 'quick';
  const activeDeliveryFee =
    fulfillment === 'pickup'
      ? 0
      : isMulundQuick
        ? MULUND_QUICK_DELIVERY_FEE
        : qualifiesFreeDelivery
          ? 0
          : NORMAL_DELIVERY_FEE;
  const orderTotal = subtotal + activeDeliveryFee;
  const amountNeededForDelivery = Math.max(0, MIN_DELIVERY_ORDER + 1 - subtotal);
  const amountNeededForFreeDelivery = Math.max(0, FREE_DELIVERY_THRESHOLD + 1 - subtotal);
  const deliveryProgress = !isDeliveryEligible
    ? Math.min(99, Math.round((subtotal / (MIN_DELIVERY_ORDER + 1)) * 100))
    : qualifiesFreeDelivery
      ? 100
      : Math.min(99, Math.round((subtotal / (FREE_DELIVERY_THRESHOLD + 1)) * 100));

  const deliveryDisplayLabel =
    fulfillment === 'pickup'
      ? 'Free'
      : isMulundQuick
        ? `${formatINR(MULUND_QUICK_DELIVERY_FEE)} (Mulund West Quick)`
        : qualifiesFreeDelivery
          ? 'Free (Order > ₹1,000)'
          : `${formatINR(NORMAL_DELIVERY_FEE)} (${deliveryArea})`;

  const receiptWhatsAppMessage = lastReceipt ? formatReceiptWhatsAppMessage(lastReceipt) : '';
  const receiptWhatsAppUrl = lastReceipt ? buildWhatsAppUrl(receiptWhatsAppMessage) : '';

  const draftWhatsAppMessage =
    items.length > 0
      ? formatCartDraftWhatsAppMessage({
          items,
          subtotal,
          deliveryFee: activeDeliveryFee,
          deliveryLabel: deliveryDisplayLabel,
          total: orderTotal,
          fulfillment,
          customerName,
          phone,
          address,
          deliveryArea,
          postalCode,
          timeSlot,
          paymentMethod,
          gpayRef,
        })
      : '';
  const draftWhatsAppUrl = draftWhatsAppMessage ? buildWhatsAppUrl(draftWhatsAppMessage) : '';

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fulfillment === 'delivery' && !isDeliveryEligible) {
      setFormError('Delivery is only available for purchases above ₹200. Please choose Bakery Pickup.');
      return;
    }
    if (!customerName.trim() || !phone.trim()) {
      setFormError('Please enter your full name and phone number.');
      return;
    }
    if (fulfillment === 'delivery' && (!address.trim() || !postalCode.trim())) {
      setFormError('Please enter your delivery street address and PIN code.');
      return;
    }
    setFormError('');

    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const receipt: OrderReceipt = {
      orderNumber: `JOP-${randomCode}`,
      placedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      customerName: customerName.trim(),
      phone: phone.trim(),
      fulfillment,
      address: fulfillment === 'delivery' ? `${address.trim()}, ${deliveryArea}` : undefined,
      postalCode: fulfillment === 'delivery' ? postalCode.trim() : undefined,
      timeSlot,
      paymentMethod,
      paymentReference: paymentMethod === 'gpay' && gpayRef.trim() ? gpayRef.trim() : undefined,
      items: [...items],
      subtotal,
      deliveryFee: activeDeliveryFee,
      deliveryNote: deliveryDisplayLabel,
      total: orderTotal,
    };

    onOrderConfirmed(receipt);
    onClearCart();
    setGpayRef('');
    setStep('cart');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#4A152E]/45 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label="Your Bakery Bag and Checkout"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md h-full bg-white border-l border-[#F9A8D4] flex flex-col shadow-2xl">
        {/* Top Patisserie Stripe */}
        <div className="h-1.5 w-full bg-patisserie-awning border-b border-[#FBCFE8] shrink-0" aria-hidden="true" />

        {/* Drawer Header */}
        <div className="px-4 sm:px-6 h-16 border-b border-[#FBCFE8] flex items-center justify-between gap-3 shrink-0 bg-white">
          <div className="flex items-center gap-2 min-w-0">
            {step === 'checkout' && !lastReceipt && (
              <button
                type="button"
                onClick={() => setStep('cart')}
                aria-label="Back to bag"
                className="p-1.5 -ml-1.5 rounded text-[#7C3F5B] hover:text-[#4A152E] hover:bg-[#FFF0F6]"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <h2 className="font-display text-lg font-semibold text-[#4A152E] truncate">
              {lastReceipt
                ? 'Order Confirmed'
                : step === 'checkout'
                  ? 'Order Verification'
                  : 'Your Oven Bag'}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {!lastReceipt && step === 'cart' && items.length > 0 && (
              <button
                type="button"
                onClick={onClearCart}
                className="px-2.5 py-1.5 text-xs font-medium text-[#7C3F5B] hover:text-[#4A152E] hover:bg-[#FFF0F6] rounded-md transition-colors"
              >
                Clear Bag
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close bag drawer"
              className="w-9 h-9 inline-flex items-center justify-center rounded-md text-[#7C3F5B] hover:text-[#4A152E] hover:bg-[#FFF0F6] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Receipt View */}
        {lastReceipt ? (
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-pink-polka">
            <div className="p-5 bg-white border border-[#DB2777]/45 rounded-xl shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-[#DB2777] font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Order #{lastReceipt.orderNumber} Ready — Send via WhatsApp</span>
              </div>
              <p className="text-xs text-[#7C3F5B]">
                Placed at {lastReceipt.placedAt} <span aria-hidden="true">·</span>{' '}
                {lastReceipt.timeSlot}
              </p>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={receiptWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 px-4 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded-md transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Send Order on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard?.writeText(receiptWhatsAppMessage).catch(() => {});
                    setCopiedOrder(true);
                    setTimeout(() => setCopiedOrder(false), 1800);
                  }}
                  className="w-full h-10 px-4 inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#DB2777] bg-[#FFF0F6] border border-[#F9A8D4] hover:bg-[#FCE7F3] rounded-md transition-colors"
                >
                  <Copy className="w-3.5 h-3.5 shrink-0" />
                  <span>{copiedOrder ? 'Order Summary Copied' : 'Copy Order Summary'}</span>
                </button>
              </div>
            </div>

            <div className="bg-white border border-[#F9A8D4] rounded-xl p-5 space-y-4 shadow-xs">
              <div>
                <h3 className="text-xs font-semibold text-[#7C3F5B] mb-1">Customer &amp; Dispatch</h3>
                <p className="text-sm font-semibold text-[#4A152E]">{lastReceipt.customerName}</p>
                <p className="text-xs text-[#7C3F5B]">{lastReceipt.phone}</p>
                {lastReceipt.fulfillment === 'delivery' ? (
                  <p className="mt-1 text-xs text-[#7C3F5B]">
                    Delivery to {lastReceipt.address}, {lastReceipt.postalCode}
                  </p>
                ) : (
                  <p className="mt-1 text-xs text-[#7C3F5B]">
                    Bakery Pickup — {BAKERY_CONTACT.fullAddress} (
                    <a
                      href={BAKERY_CONTACT.phoneHref}
                      className="font-medium text-[#DB2777] hover:underline tabular-nums"
                    >
                      {BAKERY_CONTACT.phoneDisplay}
                    </a>
                    )
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-[#FBCFE8]">
                <h3 className="text-xs font-semibold text-[#7C3F5B] mb-2.5">Items Packed</h3>
                <ul className="space-y-2.5 text-sm">
                  {lastReceipt.items.map((item) => (
                    <li key={item.cartItemId} className="flex justify-between gap-3">
                      <div className="min-w-0">
                        <div className="font-medium text-[#4A152E]">
                          {item.quantity}× {item.name}
                        </div>
                        <div className="text-xs text-[#7C3F5B]">{item.variantLabel}</div>
                        {item.note && (
                          <div className="text-xs italic text-[#7C3F5B]">Note: {item.note}</div>
                        )}
                      </div>
                      <span className="font-medium tabular-nums text-[#4A152E] shrink-0">
                        {formatINR(item.unitPrice * item.quantity)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#FBCFE8] space-y-1.5 text-sm">
                <div className="flex justify-between text-[#7C3F5B]">
                  <span>Subtotal</span>
                  <span className="tabular-nums">{formatINR(lastReceipt.subtotal)}</span>
                </div>
                <div className="flex justify-between text-[#7C3F5B]">
                  <span>{lastReceipt.fulfillment === 'delivery' ? 'Local Delivery' : 'Pickup'}</span>
                  <span className="tabular-nums text-right">
                    {lastReceipt.deliveryNote
                      ? lastReceipt.deliveryNote
                      : lastReceipt.deliveryFee === 0
                        ? 'Free'
                        : formatINR(lastReceipt.deliveryFee)}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#FBCFE8] flex justify-between font-semibold text-[#4A152E]">
                  <span>
                    Total (
                    {lastReceipt.paymentMethod === 'gpay'
                      ? 'Online GPay'
                      : lastReceipt.paymentMethod === 'cod'
                        ? 'Cash on Delivery'
                        : 'Card at Door / Counter'}
                    )
                  </span>
                  <span className="tabular-nums">{formatINR(lastReceipt.total)}</span>
                </div>
                {lastReceipt.paymentMethod === 'gpay' && (
                  <p className="pt-1 text-xs text-[#7C3F5B]">
                    GPay Number: <span className="font-semibold text-[#DB2777] tabular-nums">{BAKERY_CONTACT.phoneDisplay}</span>
                    {lastReceipt.paymentReference
                      ? ` · Ref: ${lastReceipt.paymentReference}`
                      : ' · Share screenshot on WhatsApp / call to verify'}
                  </p>
                )}
              </div>
            </div>

            <p className="text-xs text-center text-[#7C3F5B]">
              Need changes to this batch? Call{' '}
              <a
                href={BAKERY_CONTACT.phoneHref}
                className="font-semibold text-[#DB2777] hover:underline tabular-nums"
              >
                {BAKERY_CONTACT.phoneDisplay}
              </a>
            </p>

            <button
              type="button"
              onClick={() => {
                onDismissReceipt();
                onClose();
              }}
              className="w-full h-11 text-sm font-semibold text-white bg-[#DB2777] hover:bg-[#BE185D] rounded-md transition-colors"
            >
              Continue Browsing Menu
            </button>
          </div>
        ) : items.length === 0 ? (
          /* Empty Cart */
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-pink-polka">
            <div className="w-full p-7 bg-white border border-[#F9A8D4] rounded-2xl shadow-xs">
              <RibbonGiftBoxIllustration />
              <p className="mt-4 font-display text-xl font-semibold text-[#4A152E]">
                Your oven bag is empty
              </p>
              <p className="mt-2 text-sm text-[#7C3F5B] max-w-[30ch] mx-auto">
                Add fresh bakes or build a custom Jain Oven Pack to get started.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 px-5 py-2.5 text-sm font-semibold text-white bg-[#DB2777] hover:bg-[#BE185D] rounded-md transition-colors"
              >
                Browse Daily Bakes
              </button>
            </div>
          </div>
        ) : step === 'cart' ? (
          /* Cart Item List */
          <>
            {/* Delivery Eligibility Progress */}
            <div className="px-4 sm:px-6 py-3.5 bg-[#FFF0F6] border-b border-[#FBCFE8] shrink-0">
              <div className="flex items-center justify-between gap-2 text-xs font-medium text-[#4A152E] mb-1.5">
                <span>
                  {!isDeliveryEligible
                    ? `Add ${formatINR(amountNeededForDelivery)} more for delivery (above ₹200)`
                    : qualifiesFreeDelivery
                      ? 'Free local delivery unlocked (order above ₹1,000)'
                      : `Delivery eligible · Add ${formatINR(amountNeededForFreeDelivery)} for free delivery`}
                </span>
                <span className="tabular-nums text-[#7C3F5B] shrink-0">
                  {formatINR(subtotal)} / &gt;{' '}
                  {formatINR(isDeliveryEligible ? FREE_DELIVERY_THRESHOLD : MIN_DELIVERY_ORDER)}
                </span>
              </div>
              <div className="h-1.5 w-full bg-[#FCE7F3] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#DB2777] transition-all duration-200"
                  style={{ width: `${deliveryProgress}%` }}
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-white">
              {items.map((item) => (
                <div
                  key={item.cartItemId}
                  className="flex gap-3.5 sm:gap-4 pb-5 border-b border-[#FBCFE8] last:border-b-0 last:pb-0"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden border border-[#F9A8D4] bg-[#FCE7F3] shrink-0">
                    <ResilientImage
                      src={item.image}
                      alt={item.name}
                      fallbackTitle={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold text-[#4A152E] leading-snug break-words">
                        {item.name}
                      </h3>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.cartItemId)}
                        aria-label={`Remove ${item.name}`}
                        className="p-1 text-[#9D617C] hover:text-[#4A152E] transition-colors shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="mt-0.5 text-xs text-[#7C3F5B]">
                      {item.variantLabel} · {formatINR(item.unitPrice)} each
                    </p>

                    {item.customItems && item.customItems.length > 0 && (
                      <p className="mt-1.5 text-xs text-[#7C3F5B] leading-relaxed">
                        {item.customItems.map((ci) => `${ci.count}× ${ci.name}`).join(', ')}
                      </p>
                    )}

                    {item.note && (
                      <p className="mt-1 text-xs italic text-[#7C3F5B] break-words">Note: {item.note}</p>
                    )}

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div className="inline-flex items-center border border-[#F9A8D4] bg-white rounded">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                          aria-label={`Decrease quantity of ${item.name}`}
                          className="w-9 h-9 sm:w-8 sm:h-8 inline-flex items-center justify-center text-[#4A152E] hover:bg-[#FFF0F6]"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-7 text-center text-xs font-semibold tabular-nums text-[#4A152E]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                          className="w-9 h-9 sm:w-8 sm:h-8 inline-flex items-center justify-center text-[#4A152E] hover:bg-[#FFF0F6]"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-sm font-semibold tabular-nums text-[#4A152E]">
                        {formatINR(item.unitPrice * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Footer */}
            <div className="p-4 sm:p-6 bg-[#FFF0F6] border-t border-[#FBCFE8] shrink-0 space-y-3">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-[#7C3F5B]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#4A152E] tabular-nums">
                    {formatINR(subtotal)}
                  </span>
                </div>
                <p className="text-xs text-[#7C3F5B]">
                  100% eggless &amp; Jain-certified packaging included.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setStep('checkout')}
                className="w-full h-11 px-5 text-sm font-semibold text-white bg-[#DB2777] hover:bg-[#BE185D] rounded-md transition-colors tabular-nums"
              >
                Proceed to Checkout — {formatINR(subtotal)}
              </button>

              {draftWhatsAppUrl && (
                <a
                  href={draftWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-10 px-4 inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#15803D] bg-white border border-[#86EFAC] hover:bg-[#F0FDF4] rounded-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Quick Order via WhatsApp — {formatINR(subtotal)}</span>
                </a>
              )}
            </div>
          </>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleCheckoutSubmit} className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-[#FFF0F6]/45">
              {/* Fulfillment Switch */}
              <div>
                <span className="block text-xs font-semibold text-[#4A152E] mb-2">
                  Fulfillment Method
                </span>
                <div className="grid grid-cols-2 gap-2 p-1 bg-[#FCE7F3] border border-[#FBCFE8] rounded-md">
                  <button
                    type="button"
                    disabled={!isDeliveryEligible}
                    onClick={() => isDeliveryEligible && setFulfillment('delivery')}
                    className={`py-2 text-xs font-medium rounded transition-colors ${
                      fulfillment === 'delivery'
                        ? 'bg-white text-[#DB2777] font-semibold shadow-xs'
                        : 'text-[#7C3F5B] hover:text-[#4A152E]'
                    } disabled:opacity-45 disabled:cursor-not-allowed`}
                  >
                    Local Delivery
                  </button>
                  <button
                    type="button"
                    onClick={() => setFulfillment('pickup')}
                    className={`py-2 text-xs font-medium rounded transition-colors ${
                      fulfillment === 'pickup'
                        ? 'bg-white text-[#DB2777] font-semibold shadow-xs'
                        : 'text-[#7C3F5B] hover:text-[#4A152E]'
                    }`}
                  >
                    Bakery Pickup
                  </button>
                </div>
                {!isDeliveryEligible && (
                  <p className="mt-2 text-xs text-[#7C3F5B]">
                    Delivery is available on purchases above ₹200. Bakery Pickup is available for
                    this order.
                  </p>
                )}
              </div>

              {/* Batch Window */}
              <div>
                <label
                  htmlFor="checkout-slot"
                  className="block text-xs font-semibold text-[#4A152E] mb-1.5"
                >
                  Bake &amp; Dispatch Window
                </label>
                <select
                  id="checkout-slot"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] focus:border-[#DB2777] focus:outline-none"
                >
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Customer Details */}
              <div className="space-y-3">
                <div>
                  <label
                    htmlFor="checkout-name"
                    className="block text-xs font-semibold text-[#4A152E] mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="checkout-name"
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Aarav Shah"
                    className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] focus:border-[#DB2777] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="checkout-phone"
                    className="block text-xs font-semibold text-[#4A152E] mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="checkout-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98201 45678"
                    className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] focus:border-[#DB2777] focus:outline-none"
                  />
                </div>

                {fulfillment === 'pickup' ? (
                  <div className="p-3.5 bg-white border border-[#F9A8D4] rounded-lg text-xs text-[#7C3F5B] leading-relaxed">
                    <span className="block font-semibold text-[#4A152E] mb-0.5">
                      Pickup Location
                    </span>
                    <p>{BAKERY_CONTACT.fullAddress}</p>
                    <p className="mt-1 font-medium text-[#DB2777]">
                      Hours: {BAKERY_CONTACT.pickupHours}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="p-3.5 bg-[#FCE7F3]/75 border border-[#F9A8D4] rounded-lg text-xs text-[#7C3F5B] leading-relaxed">
                      <span className="font-semibold text-[#4A152E]">
                        Local Orders Only (Mulund West, Shivaji Nagar &amp; Kisan Nagar 1):
                      </span>{' '}
                      Kisan Nagar 1 &amp; Shivaji Nagar delivery is ₹50. Mulund West normal delivery
                      is ₹50 and quick delivery is ₹100 (normal delivery free above ₹1,000).
                    </div>

                    <div>
                      <label
                        htmlFor="checkout-area"
                        className="block text-xs font-semibold text-[#4A152E] mb-1"
                      >
                        Delivery Area
                      </label>
                      <select
                        id="checkout-area"
                        value={deliveryArea}
                        onChange={(e) => setDeliveryArea(e.target.value as DeliveryArea)}
                        className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] focus:border-[#DB2777] focus:outline-none"
                      >
                        {DELIVERY_AREAS.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <span className="block text-xs font-semibold text-[#4A152E] mb-1.5">
                        Delivery Option
                      </span>
                      <div className="space-y-2">
                        <button
                          type="button"
                          onClick={() => setDeliverySpeed('normal')}
                          className={`w-full text-left px-3.5 py-2 rounded-lg border text-xs transition-colors flex items-center justify-between gap-2 ${
                            deliverySpeed === 'normal'
                              ? 'bg-[#FFF0F6] border-[#DB2777] text-[#4A152E] font-medium'
                              : 'bg-white border-[#FBCFE8] text-[#7C3F5B]'
                          }`}
                        >
                          <span>
                            {deliveryArea === 'Mulund West'
                              ? 'Mulund West Normal Delivery'
                              : `${deliveryArea} Delivery`}
                          </span>
                          <span className="tabular-nums font-semibold">
                            {qualifiesFreeDelivery ? 'Free (> ₹1,000)' : formatINR(NORMAL_DELIVERY_FEE)}
                          </span>
                        </button>

                        {deliveryArea === 'Mulund West' && (
                          <button
                            type="button"
                            onClick={() => setDeliverySpeed('quick')}
                            className={`w-full text-left px-3.5 py-2 rounded-lg border text-xs transition-colors flex items-center justify-between gap-2 ${
                              deliverySpeed === 'quick'
                                ? 'bg-[#FFF0F6] border-[#DB2777] text-[#4A152E] font-medium'
                                : 'bg-white border-[#FBCFE8] text-[#7C3F5B]'
                            }`}
                          >
                            <span>Mulund West Quick Delivery</span>
                            <span className="tabular-nums font-semibold">
                              {formatINR(MULUND_QUICK_DELIVERY_FEE)}
                            </span>
                          </button>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="checkout-address"
                        className="block text-xs font-semibold text-[#4A152E] mb-1"
                      >
                        Street Address &amp; Flat / Building
                      </label>
                      <input
                        id="checkout-address"
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Wagle Estate, Road No. 5, Flat 302"
                        className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] focus:border-[#DB2777] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="checkout-postal"
                        className="block text-xs font-semibold text-[#4A152E] mb-1"
                      >
                        PIN Code
                      </label>
                      <input
                        id="checkout-postal"
                        type="text"
                        required
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        placeholder="400604"
                        className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] focus:border-[#DB2777] focus:outline-none"
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Payment Terms */}
              <div>
                <span className="block text-xs font-semibold text-[#4A152E] mb-2">
                  Payment Preference
                </span>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('gpay')}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-sm transition-colors ${
                      paymentMethod === 'gpay'
                        ? 'bg-[#FFF0F6] border-[#DB2777] text-[#4A152E] font-medium'
                        : 'bg-white border-[#FBCFE8] text-[#7C3F5B]'
                    }`}
                  >
                    Online Payment via GPay (Google Pay)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-sm transition-colors ${
                      paymentMethod === 'cod'
                        ? 'bg-[#FFF0F6] border-[#DB2777] text-[#4A152E] font-medium'
                        : 'bg-white border-[#FBCFE8] text-[#7C3F5B]'
                    }`}
                  >
                    Cash on Delivery (COD)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pickup_card')}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-sm transition-colors ${
                      paymentMethod === 'pickup_card'
                        ? 'bg-[#FFF0F6] border-[#DB2777] text-[#4A152E] font-medium'
                        : 'bg-white border-[#FBCFE8] text-[#7C3F5B]'
                    }`}
                  >
                    Card / Contactless at Door or Counter
                  </button>
                </div>

                {paymentMethod === 'gpay' && (
                  <div className="mt-3 p-3.5 bg-white border border-[#F9A8D4] rounded-lg space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="block text-xs font-semibold text-[#4A152E]">
                          GPay Number
                        </span>
                        <span className="text-sm font-semibold text-[#DB2777] tabular-nums">
                          {BAKERY_CONTACT.phoneDisplay}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard?.writeText(BAKERY_CONTACT.phoneRaw).catch(() => {});
                          setCopiedGpay(true);
                          setTimeout(() => setCopiedGpay(false), 1800);
                        }}
                        className="px-3 py-1.5 text-xs font-semibold text-[#DB2777] bg-[#FFF0F6] border border-[#F9A8D4] hover:bg-[#FCE7F3] rounded-md transition-colors whitespace-nowrap"
                      >
                        {copiedGpay ? 'Copied' : 'Copy Number'}
                      </button>
                    </div>
                    <div>
                      <label
                        htmlFor="checkout-gpay-ref"
                        className="block text-xs font-medium text-[#7C3F5B] mb-1"
                      >
                        GPay / UPI Transaction ID (Optional)
                      </label>
                      <input
                        id="checkout-gpay-ref"
                        type="text"
                        value={gpayRef}
                        onChange={(e) => setGpayRef(e.target.value)}
                        maxLength={40}
                        placeholder="Enter UPI ref after paying, or pay on confirmation"
                        className="w-full h-9 px-3 text-xs bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] placeholder:text-[#9D617C] focus:border-[#DB2777] focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              {formError && (
                <p role="alert" className="text-xs font-medium text-[#B91C1C]">
                  {formError}
                </p>
              )}
            </div>

            {/* Order Total + Confirm */}
            <div className="p-4 sm:p-6 bg-white border-t border-[#FBCFE8] shrink-0 space-y-3">
              <div className="space-y-1 text-sm">
                <div className="flex justify-between text-[#7C3F5B]">
                  <span>Subtotal</span>
                  <span className="tabular-nums">{formatINR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[#7C3F5B]">
                  <span>{fulfillment === 'delivery' ? 'Local Delivery' : 'Bakery Pickup'}</span>
                  <span className="tabular-nums text-right">{deliveryDisplayLabel}</span>
                </div>
                <div className="pt-2 border-t border-[#FBCFE8] flex justify-between font-semibold text-[#4A152E]">
                  <span>Total Due</span>
                  <span className="tabular-nums">{formatINR(orderTotal)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-11 px-5 text-sm font-semibold text-white bg-[#DB2777] hover:bg-[#BE185D] rounded-md transition-colors tabular-nums"
              >
                Confirm &amp; Review WhatsApp Order — {formatINR(orderTotal)}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
