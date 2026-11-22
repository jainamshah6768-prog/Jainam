import { useEffect, useState } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { BAKERY_CONTACT } from '../data/bakeryCatalog';
import { BakeryProduct, ProductVariant } from '../types/bakery';
import { formatINR } from '../utils/currency';
import { ResilientImage } from './ResilientImage';

interface ProductDetailModalProps {
  product: BakeryProduct | null;
  onClose: () => void;
  onAddToCart: (
    product: BakeryProduct,
    variant: ProductVariant,
    quantity: number,
    note?: string
  ) => void;
}

export function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
}: ProductDetailModalProps) {
  const [selectedVariantId, setSelectedVariantId] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState('');

  useEffect(() => {
    if (product) {
      setSelectedVariantId(product.variants[0]?.id ?? '');
      setQuantity(1);
      setNote('');
    }
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const activeVariant =
    product.variants.find((v) => v.id === selectedVariantId) ?? product.variants[0];
  const hasPrice = product.price !== undefined;
  const unitPrice = hasPrice ? (product.price ?? 0) + (activeVariant?.priceDelta ?? 0) : null;
  const lineTotal = unitPrice !== null ? unitPrice * quantity : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasPrice) {
      onClose();
      document.getElementById('custom-orders')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    onAddToCart(product, activeVariant, quantity, note.trim() || undefined);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4A152E]/45 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdp-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-[#F9A8D4] rounded-2xl shadow-xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/95 border border-[#F9A8D4] text-[#4A152E] hover:bg-[#FFF0F6] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Sticky / Left Gallery */}
          <div className="md:col-span-6 bg-[#FFF0F6] md:border-r border-[#FBCFE8] p-6 flex flex-col justify-between">
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-[#F9A8D4] bg-white">
              <ResilientImage
                src={product.image}
                alt={product.imageAlt}
                fallbackTitle={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-6 pt-5 border-t border-[#FBCFE8]">
              <h4 className="text-xs font-semibold text-[#4A152E] mb-2">
                Full Ingredients (Eggless &amp; Root-Free)
              </h4>
              <p className="text-xs leading-relaxed text-[#7C3F5B]">
                {product.ingredients.join(' · ')}
              </p>
            </div>
          </div>

          {/* Right Contiguous Purchase Module */}
          <form onSubmit={handleSubmit} className="md:col-span-6 p-6 sm:p-8 flex flex-col">
            <div className="flex items-center gap-2 text-xs text-[#7C3F5B]">
              <span className="font-semibold text-[#DB2777]">{product.category}</span>
              <span aria-hidden="true">·</span>
              <span>{product.weightOrCount}</span>
            </div>

            <h3
              id="pdp-title"
              className="mt-2 pr-10 md:pr-0 font-display text-2xl sm:text-3xl font-semibold text-[#4A152E] text-balance"
            >
              {product.name}
            </h3>

            <p className="mt-2 text-lg font-semibold text-[#4A152E] tabular-nums">
              {unitPrice !== null ? formatINR(unitPrice) : `Price on Inquiry · Call ${BAKERY_CONTACT.phoneDisplay}`}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-[#7C3F5B]">
              {product.fullDescription}
            </p>

            <p className="mt-3 text-xs font-medium text-[#DB2777]">
              {product.dietaryLabel}
            </p>

            {/* Variant Selection */}
            <div className="mt-6 pt-5 border-t border-[#FBCFE8]">
              <span className="block text-xs font-semibold text-[#4A152E] mb-2.5">
                Preparation Style
              </span>
              <div className="flex flex-col gap-2">
                {product.variants.map((variant) => {
                  const isSelected = activeVariant?.id === variant.id;
                  return (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => setSelectedVariantId(variant.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-lg border transition-colors flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-[#FFF0F6] border-[#DB2777] text-[#4A152E]'
                          : 'bg-white border-[#FBCFE8] text-[#7C3F5B] hover:border-[#F9A8D4]'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-medium text-[#4A152E]">{variant.label}</div>
                        <div className="text-xs text-[#7C3F5B]">{variant.note}</div>
                      </div>
                      <span className="text-xs font-medium tabular-nums shrink-0 text-[#4A152E]">
                        {variant.priceDelta > 0 ? `+${formatINR(variant.priceDelta)}` : 'Included'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Optional Note */}
            <div className="mt-5">
              <label htmlFor="pdp-note" className="block text-xs font-semibold text-[#4A152E] mb-1.5">
                Bakery Note or Gift Message (Optional)
              </label>
              <input
                id="pdp-note"
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                maxLength={120}
                placeholder="e.g. Slice thick, add gift ribbon"
                className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] placeholder:text-[#9D617C] focus:border-[#DB2777] focus:outline-none"
              />
            </div>

            {/* Quantity + Primary Buy CTA */}
            {lineTotal !== null ? (
              <div className="mt-6 pt-5 border-t border-[#FBCFE8] flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center border border-[#F9A8D4] bg-white rounded-md">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="w-10 h-11 inline-flex items-center justify-center text-[#4A152E] hover:bg-[#FFF0F6] rounded-l-md transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-9 text-center text-sm font-semibold tabular-nums text-[#4A152E]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(20, q + 1))}
                    aria-label="Increase quantity"
                    className="w-10 h-11 inline-flex items-center justify-center text-[#4A152E] hover:bg-[#FFF0F6] rounded-r-md transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  type="submit"
                  className="flex-1 min-w-[180px] h-11 px-4 sm:px-5 text-sm font-semibold text-white bg-[#DB2777] hover:bg-[#BE185D] rounded-md transition-colors tabular-nums whitespace-nowrap"
                >
                  Add to Bag — {formatINR(lineTotal)}
                </button>
              </div>
            ) : (
              <div className="mt-6 pt-5 border-t border-[#FBCFE8] flex flex-wrap items-center gap-3">
                <a
                  href={BAKERY_CONTACT.phoneHref}
                  className="flex-1 h-11 px-5 inline-flex items-center justify-center text-sm font-semibold text-white bg-[#DB2777] hover:bg-[#BE185D] rounded-md transition-colors tabular-nums whitespace-nowrap"
                >
                  Call to Order — {BAKERY_CONTACT.phoneDisplay}
                </a>
                <button
                  type="submit"
                  className="h-11 px-4 text-sm font-semibold text-[#DB2777] bg-[#FFF0F6] border border-[#F9A8D4] hover:bg-[#FCE7F3] rounded-md transition-colors whitespace-nowrap"
                >
                  Order Inquiry Form
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
