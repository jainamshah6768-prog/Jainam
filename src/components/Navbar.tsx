import { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { HERO_MEDIA } from '../data/bakeryCatalog';
import { BakeryCategory } from '../types/bakery';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigateCategory: (category: BakeryCategory) => void;
}

export function Navbar({ cartCount, onOpenCart, onNavigateCategory }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string, presetCategory?: BakeryCategory) => {
    setMobileMenuOpen(false);
    if (presetCategory) {
      onNavigateCategory(presetCategory);
    }
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#F9A8D4]">
      {/* Delicate Pink & White Patisserie Awning Trim */}
      <div className="h-1.5 w-full bg-patisserie-awning border-b border-[#FBCFE8]" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3 sm:gap-8">
        {/* Zone 1: Brand Logo & Wordmark */}
        <a
          href="#top"
          className="inline-flex items-center gap-2 sm:gap-2.5 font-display text-lg sm:text-xl font-semibold tracking-tight text-[#4A152E] hover:text-[#DB2777] transition-colors whitespace-nowrap shrink-0"
        >
          <img
            src={HERO_MEDIA.image}
            alt="JOP Food Products logo"
            referrerPolicy="no-referrer"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-contain bg-white border border-[#FBCFE8] shrink-0"
          />
          <span>Jain Oven Pack</span>
        </a>

        {/* Zone 2: Single-line navigation links */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-4 xl:gap-5 text-sm font-medium text-[#7C3F5B]"
        >
          <a
            href="#catalog"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('catalog', 'Butter');
            }}
            className="hover:text-[#4A152E] hover:underline underline-offset-4 decoration-[#DB2777] transition-colors whitespace-nowrap shrink-0"
          >
            Butter
          </a>
          <a
            href="#catalog"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('catalog', 'Khari');
            }}
            className="hover:text-[#4A152E] hover:underline underline-offset-4 decoration-[#DB2777] transition-colors whitespace-nowrap shrink-0"
          >
            Khari
          </a>
          <a
            href="#catalog"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('catalog', 'Toast');
            }}
            className="hover:text-[#4A152E] hover:underline underline-offset-4 decoration-[#DB2777] transition-colors whitespace-nowrap shrink-0"
          >
            Toast
          </a>
          <a
            href="#catalog"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('catalog', 'Bakery Products');
            }}
            className="hover:text-[#4A152E] hover:underline underline-offset-4 decoration-[#DB2777] transition-colors whitespace-nowrap shrink-0"
          >
            Bakery Products
          </a>
          <a
            href="#catalog"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('catalog', 'Cookies');
            }}
            className="hover:text-[#4A152E] hover:underline underline-offset-4 decoration-[#DB2777] transition-colors whitespace-nowrap shrink-0"
          >
            Cookies
          </a>
          <a
            href="#catalog"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('catalog', 'Cakes');
            }}
            className="hover:text-[#4A152E] hover:underline underline-offset-4 decoration-[#DB2777] transition-colors whitespace-nowrap shrink-0"
          >
            Cakes
          </a>
          <a
            href="#pack-builder"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('pack-builder');
            }}
            className="hover:text-[#4A152E] hover:underline underline-offset-4 decoration-[#DB2777] transition-colors whitespace-nowrap shrink-0"
          >
            Build a Pack
          </a>
          <a
            href="#our-craft"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('our-craft');
            }}
            className="hover:text-[#4A152E] hover:underline underline-offset-4 decoration-[#DB2777] transition-colors whitespace-nowrap shrink-0"
          >
            Our Craft
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-[#F9A8D4] text-[#4A152E] hover:bg-[#FFF0F6] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <button
            type="button"
            onClick={onOpenCart}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#DB2777] hover:bg-[#BE185D] rounded-md shadow-xs transition-colors whitespace-nowrap shrink-0 min-h-[40px]"
          >
            <ShoppingBag className="w-4 h-4" strokeWidth={1.75} />
            <span>Bag</span>
            <span className="tabular-nums font-mono text-xs opacity-95">({cartCount})</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="lg:hidden border-t border-[#FBCFE8] bg-[#FFF0F6] px-4 py-3 flex flex-col gap-1"
        >
          <a
            href="#catalog"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('catalog', 'Butter');
            }}
            className="py-2.5 px-3 text-sm font-medium text-[#4A152E] hover:bg-white rounded-md"
          >
            Butter
          </a>
          <a
            href="#catalog"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('catalog', 'Khari');
            }}
            className="py-2.5 px-3 text-sm font-medium text-[#4A152E] hover:bg-white rounded-md"
          >
            Khari
          </a>
          <a
            href="#catalog"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('catalog', 'Toast');
            }}
            className="py-2.5 px-3 text-sm font-medium text-[#4A152E] hover:bg-white rounded-md"
          >
            Toast
          </a>
          <a
            href="#catalog"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('catalog', 'Bakery Products');
            }}
            className="py-2.5 px-3 text-sm font-medium text-[#4A152E] hover:bg-white rounded-md"
          >
            Bakery Products
          </a>
          <a
            href="#catalog"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('catalog', 'Cookies');
            }}
            className="py-2.5 px-3 text-sm font-medium text-[#4A152E] hover:bg-white rounded-md"
          >
            Cookies
          </a>
          <a
            href="#catalog"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('catalog', 'Cakes');
            }}
            className="py-2.5 px-3 text-sm font-medium text-[#4A152E] hover:bg-white rounded-md"
          >
            Cakes
          </a>
          <a
            href="#pack-builder"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('pack-builder');
            }}
            className="py-2.5 px-3 text-sm font-medium text-[#4A152E] hover:bg-white rounded-md"
          >
            Build a Pack
          </a>
          <a
            href="#our-craft"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('our-craft');
            }}
            className="py-2.5 px-3 text-sm font-medium text-[#4A152E] hover:bg-white rounded-md"
          >
            Our Craft
          </a>
        </nav>
      )}
    </header>
  );
}
