import { useMemo, useState } from 'react';
import { Check, Minus, Plus, RotateCcw, Sparkles } from 'lucide-react';
import { PACK_SLOT_ITEMS, PACK_TIERS } from '../data/bakeryCatalog';
import { CartItem, PackTier } from '../types/bakery';
import { formatINR } from '../utils/currency';
import { RibbonGiftBoxIllustration, ScallopDivider } from './BakeryOrnaments';
import { ResilientImage } from './ResilientImage';

interface PackBuilderProps {
  onAddCustomPack: (item: CartItem) => void;
}

export function PackBuilder({ onAddCustomPack }: PackBuilderProps) {
  const [selectedTierId, setSelectedTierId] = useState<string>(PACK_TIERS[1].id);
  const [slotCounts, setSlotCounts] = useState<Record<string, number>>({});
  const [giftMessage, setGiftMessage] = useState('');
  const [justAdded, setJustAdded] = useState(false);

  const selectedTier: PackTier =
    PACK_TIERS.find((t) => t.id === selectedTierId) ?? PACK_TIERS[0];

  const totalSelectedSlots = useMemo(
    () => Object.values(slotCounts).reduce((sum, count) => sum + count, 0),
    [slotCounts]
  );

  const remainingSlots = Math.max(0, selectedTier.slotCount - totalSelectedSlots);

  const handleTierChange = (tier: PackTier) => {
    setSelectedTierId(tier.id);
    if (totalSelectedSlots > tier.slotCount) {
      let toTrim = totalSelectedSlots - tier.slotCount;
      const next = { ...slotCounts };
      for (const key of Object.keys(next)) {
        if (toTrim <= 0) break;
        const reduceBy = Math.min(next[key], toTrim);
        next[key] -= reduceBy;
        if (next[key] === 0) delete next[key];
        toTrim -= reduceBy;
      }
      setSlotCounts(next);
    }
  };

  const handleIncrement = (itemId: string) => {
    if (totalSelectedSlots >= selectedTier.slotCount) return;
    setSlotCounts((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] ?? 0) + 1,
    }));
  };

  const handleDecrement = (itemId: string) => {
    setSlotCounts((prev) => {
      const current = prev[itemId] ?? 0;
      if (current <= 1) {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      }
      return { ...prev, [itemId]: current - 1 };
    });
  };

  const handleAutoFill = () => {
    if (PACK_SLOT_ITEMS.length === 0) return;
    const next: Record<string, number> = {};
    let remaining = selectedTier.slotCount;
    let idx = 0;
    while (remaining > 0) {
      const item = PACK_SLOT_ITEMS[idx % PACK_SLOT_ITEMS.length];
      next[item.id] = (next[item.id] ?? 0) + 1;
      remaining -= 1;
      idx += 1;
    }
    setSlotCounts(next);
  };

  const handleClear = () => {
    setSlotCounts({});
  };

  const selectedItemsBreakdown = useMemo(() => {
    return PACK_SLOT_ITEMS.filter((item) => (slotCounts[item.id] ?? 0) > 0).map((item) => ({
      name: item.name,
      count: slotCounts[item.id],
    }));
  }, [slotCounts]);

  const isPackReady = totalSelectedSlots === selectedTier.slotCount;

  const handleAddPack = () => {
    if (!isPackReady || PACK_SLOT_ITEMS.length === 0) return;
    const customItem: CartItem = {
      cartItemId: `custom-${selectedTier.id}-${Date.now()}`,
      productId: `custom-pack-${selectedTier.id}`,
      name: `Custom ${selectedTier.name}`,
      category: 'Custom Oven Pack',
      variantLabel: `${selectedTier.slotCount} Hand-Picked Bakes`,
      unitPrice: selectedTier.price,
      quantity: 1,
      image: PACK_SLOT_ITEMS[0].image,
      customItems: selectedItemsBreakdown,
      note: giftMessage.trim() || undefined,
    };
    onAddCustomPack(customItem);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const progressPercentage = Math.min(
    100,
    Math.round((totalSelectedSlots / selectedTier.slotCount) * 100)
  );

  return (
    <section id="pack-builder" className="bg-pink-lace-grid border-t border-[#F9A8D4]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 lg:pt-18 lg:pb-14">
        {/* Section Heading */}
        <div className="max-w-2xl pb-8">
          <p className="text-xs font-medium text-[#7C3F5B] mb-2">
            Custom Assortment <span aria-hidden="true">·</span> Packed Warm to Order
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#4A152E] text-balance">
            Build Your Own Oven Pack
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#7C3F5B]">
            Choose your box capacity, fill every slot with eggless and root-free bakes from today&apos;s
            hearth, and include a handwritten ribbon card.
          </p>
        </div>

        {/* Box Tier Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {PACK_TIERS.map((tier) => {
            const isSelected = tier.id === selectedTier.id;
            return (
              <button
                key={tier.id}
                type="button"
                onClick={() => handleTierChange(tier)}
                aria-pressed={isSelected}
                className={`text-left p-5 rounded-xl border transition-colors shadow-xs ${
                  isSelected
                    ? 'bg-white border-[#DB2777] ring-2 ring-[#F9A8D4]'
                    : 'bg-white/95 border-[#F9A8D4] hover:border-[#DB2777]'
                }`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-display text-lg font-semibold text-[#4A152E]">
                    {tier.name}
                  </span>
                  <span className="text-base font-semibold text-[#DB2777] tabular-nums shrink-0">
                    {formatINR(tier.price)}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-[#7C3F5B]">
                  {tier.slotCount} Slots <span aria-hidden="true">·</span> {tier.packagingNote}
                </p>
              </button>
            );
          })}
        </div>

        {/* Main Configurator Split */}
        {PACK_SLOT_ITEMS.length === 0 ? (
          <div className="p-2 bg-white/75 border border-[#F9A8D4] rounded-2xl">
            <div className="p-8 sm:p-10 text-center bg-white border border-[#FBCFE8] rounded-xl">
              <RibbonGiftBoxIllustration />
              <p className="mt-4 font-display text-xl font-semibold text-[#4A152E]">
                Custom oven pack items will appear once your menu is added
              </p>
              <p className="mt-2 text-sm text-[#7C3F5B] max-w-[46ch] mx-auto">
                Select a box tier above—your items will populate these pack slots as soon as you
                send your list.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Selectable Bake Slots */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PACK_SLOT_ITEMS.map((item) => {
                const count = slotCounts[item.id] ?? 0;
                const canAdd = totalSelectedSlots < selectedTier.slotCount;
                return (
                  <div
                    key={item.id}
                    className={`flex items-center gap-4 p-3.5 bg-white border rounded-xl transition-colors ${
                      count > 0 ? 'border-[#DB2777]' : 'border-[#F9A8D4]'
                    }`}
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#FCE7F3] shrink-0 border border-[#FBCFE8]">
                      <ResilientImage
                        src={item.image}
                        alt={item.name}
                        fallbackTitle={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-medium text-[#7C3F5B] truncate">
                        {item.category} <span aria-hidden="true">·</span> {item.portionLabel}
                      </p>
                      <h3 className="mt-0.5 text-sm font-semibold text-[#4A152E] truncate">
                        {item.name}
                      </h3>
                      <p className="mt-0.5 text-[11px] text-[#7C3F5B]">
                        100% Eggless · Pure Veg
                      </p>

                      <div className="mt-2.5 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleDecrement(item.id)}
                          disabled={count === 0}
                          aria-label={`Remove one ${item.name}`}
                          className="w-8 h-8 inline-flex items-center justify-center rounded border border-[#F9A8D4] text-[#4A152E] hover:bg-[#FFF0F6] disabled:opacity-35 disabled:pointer-events-none transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>

                        <span className="w-6 text-center text-sm font-semibold tabular-nums text-[#4A152E]">
                          {count}
                        </span>

                        <button
                          type="button"
                          onClick={() => handleIncrement(item.id)}
                          disabled={!canAdd}
                          aria-label={`Add one ${item.name}`}
                          className="w-8 h-8 inline-flex items-center justify-center rounded border border-[#F9A8D4] text-[#4A152E] hover:bg-[#FFF0F6] disabled:opacity-35 disabled:pointer-events-none transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Live Box Summary */}
            <div className="lg:col-span-4 bg-white border border-[#F9A8D4] rounded-xl p-6 lg:sticky lg:top-24 shadow-xs">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-semibold text-[#4A152E]">
                  Your Oven Pack
                </h3>
                <span className="text-sm font-semibold text-[#DB2777] tabular-nums">
                  {totalSelectedSlots} / {selectedTier.slotCount} filled
                </span>
              </div>

              {/* Slot Progress Bar */}
              <div className="mt-3 h-2 w-full bg-[#FCE7F3] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#DB2777] transition-all duration-200 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between gap-2 text-xs">
                <span className="text-[#7C3F5B]">
                  {remainingSlots === 0
                    ? 'Box complete and ready to pack'
                    : `Select ${remainingSlots} more ${remainingSlots === 1 ? 'item' : 'items'}`}
                </span>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={handleAutoFill}
                    className="inline-flex items-center gap-1 font-medium text-[#DB2777] hover:underline"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Fill Assortment</span>
                  </button>
                  {totalSelectedSlots > 0 && (
                    <button
                      type="button"
                      onClick={handleClear}
                      className="inline-flex items-center gap-1 text-[#7C3F5B] hover:text-[#4A152E]"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Clear</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Selected Items List */}
              <div className="mt-5 pt-4 border-t border-[#FBCFE8]">
                {selectedItemsBreakdown.length === 0 ? (
                  <p className="text-sm text-[#7C3F5B] py-4">
                    Use the + controls on the left to fill your {selectedTier.name.toLowerCase()}, or
                    click Fill Assortment for our baker&apos;s mix.
                  </p>
                ) : (
                  <ul className="space-y-2 text-sm">
                    {selectedItemsBreakdown.map((entry) => (
                      <li
                        key={entry.name}
                        className="flex items-center justify-between gap-3 text-[#4A152E]"
                      >
                        <span className="truncate">{entry.name}</span>
                        <span className="font-mono text-xs text-[#7C3F5B] tabular-nums shrink-0">
                          ×{entry.count}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Optional Gift Card Message */}
              <div className="mt-5 pt-4 border-t border-[#FBCFE8]">
                <label
                  htmlFor="pack-gift-note"
                  className="block text-xs font-semibold text-[#4A152E] mb-1.5"
                >
                  Gift Card Note (Optional)
                </label>
                <input
                  id="pack-gift-note"
                  type="text"
                  value={giftMessage}
                  onChange={(e) => setGiftMessage(e.target.value)}
                  maxLength={100}
                  placeholder="Warm wishes for the family..."
                  className="w-full h-10 px-3 text-sm bg-white border border-[#F9A8D4] rounded-md text-[#4A152E] placeholder:text-[#9D617C] focus:border-[#DB2777] focus:outline-none"
                />
              </div>

              <button
                type="button"
                onClick={handleAddPack}
                disabled={!isPackReady}
                className="mt-5 w-full h-11 px-5 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#DB2777] hover:bg-[#BE185D] disabled:bg-[#FBCFE8] disabled:text-[#7C3F5B] rounded-md transition-colors tabular-nums"
              >
                {justAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Custom Pack Added to Bag</span>
                  </>
                ) : (
                  <span>
                    {isPackReady
                      ? `Add Custom Pack — ${formatINR(selectedTier.price)}`
                      : `Select ${remainingSlots} More to Add (${formatINR(selectedTier.price)})`}
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Scalloped Transition Back to White Section */}
      <ScallopDivider fillColor="#FFFFFF" />
    </section>
  );
}
