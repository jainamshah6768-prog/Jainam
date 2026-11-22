import { Plus, Search, X } from 'lucide-react';
import { BAKERY_CATEGORIES } from '../data/bakeryCatalog';
import { BakeryCategory, BakeryProduct } from '../types/bakery';
import { formatINR } from '../utils/currency';
import { BakeryCrestDivider, CornerFlourish, JainOvenPackEmblemIllustration } from './BakeryOrnaments';
import { ResilientImage } from './ResilientImage';

interface ProductCatalogProps {
  products: BakeryProduct[];
  activeCategory: BakeryCategory;
  onCategoryChange: (category: BakeryCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onQuickAdd: (product: BakeryProduct) => void;
  onSelectProduct: (product: BakeryProduct) => void;
  recentlyAddedId: string | null;
  cartQuantities?: Record<string, number>;
}

export function ProductCatalog({
  products,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  onQuickAdd,
  onSelectProduct,
  recentlyAddedId,
  cartQuantities = {},
}: ProductCatalogProps) {
  return (
    <section id="catalog" className="py-12 lg:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#FBCFE8]">
          <div>
            <p className="text-xs font-medium text-[#7C3F5B] mb-2">
              Fresh from the Hearth <span aria-hidden="true">·</span> Daily Menu
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#4A152E] text-balance">
              Oven Packs &amp; Daily Bakes
            </h2>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search
              className="w-4 h-4 text-[#DB2777] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              strokeWidth={1.75}
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search butter, khari, toast, bakery, cookies, cakes..."
              aria-label="Search bakery menu"
              className="w-full h-10 pl-10 pr-9 text-sm bg-[#FFF0F6]/50 border border-[#F9A8D4] rounded-md text-[#4A152E] placeholder:text-[#9D617C] focus:bg-white focus:border-[#DB2777] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#7C3F5B] hover:text-[#4A152E]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Bakery Categories"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#FCE7F3] border border-[#FBCFE8] rounded-lg"
          >
            {BAKERY_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onCategoryChange(category)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 min-h-[36px] ${
                    isActive
                      ? 'bg-white text-[#DB2777] font-semibold shadow-xs'
                      : 'text-[#7C3F5B] hover:text-[#4A152E]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <p className="text-xs text-[#7C3F5B] whitespace-nowrap shrink-0 tabular-nums">
            {searchQuery.trim()
              ? `${products.length} ${products.length === 1 ? 'variety' : 'varieties'} found`
              : '100% Eggless · Pure Vegetarian'}
          </p>
        </div>

        {/* Catalog Sections: 01. Butter, 02. Khari, 03. Toast, 04. Bakery Products, 05. Cookies & 06. Cakes */}
        {searchQuery.trim() && products.length === 0 ? (
          <div className="py-14 px-6 text-center bg-[#FFF0F6] border border-[#F9A8D4] rounded-xl">
            <p className="font-display text-xl font-medium text-[#4A152E]">
              No bakes match &ldquo;{searchQuery.trim()}&rdquo;
            </p>
            <p className="mt-2 text-sm text-[#7C3F5B]">
              Try switching sections or clearing your search to view today&apos;s stone-hearth menu.
            </p>
            <button
              type="button"
              onClick={() => {
                onCategoryChange('All');
                onSearchChange('');
              }}
              className="mt-5 px-4 py-2 text-sm font-semibold text-white bg-[#DB2777] hover:bg-[#BE185D] rounded-md transition-colors"
            >
              Reset Menu Filters
            </button>
          </div>
        ) : (
          <div className="space-y-14">
            {(
              [
                {
                  key: 'Butter',
                  number: '01.',
                  title: 'Butter',
                  subtitle: 'Crisp, golden-baked tea-time butter biscuits crafted in small hearth batches.',
                },
                {
                  key: 'Khari',
                  number: '02.',
                  title: 'Khari',
                  subtitle: 'Light, flaky puff-pastry khari bakes—100% eggless and zero onion or garlic.',
                },
                {
                  key: 'Toast',
                  number: '03.',
                  title: 'Toast',
                  subtitle: 'Crisp, twice-baked golden toast and rusks—100% eggless and zero onion or garlic.',
                },
                {
                  key: 'Bakery Products',
                  number: '04.',
                  title: 'Bakery Products',
                  subtitle: 'Fresh oven breads, cookies, cakes, and house specialties—100% eggless and zero onion or garlic.',
                },
                {
                  key: 'Cookies',
                  number: '05.',
                  title: 'Cookies',
                  subtitle: 'Crisp, small-batch 100% eggless cookies baked fresh—zero onion or garlic.',
                },
                {
                  key: 'Cakes',
                  number: '06.',
                  title: 'Cakes',
                  subtitle: 'Fresh 100% eggless celebration cakes, tea cakes, and seasonal specials—zero onion or garlic.',
                },
              ] as const
            )
              .filter((section) => activeCategory === 'All' || activeCategory === section.key)
              .map((section) => {
                const sectionProducts = products.filter((p) => p.category === section.key);
                if (searchQuery.trim() && sectionProducts.length === 0) {
                  return null;
                }

                return (
                  <div
                    key={section.key}
                    id={`section-${section.key.toLowerCase()}`}
                    className="space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3 border-b border-[#FBCFE8]">
                      <div>
                        <div className="flex items-baseline gap-2.5">
                          <span className="font-mono text-xs font-semibold text-[#DB2777]">
                            {section.number}
                          </span>
                          <h3 className="font-display text-2xl font-semibold text-[#4A152E]">
                            {section.title}
                          </h3>
                        </div>
                        <p className="mt-1 text-sm text-[#7C3F5B]">{section.subtitle}</p>
                      </div>
                      <span className="text-xs font-medium text-[#7C3F5B] tabular-nums shrink-0">
                        {sectionProducts.length > 0
                          ? `${sectionProducts.length} ${sectionProducts.length === 1 ? 'variety' : 'varieties'}`
                          : 'Awaiting menu items'}
                      </span>
                    </div>

                    {sectionProducts.length === 0 ? (
                      <div className="p-2.5 bg-pink-lace-grid border border-[#F9A8D4] rounded-2xl">
                        <div className="relative py-10 px-6 text-center bg-white border border-[#FBCFE8] rounded-xl">
                          <CornerFlourish position="tl" className="absolute top-3 left-3" />
                          <CornerFlourish position="tr" className="absolute top-3 right-3" />
                          <CornerFlourish position="bl" className="absolute bottom-3 left-3" />
                          <CornerFlourish position="br" className="absolute bottom-3 right-3" />
                          <JainOvenPackEmblemIllustration />
                          <div className="mt-3 max-w-md mx-auto">
                            <BakeryCrestDivider label={`Section ${section.number.replace('.', '')} · ${section.title}`} />
                          </div>
                          <p className="mt-3 font-display text-2xl font-semibold text-[#4A152E]">
                            {section.title} section is ready for your items
                          </p>
                          <p className="mt-2 text-sm text-[#7C3F5B] max-w-[46ch] mx-auto leading-relaxed">
                            Share your {section.title.toLowerCase()} varieties, photos, and Rupee
                            prices to display them right here.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                        {sectionProducts.map((product) => {
                          const isJustAdded = recentlyAddedId === product.id;
                          const inBagCount = cartQuantities[product.id] ?? 0;
                          return (
                            <article
                              key={product.id}
                              className="group flex flex-col bg-white border border-[#F9A8D4] rounded-xl overflow-hidden transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:shadow-sm"
                            >
                              {/* 4:3 Imagery */}
                              <button
                                type="button"
                                onClick={() => onSelectProduct(product)}
                                className="block w-full aspect-[4/3] overflow-hidden bg-[#FCE7F3] text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px]"
                                aria-label={`View details for ${product.name}`}
                              >
                                <ResilientImage
                                  src={product.image}
                                  alt={product.imageAlt}
                                  fallbackTitle={product.name}
                                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                                />
                              </button>

                              {/* Card Content — Identical Field Order */}
                              <div className="flex flex-col flex-1 p-5">
                                {/* Unboxed Metadata Line */}
                                <div className="flex items-center gap-1.5 text-xs text-[#7C3F5B] truncate">
                                  <span className="font-semibold text-[#DB2777]">
                                    {product.category}
                                  </span>
                                  <span aria-hidden="true">·</span>
                                  <span>{product.weightOrCount}</span>
                                  {product.highlightNote && (
                                    <>
                                      <span aria-hidden="true">·</span>
                                      <span>{product.highlightNote}</span>
                                    </>
                                  )}
                                </div>

                                <h4 className="mt-2 font-display text-lg font-semibold leading-snug text-[#4A152E]">
                                  <button
                                    type="button"
                                    onClick={() => onSelectProduct(product)}
                                    className="text-left hover:text-[#DB2777] transition-colors"
                                  >
                                    {product.name}
                                  </button>
                                </h4>

                                <p className="mt-1.5 text-sm leading-relaxed text-[#7C3F5B] line-clamp-2">
                                  {product.shortDescription}
                                </p>

                                <p className="mt-3 text-xs text-[#7C3F5B]">
                                  {product.dietaryLabel}
                                </p>

                                {/* Aligned Price & Action Baseline */}
                                <div className="mt-auto pt-4 border-t border-[#FBCFE8] flex flex-wrap items-center justify-between gap-2.5">
                                  <span className="text-[15px] font-semibold text-[#4A152E] tabular-nums">
                                    {product.price !== undefined
                                      ? formatINR(product.price)
                                      : 'Price on Inquiry'}
                                  </span>

                                  <div className="flex items-center gap-2 shrink-0">
                                    {product.price !== undefined ? (
                                      <>
                                        <button
                                          type="button"
                                          onClick={() => onSelectProduct(product)}
                                          className="px-3 py-2 text-xs font-medium text-[#7C3F5B] hover:text-[#4A152E] rounded-md transition-colors whitespace-nowrap shrink-0 min-h-[40px]"
                                        >
                                          Options
                                        </button>
                                        <button
                                          type="button"
                                          onClick={() => onQuickAdd(product)}
                                          className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 min-h-[40px] tabular-nums ${
                                            isJustAdded
                                              ? 'bg-[#BE185D] text-white'
                                              : 'bg-[#DB2777] text-white hover:bg-[#BE185D]'
                                          }`}
                                        >
                                          {!isJustAdded && (
                                            <Plus className="w-3.5 h-3.5" strokeWidth={2} />
                                          )}
                                          <span>
                                            {isJustAdded
                                              ? 'Added'
                                              : inBagCount > 0
                                                ? `Add (${inBagCount})`
                                                : 'Add to Bag'}
                                          </span>
                                        </button>
                                      </>
                                    ) : (
                                      <button
                                        type="button"
                                        onClick={() => onSelectProduct(product)}
                                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-md text-white bg-[#DB2777] hover:bg-[#BE185D] transition-colors whitespace-nowrap shrink-0 min-h-[40px]"
                                      >
                                        <span>View &amp; Order</span>
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </article>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </section>
  );
}
