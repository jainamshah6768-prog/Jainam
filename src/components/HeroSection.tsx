import { ArrowRight } from 'lucide-react';
import { BAKERY_CONTACT, HERO_MEDIA } from '../data/bakeryCatalog';
import { BakeryCrestDivider, CornerFlourish, ScallopDivider } from './BakeryOrnaments';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onShopOvenPacks: () => void;
  onJumpToBuilder: () => void;
}

const KITCHEN_GUARANTEES = [
  {
    label: 'Kitchen Standard',
    value: '100% Eggless · Zero Onion/Garlic',
  },
  {
    label: 'Custom Orders Taken',
    value: 'Cakes, Hampers & Bulk Batches',
  },
  {
    label: 'Mulund West · Shivaji Nagar · Kisan Nagar 1',
    value: 'Kisan Nagar 1 & Shivaji Nagar ₹50 · Mulund ₹50 / Quick ₹100',
  },
];

export function HeroSection({ onShopOvenPacks, onJumpToBuilder }: HeroSectionProps) {
  return (
    <section id="top" className="relative bg-pink-polka pt-8 sm:pt-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-10 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Crisp White Framed Patisserie Story Card */}
          <div className="relative lg:col-span-5 bg-white border border-[#F9A8D4] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <CornerFlourish position="tl" className="absolute top-3 left-3" />
            <CornerFlourish position="tr" className="absolute top-3 right-3" />

            <div className="pt-2">
              <div className="mb-4">
                <BakeryCrestDivider label="Jain Patisserie & Hearth" />
              </div>

              <p className="text-xs font-medium tracking-wide text-[#7C3F5B] mb-3 text-center sm:text-left">
                100% Eggless <span aria-hidden="true">·</span> Pure Vegetarian{' '}
                <span aria-hidden="true">·</span> Jain-Certified Kitchen
              </p>

              <h1 className="font-display text-[clamp(2.1rem,3.6vw,3.1rem)] leading-[1.08] font-semibold tracking-tight text-[#4A152E] text-balance">
                Stone-hearth bread &amp; oven packs, baked purely.
              </h1>

              <p className="mt-4 text-[15px] leading-[1.65] text-[#7C3F5B] max-w-[46ch]">
                Small-batch sourdough boules, flaky butter croissants, heirloom nankhatai, and
                seasonal Christmas special plum cakes crafted without eggs, onion, garlic, or root
                vegetables—packed warm in blush-ribbon boxes for your table.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#FBCFE8] flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onShopOvenPacks}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#DB2777] hover:bg-[#BE185D] rounded-md shadow-xs transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
              >
                <span>Shop Oven Packs</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
              </button>

              <button
                type="button"
                onClick={onJumpToBuilder}
                className="inline-flex items-center px-5 py-3 text-sm font-semibold text-[#DB2777] bg-[#FFF0F6] border border-[#F9A8D4] hover:bg-[#FCE7F3] rounded-md transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
              >
                Build Custom Box
              </button>
            </div>
          </div>

          {/* Right Gallery-Mat Framed JOP Food Products Logo */}
          <div className="lg:col-span-7">
            <div className="h-full p-3 bg-white border border-[#F9A8D4] rounded-2xl shadow-sm flex flex-col">
              <div className="relative flex-1 aspect-[16/9] lg:aspect-auto lg:min-h-[380px] rounded-xl overflow-hidden border border-[#FBCFE8] bg-white flex items-center justify-center p-2">
                <ResilientImage
                  src={HERO_MEDIA.image}
                  alt={HERO_MEDIA.alt}
                  fallbackTitle="JOP Food Products"
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div className="pt-3 px-2 flex flex-wrap items-center justify-between gap-2 text-xs text-[#7C3F5B]">
                <span className="font-display italic text-[#9D174D]">
                  Jain Oven Pack · Cheknaka, Wagle West
                </span>
                <span>Pickup Mon – Sun, 12:00 Noon – 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Guarantee Bar in Crisp White Card */}
        <div className="mt-8 bg-white border border-[#F9A8D4] rounded-xl px-6 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 shadow-xs">
          {KITCHEN_GUARANTEES.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="text-xs font-medium text-[#7C3F5B]">{item.label}</span>
              <span className="text-sm font-semibold text-[#4A152E]">{item.value}</span>
            </div>
          ))}
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-[#7C3F5B]">Order &amp; Inquiries</span>
            <a
              href={BAKERY_CONTACT.phoneHref}
              className="text-sm font-semibold text-[#DB2777] hover:underline tabular-nums w-fit"
            >
              {BAKERY_CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Scalloped Pastry Box Edge Transition to White Catalog */}
      <ScallopDivider fillColor="#FFFFFF" />
    </section>
  );
}
