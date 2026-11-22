export type BakeryCategory = 'All' | 'Butter' | 'Khari' | 'Toast' | 'Bakery Products' | 'Cookies' | 'Cakes';

export interface ProductVariant {
  id: string;
  label: string;
  priceDelta: number;
  note: string;
}

export interface BakeryProduct {
  id: string;
  name: string;
  category: Exclude<BakeryCategory, 'All'>;
  price?: number;
  weightOrCount: string;
  dietaryLabel: string;
  highlightNote?: string;
  shortDescription: string;
  fullDescription: string;
  ingredients: string[];
  image: string;
  imageAlt: string;
  variants: ProductVariant[];
}

export interface PackSlotItem {
  id: string;
  name: string;
  category: string;
  portionLabel: string;
  image: string;
}

export interface PackTier {
  id: string;
  name: string;
  slotCount: number;
  price: number;
  packagingNote: string;
}

export interface CartItem {
  cartItemId: string;
  productId: string;
  name: string;
  category: string;
  variantLabel: string;
  unitPrice: number;
  quantity: number;
  image: string;
  customItems?: { name: string; count: number }[];
  note?: string;
}

export type FulfillmentMethod = 'delivery' | 'pickup';
export type PaymentMethod = 'gpay' | 'cod' | 'pickup_card';

export interface OrderReceipt {
  orderNumber: string;
  placedAt: string;
  customerName: string;
  phone: string;
  fulfillment: FulfillmentMethod;
  address?: string;
  postalCode?: string;
  timeSlot: string;
  paymentMethod: PaymentMethod;
  paymentReference?: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  deliveryNote?: string;
  total: number;
}
