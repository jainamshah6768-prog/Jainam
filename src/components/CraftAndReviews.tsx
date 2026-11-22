import { useState } from 'react';
import { CheckCircle2, MessageCircle, Minus, Plus } from 'lucide-react';
import {
  BAKERY_CONTACT,
  CHRISTMAS_PLUM_CAKE_MEDIA,
  CRAFT_PILLARS,
  CUSTOMER_TESTIMONIALS,
} from '../data/bakeryCatalog';
import { formatINR } from '../utils/currency';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { BakeryCrestDivider, CornerFlourish } from './BakeryOrnaments';
import { ResilientImage } from './ResilientImage';

const TRAY_RATE_INR = 100;
const TRAY_SLOTS = [
  'Afternoon (12:00 PM – 2:30 PM)',
  'Evening (2:30 PM – 5:30 PM)',
  'Late Evening (5:30 PM – 8:00 PM)',
];

const PLUM_CAKE_OPTIONS = [
  '500g Classic Festive Loaf',
  '1 kg Celebration Plum Cake',
  'Ribbon Gift Box Edition',
];

const CUSTOM_ORDER_TYPES = [
  'Custom Celebration Cake',
  'Tailored Oven Pack / Gift Hamper',
  'Bulk Party & Family Trays',
  'Bespoke Jain Breads & Savories',
];

const CUSTOM_BATCH_SIZES = [
  'Small Batch (500g / 6–8 Pieces)',
  'Medium Batch (1 kg / 12–15 Pieces)',
  'Large Event Batch (2+ kg / 25+ Pieces)',
];

export function CraftAndReviews() {
  // Diwali Nankhatai Tray State
  const [trayCount, setTrayCount] = useState(2);
  const [preferredSlot, setPreferredSlot] = useState(TRAY_SLOTS[0]);
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [bookingError, setBookingError] = useState('');
  const [bookingRef, setBookingRef] = useState<string | null>(null);

  // Christmas Plum Cake Pre-Order State
  const [cakeFormat, setCakeFormat] = useState(PLUM_CAKE_OPTIONS[0]);
  const [cakeCount, setCakeCount] = useState(1);
  const [cakeSlot, setCakeSlot] = useState(TRAY_SLOTS[0]);
  const [cakeName, setCakeName] = useState('');
  const [cakePhone, setCakePhone] = useState('');
  const [cakeError, setCakeError] = useState('');
  const [cakeRef, setCakeRef] = useState<string | null>(null);

  // Custom Order Request State
  const [customOrderType, setCustomOrderType] = useState(CUSTOM_ORDER_TYPES[0]);
  const [customBatchSize, setCustomBatchSize] = useState(CUSTOM_BATCH_SIZES[1]);
  const [customDate, setCustomDate] = useState('');
  const [customFulfillment, setCustomFulfillment] = useState<'pickup' | 'delivery'>('pickup');
  const [customNotes, setCustomNotes] = useState('');
  const [customName, setCustomName] = useState('');
  const [customPhone, setCustomPhone] = useState('');
  const [customError, setCustomError] = useState('');
  const [customRef, setCustomRef] = useState<string | null>(null);

  const trayTotal = trayCount * TRAY_RATE_INR;

  const handleReserveTrays = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestPhone.trim()) {
      setBookingError('Please enter your name and phone number to reserve trays.');
      return;
    }
    setBookingError('');
    const code = Math.floor(100 + Math.random() * 900);
    setBookingRef(`JOP-T${code}`);
  };

  const handleReservePlumCake = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cakeName.trim() || !cakePhone.trim()) {
      setCakeError('Please enter your name and phone number for Christmas plum cake inquiry.');
      return;
    }
    setCakeError('');
    const code = Math.floor(100 + Math.random() * 900);
    setCakeRef(`JOP-X${code}`);
  };

  const handleSubmitCustomOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim() || !customPhone.trim() || !customNotes.trim()) {
      setCustomError('Please enter your name, phone number, and custom order details.');
      return;
    }
    setCustomError('');
    const code = Math.floor(1000 + Math.random() * 9000);
    setCustomRef(`JOP-C${code}`);
  };

  return (
    <section id="our-craft" className="py-14 lg:py-18 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1: Kitchen Protocol */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-14 border-b border-[#FBCFE8]">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium text-[#7C3F5B] mb-2">
              Bakery Standards <span aria-hidden="true">·</span> Kitchen Protocol
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#4A152E] text-balance">
              Pure ingredients, disciplined technique.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#7C3F5B]">
              Every batch at Jain Oven Pack is fermented and baked under strict dietary separation
              so households observing Jain, eggless, or pure-vegetarian traditions never have to
              compromise on crumb or crust.
            </p>
            <div className="mt-4 space-y-1 text-sm text-[#7C3F5B]">
              <p>
                Bulk or custom orders:{' '}
                <a
                  href={BAKERY_CONTACT.phoneHref}
                  className="font-semibold text-[#DB2777] hover:underline tabular-nums"
                >
                  {BAKERY_CONTACT.phoneDisplay}
                </a>
              </p>
              <p className="text-xs leading-relaxed">{BAKERY_CONTACT.fullAddress}</p>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {CRAFT_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="flex flex-col p-5 bg-[#FFF0F6]/70 border border-[#FBCFE8] rounded-xl"
              >
                <span className="font-mono text-xs font-semibold text-[#DB2777]">
                  {pillar.number}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-[#4A152E]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#7C3F5B]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Custom Orders Showcase */}
        <div
          id="custom-orders"
          className="mt-12 p-6 sm:p-8 lg:p-10 bg-pink-polka border border-[#F9A8D4] rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
        >
          <div className="lg:col-span-6">
            <p className="text-xs font-medium text-[#7C3F5B] mb-2">
              Made to Order <span aria-hidden="true">·</span> Mulund West, Shivaji Nagar &amp; Kisan Nagar 1
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#4A152E] text-balance">
              We also take custom orders.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#7C3F5B] max-w-[52ch]">
              Planning a birthday, anniversary, puja gathering, or corporate gifting box? Tell us
              your preferred flavours, weight, and date—our kitchen crafts bespoke 100% eggless,
              pure-vegetarian bakes free of onion, garlic, and root vegetables.
            </p>

            <div className="mt-6 bg-white border border-[#FBCFE8] rounded-xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="block text-xs text-[#7C3F5B]">Custom Bakes Available</span>
                <span className="mt-0.5 block text-sm font-semibold text-[#4A152E]">
                  Cakes, Gift Hampers &amp; Bulk Trays
                </span>
              </div>
              <div>
                <span className="block text-xs text-[#7C3F5B]">Dietary Standard</span>
                <span className="mt-0.5 block text-sm font-semibold text-[#4A152E]">
                  100% Eggless (No Vegan / Nut-Free)
                </span>
              </div>
              <div>
                <span className="block text-xs text-[#7C3F5B]">Pickup &amp; Local Delivery</span>
                <span className="mt-0.5 block text-sm font-semibold text-[#4A152E]">
                  Kisan Nagar 1 &amp; Shivaji Nagar ₹50 · Mulund ₹50 / Quick ₹100
                </span>
              </div>
              <div>
                <span className="block text-xs text-[#7C3F5B]">Call &amp; Online GPay</span>
                <a
                  href={BAKERY_CONTACT.phoneHref}
                  className="mt-0.5 inline-block text-sm font-semibold text-[#DB2777] hover:underline tabular-nums"
                >
                  {BAKERY_CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white border border-[#F9A8D4] rounded-xl p-6 shadow-xs">
            {customRef ? (
              <div className="space-y-4">
                <div className="flex items-start gap-2.5 text-[#DB2777]">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#4A152E]">
                      Custom Order Request #{customRef} Received
                    </h3>
                    <p className="mt-1 text-xs text-[#7C3F5B] leading-relaxed">
                      {customOrderType} <span aria-hidden="true">·</span> {customBatchSize}
                      {customDate ? ` · For ${customDate}` : ''} (
                      {customFulfillment === 'pickup' ? 'Bakery Pickup' : 'Local Delivery'})
                    </p>
                  </div>
                </div>
                <p className="text-xs text-[#4A152E] bg-[#FFF0F6] border border-[#FBCFE8] rounded-md p-3 leading-relaxed">
                  &ldquo;{customNotes}&rdquo;
                </p>
                <p className="text-xs text-[#7C3F5B] leading-relaxed">
                  We will reach out to <span className="font-medium text-[#4A152E]">{customPhone}</span>{' '}
                  to confirm custom pricing and batch timing, or call{' '}
                  <a
                    href={BAKERY_CONTACT.phoneHref}
                    className="font-semibold text-[#DB2777] hover:underline tabular-nums"
                  >
                    {BAKERY_CONTACT.phoneDisplay}
                  </a>{' '}
                  directly.
                </p>
                <a
                  href={buildWhatsAppUrl(
                    [
                      `*Jain Oven Pack — Custom Order Request #${customRef}*`,
                      `Name: ${customName.trim()}`,
                      `Phone: ${customPhone.trim()}`,
                      `Type: ${customOrderType}`,
                      `Batch Size: ${customBatchSize}`,
                      customDate ? `Date: ${customDate}` : '',
                      `Fulfillment: ${customFulfillment === 'pickup' ? 'Bakery Pickup' : 'Local Delivery'}`,
                      `Notes: ${customNotes.trim()}`,
                    ]
                      .filter(Boolean)
                      .join('\n')
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-10 inline-flex items-center justify-center gap-2 text-xs font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Send Request on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setCustomRef(null);
                    setCustomNotes('');
                    setCustomName('');
                    setCustomPhone('');
                  }}
                  className="w-full h-10 text-xs font-semibold text-[#DB2777] bg-[#FFF0F6] border border-[#F9A8D4] hover:bg-[#FCE7F3] rounded-md transition-colors"
                >
                  Submit Another Custom Order
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitCustomOrder} className="space-y-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-[#4A152E]">
                    Request a Custom Order
                  </h3>
                  <span className="text-xs font-semibold text-[#DB2777]">Mulund West · Shivaji Nagar · Kisan Nagar 1</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="custom-type"
                      className="block text-xs font-semibold text-[#4A152E] mb-1"
                    >
                      Order Type
                    </label>
                    <select
                      id="custom-type"
                      value={customOrderType}
                      onChange={(e) => setCustomOrderType(e.target.value)}
                      className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] focus:border-[#DB2777] focus:outline-none"
                    >
                      {CUSTOM_ORDER_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="custom-size"
                      className="block text-xs font-semibold text-[#4A152E] mb-1"
                    >
                      Size / Batch Estimate
                    </label>
                    <select
                      id="custom-size"
                      value={customBatchSize}
                      onChange={(e) => setCustomBatchSize(e.target.value)}
                      className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] focus:border-[#DB2777] focus:outline-none"
                    >
                      {CUSTOM_BATCH_SIZES.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="custom-date"
                      className="block text-xs font-semibold text-[#4A152E] mb-1"
                    >
                      Event / Pickup Date
                    </label>
                    <input
                      id="custom-date"
                      type="date"
                      value={customDate}
                      onChange={(e) => setCustomDate(e.target.value)}
                      className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] focus:border-[#DB2777] focus:outline-none"
                    />
                  </div>

                  <div>
                    <span className="block text-xs font-semibold text-[#4A152E] mb-1">
                      Fulfillment
                    </span>
                    <div className="grid grid-cols-2 gap-1.5 p-1 h-10 bg-[#FCE7F3] border border-[#FBCFE8] rounded-md">
                      <button
                        type="button"
                        onClick={() => setCustomFulfillment('pickup')}
                        className={`text-xs font-medium rounded transition-colors ${
                          customFulfillment === 'pickup'
                            ? 'bg-white text-[#DB2777] font-semibold shadow-xs'
                            : 'text-[#7C3F5B] hover:text-[#4A152E]'
                        }`}
                      >
                        Pickup
                      </button>
                      <button
                        type="button"
                        onClick={() => setCustomFulfillment('delivery')}
                        className={`text-xs font-medium rounded transition-colors ${
                          customFulfillment === 'delivery'
                            ? 'bg-white text-[#DB2777] font-semibold shadow-xs'
                            : 'text-[#7C3F5B] hover:text-[#4A152E]'
                        }`}
                      >
                        Delivery
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="custom-notes"
                    className="block text-xs font-semibold text-[#4A152E] mb-1"
                  >
                    Custom Flavours, Design &amp; Packaging Notes
                  </label>
                  <textarea
                    id="custom-notes"
                    rows={3}
                    required
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    maxLength={280}
                    placeholder="e.g. 1 kg rose pistachio eggless cake, pink floral frosting, message on card..."
                    className="w-full p-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] placeholder:text-[#9D617C] focus:border-[#DB2777] focus:outline-none resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="custom-name"
                      className="block text-xs font-semibold text-[#4A152E] mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      id="custom-name"
                      type="text"
                      required
                      value={customName}
                      onChange={(e) => setCustomName(e.target.value)}
                      placeholder="Priya Shah"
                      className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] placeholder:text-[#9D617C] focus:border-[#DB2777] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="custom-phone"
                      className="block text-xs font-semibold text-[#4A152E] mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      id="custom-phone"
                      type="tel"
                      required
                      value={customPhone}
                      onChange={(e) => setCustomPhone(e.target.value)}
                      placeholder="+91 98201 45678"
                      className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] placeholder:text-[#9D617C] focus:border-[#DB2777] focus:outline-none"
                    />
                  </div>
                </div>

                {customError && (
                  <p role="alert" className="text-xs font-medium text-[#B91C1C]">
                    {customError}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full h-11 px-4 text-sm font-semibold text-white bg-[#DB2777] hover:bg-[#BE185D] rounded-md transition-colors"
                >
                  Submit Custom Order Request
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Part 2A: Christmas Special Plum Cakes */}
        <div className="mt-10 p-6 sm:p-8 lg:p-10 bg-pink-lace-grid border border-[#F9A8D4] rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs font-medium text-[#7C3F5B] mb-2">
                Christmas Special <span aria-hidden="true">·</span> Seasonal Bake
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[#4A152E] text-balance">
                Christmas special plum cakes, 100% eggless.
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[#7C3F5B] max-w-[54ch]">
                On Christmas, we bake small-batch special plum cakes rich with slow-steeped dry
                fruits, toasted nuts, candied citrus, and warm holiday spices—prepared in our
                100% eggless, pure-vegetarian stone-hearth kitchen for Mulund West, Shivaji Nagar,
                and Kisan Nagar 1.
              </p>
            </div>

            <div className="relative p-2.5 bg-white border border-[#F9A8D4] rounded-2xl shadow-xs">
              <CornerFlourish position="tl" className="absolute top-3 left-3 z-10" />
              <CornerFlourish position="tr" className="absolute top-3 right-3 z-10" />
              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#FBCFE8] bg-[#FCE7F3]">
                <ResilientImage
                  src={CHRISTMAS_PLUM_CAKE_MEDIA.image}
                  alt={CHRISTMAS_PLUM_CAKE_MEDIA.alt}
                  fallbackTitle="Christmas Special Eggless Plum Cake"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-2.5 px-1.5 flex flex-wrap items-center justify-between gap-2 text-xs text-[#7C3F5B]">
                <span className="font-display italic text-[#9D174D]">
                  Available on Christmas · Rich Fruit &amp; Spice Loaf
                </span>
                <span>100% Eggless · Pure Vegetarian</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-[#F9A8D4] rounded-xl p-6 shadow-xs flex flex-col justify-center">
            {cakeRef ? (
              <div className="space-y-4">
                <div className="flex items-start gap-2.5 text-[#DB2777]">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#4A152E]">
                      Christmas Plum Cake Request #{cakeRef} Noted
                    </h3>
                    <p className="mt-1 text-xs text-[#7C3F5B] leading-relaxed">
                      {cakeCount}× {cakeFormat} <span aria-hidden="true">·</span> {cakeSlot}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-[#7C3F5B] leading-relaxed pt-3 border-t border-[#FBCFE8]">
                  We will confirm seasonal batch availability and Rupee pricing on{' '}
                  <a
                    href={BAKERY_CONTACT.phoneHref}
                    className="font-semibold text-[#DB2777] hover:underline tabular-nums"
                  >
                    {BAKERY_CONTACT.phoneDisplay}
                  </a>
                  . Pickup at {BAKERY_CONTACT.addressLine1} or local delivery in Mulund West, Shivaji
                  Nagar &amp; Kisan Nagar 1 (Kisan Nagar 1 &amp; Shivaji Nagar ₹50 · Mulund West ₹50 Normal / ₹100 Quick).
                </p>
                <a
                  href={buildWhatsAppUrl(
                    [
                      `*Jain Oven Pack — Christmas Plum Cake Inquiry #${cakeRef}*`,
                      `Name: ${cakeName.trim()}`,
                      `Phone: ${cakePhone.trim()}`,
                      `Format: ${cakeCount}× ${cakeFormat}`,
                      `Preferred Slot: ${cakeSlot}`,
                    ].join('\n')
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-10 inline-flex items-center justify-center gap-2 text-xs font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Send Request on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setCakeRef(null);
                    setCakeName('');
                    setCakePhone('');
                  }}
                  className="w-full h-10 text-xs font-semibold text-[#DB2777] bg-[#FFF0F6] border border-[#F9A8D4] hover:bg-[#FCE7F3] rounded-md transition-colors"
                >
                  Request Another Plum Cake
                </button>
              </div>
            ) : (
              <form onSubmit={handleReservePlumCake} className="space-y-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-[#4A152E]">
                    Pre-Order Christmas Plum Cake
                  </h3>
                  <span className="text-xs font-semibold text-[#DB2777]">Christmas Special</span>
                </div>

                <div>
                  <label
                    htmlFor="plum-cake-format"
                    className="block text-xs font-semibold text-[#4A152E] mb-1"
                  >
                    Cake Size / Presentation
                  </label>
                  <select
                    id="plum-cake-format"
                    value={cakeFormat}
                    onChange={(e) => setCakeFormat(e.target.value)}
                    className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] focus:border-[#DB2777] focus:outline-none"
                  >
                    {PLUM_CAKE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center justify-between gap-3 py-2 border-y border-[#FBCFE8]">
                  <span className="text-sm font-medium text-[#4A152E]">Quantity</span>
                  <div className="inline-flex items-center border border-[#F9A8D4] rounded-md bg-white">
                    <button
                      type="button"
                      onClick={() => setCakeCount((c) => Math.max(1, c - 1))}
                      aria-label="Decrease plum cake quantity"
                      className="w-9 h-9 inline-flex items-center justify-center text-[#4A152E] hover:bg-[#FFF0F6] rounded-l-md"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-9 text-center text-sm font-semibold tabular-nums text-[#4A152E]">
                      {cakeCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setCakeCount((c) => Math.min(20, c + 1))}
                      aria-label="Increase plum cake quantity"
                      className="w-9 h-9 inline-flex items-center justify-center text-[#4A152E] hover:bg-[#FFF0F6] rounded-r-md"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="plum-cake-slot"
                    className="block text-xs font-semibold text-[#4A152E] mb-1"
                  >
                    Preferred Pickup / Dispatch Slot
                  </label>
                  <select
                    id="plum-cake-slot"
                    value={cakeSlot}
                    onChange={(e) => setCakeSlot(e.target.value)}
                    className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] focus:border-[#DB2777] focus:outline-none"
                  >
                    {TRAY_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="plum-cake-name"
                      className="block text-xs font-semibold text-[#4A152E] mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      id="plum-cake-name"
                      type="text"
                      required
                      value={cakeName}
                      onChange={(e) => setCakeName(e.target.value)}
                      placeholder="Riya Shah"
                      className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] placeholder:text-[#9D617C] focus:border-[#DB2777] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="plum-cake-phone"
                      className="block text-xs font-semibold text-[#4A152E] mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      id="plum-cake-phone"
                      type="tel"
                      required
                      value={cakePhone}
                      onChange={(e) => setCakePhone(e.target.value)}
                      placeholder="+91 98201 45678"
                      className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] placeholder:text-[#9D617C] focus:border-[#DB2777] focus:outline-none"
                    />
                  </div>
                </div>

                {cakeError && (
                  <p role="alert" className="text-xs font-medium text-[#B91C1C]">
                    {cakeError}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full h-11 px-4 text-sm font-semibold text-white bg-[#DB2777] hover:bg-[#BE185D] rounded-md transition-colors tabular-nums"
                >
                  Request {cakeCount} Christmas Plum {cakeCount === 1 ? 'Cake' : 'Cakes'}
                </button>

                <p className="text-xs text-center text-[#7C3F5B]">
                  Or call{' '}
                  <a
                    href={BAKERY_CONTACT.phoneHref}
                    className="font-semibold text-[#DB2777] hover:underline tabular-nums"
                  >
                    {BAKERY_CONTACT.phoneDisplay}
                  </a>{' '}
                  for batch details &amp; pricing.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Part 2B: Diwali & Festive In-Shop Nankhatai Tray Baking */}
        <div className="my-10 p-6 sm:p-8 lg:p-10 bg-pink-polka border border-[#F9A8D4] rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium text-[#7C3F5B] mb-2">
              Festive Service <span aria-hidden="true">·</span> Diwali &amp; Special Occasions
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#4A152E] text-balance">
              Bake your own nankhatai in our oven.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#7C3F5B] max-w-[54ch]">
              On festive occasions such as Diwali, visit our Cheknaka, Wagle West bakery with your
              prepared nankhatai dough and bake it evenly in our 100% eggless, pure-vegetarian
              hearth ovens for <strong className="font-semibold text-[#4A152E]">₹100 per tray</strong>.
            </p>

            <div className="mt-6 bg-white border border-[#FBCFE8] rounded-xl p-5 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <span className="block text-xs text-[#7C3F5B]">Baking Charge</span>
                <span className="mt-0.5 block text-base font-semibold text-[#DB2777] tabular-nums">
                  {formatINR(TRAY_RATE_INR)} / tray
                </span>
              </div>
              <div>
                <span className="block text-xs text-[#7C3F5B]">Shop Hours</span>
                <span className="mt-0.5 block text-sm font-semibold text-[#4A152E]">
                  Mon – Sun, 12–8 PM
                </span>
              </div>
              <div>
                <span className="block text-xs text-[#7C3F5B]">Shop Phone</span>
                <a
                  href={BAKERY_CONTACT.phoneHref}
                  className="mt-0.5 inline-block text-sm font-semibold text-[#DB2777] hover:underline tabular-nums"
                >
                  {BAKERY_CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-[#F9A8D4] rounded-xl p-6 shadow-xs">
            {bookingRef ? (
              <div className="space-y-4">
                <div className="flex items-start gap-2.5 text-[#DB2777]">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#4A152E]">
                      Tray Reservation #{bookingRef} Confirmed
                    </h3>
                    <p className="mt-1 text-xs text-[#7C3F5B] leading-relaxed">
                      {trayCount} {trayCount === 1 ? 'tray' : 'trays'} ({formatINR(trayTotal)} payable
                      at shop) <span aria-hidden="true">·</span> {preferredSlot}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-[#7C3F5B] leading-relaxed pt-3 border-t border-[#FBCFE8]">
                  Bring your batch to {BAKERY_CONTACT.fullAddress}. Call{' '}
                  <a
                    href={BAKERY_CONTACT.phoneHref}
                    className="font-semibold text-[#DB2777] hover:underline tabular-nums"
                  >
                    {BAKERY_CONTACT.phoneDisplay}
                  </a>{' '}
                  before arriving for larger Diwali batches.
                </p>
                <a
                  href={buildWhatsAppUrl(
                    [
                      `*Jain Oven Pack — Nankhatai Tray Booking #${bookingRef}*`,
                      `Name: ${guestName.trim()}`,
                      `Phone: ${guestPhone.trim()}`,
                      `Trays: ${trayCount} (${formatINR(trayTotal)} payable at shop)`,
                      `Preferred Slot: ${preferredSlot}`,
                    ].join('\n')
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-10 inline-flex items-center justify-center gap-2 text-xs font-semibold text-white bg-[#15803D] hover:bg-[#166534] rounded-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Send Booking on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setBookingRef(null);
                    setGuestName('');
                    setGuestPhone('');
                  }}
                  className="w-full h-10 text-xs font-semibold text-[#DB2777] bg-[#FFF0F6] border border-[#F9A8D4] hover:bg-[#FCE7F3] rounded-md transition-colors"
                >
                  Book Another Tray Slot
                </button>
              </div>
            ) : (
              <form onSubmit={handleReserveTrays} className="space-y-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-[#4A152E]">
                    Reserve Nankhatai Trays
                  </h3>
                  <span className="text-xs font-semibold text-[#DB2777] tabular-nums">
                    {formatINR(TRAY_RATE_INR)} / tray
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 py-2 border-y border-[#FBCFE8]">
                  <span className="text-sm font-medium text-[#4A152E]">Number of Trays</span>
                  <div className="inline-flex items-center border border-[#F9A8D4] rounded-md bg-white">
                    <button
                      type="button"
                      onClick={() => setTrayCount((c) => Math.max(1, c - 1))}
                      aria-label="Decrease tray count"
                      className="w-9 h-9 inline-flex items-center justify-center text-[#4A152E] hover:bg-[#FFF0F6] rounded-l-md"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-9 text-center text-sm font-semibold tabular-nums text-[#4A152E]">
                      {trayCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setTrayCount((c) => Math.min(20, c + 1))}
                      aria-label="Increase tray count"
                      className="w-9 h-9 inline-flex items-center justify-center text-[#4A152E] hover:bg-[#FFF0F6] rounded-r-md"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="tray-slot"
                    className="block text-xs font-semibold text-[#4A152E] mb-1"
                  >
                    Preferred Visit Window
                  </label>
                  <select
                    id="tray-slot"
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] focus:border-[#DB2777] focus:outline-none"
                  >
                    {TRAY_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="tray-name"
                      className="block text-xs font-semibold text-[#4A152E] mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      id="tray-name"
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="Meera Jain"
                      className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] placeholder:text-[#9D617C] focus:border-[#DB2777] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="tray-phone"
                      className="block text-xs font-semibold text-[#4A152E] mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      id="tray-phone"
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="+91 98201 45678"
                      className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] placeholder:text-[#9D617C] focus:border-[#DB2777] focus:outline-none"
                    />
                  </div>
                </div>

                {bookingError && (
                  <p role="alert" className="text-xs font-medium text-[#B91C1C]">
                    {bookingError}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full h-11 px-4 text-sm font-semibold text-white bg-[#DB2777] hover:bg-[#BE185D] rounded-md transition-colors tabular-nums"
                >
                  Reserve {trayCount} {trayCount === 1 ? 'Tray' : 'Trays'} — {formatINR(trayTotal)}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Part 3: Attributable Customer Stories */}
        <div className="pt-4">
          <div className="text-center mb-8">
            <BakeryCrestDivider label="Customer Notes · Verified Orders" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CUSTOMER_TESTIMONIALS.map((review) => (
              <figure
                key={review.name}
                className="flex flex-col justify-between p-6 bg-[#FFF0F6]/60 border border-[#F9A8D4] rounded-xl"
              >
                <div>
                  <span
                    className="block font-display text-3xl leading-none text-[#F472B6] mb-2 select-none"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="text-sm leading-relaxed text-[#4A152E]">
                    {review.quote}
                  </blockquote>
                </div>
                <figcaption className="mt-5 pt-4 border-t border-[#FBCFE8]">
                  <div className="text-sm font-semibold text-[#4A152E]">{review.name}</div>
                  <div className="text-xs text-[#7C3F5B]">
                    {review.role} <span aria-hidden="true">·</span> {review.city}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
