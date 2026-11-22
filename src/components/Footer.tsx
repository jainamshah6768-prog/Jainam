import { BAKERY_CONTACT } from '../data/bakeryCatalog';

export function Footer() {
  return (
    <footer className="bg-pink-polka border-t border-[#F9A8D4]">
      <div className="h-1.5 w-full bg-patisserie-awning border-b border-[#FBCFE8]" aria-hidden="true" />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-[#F9A8D4] rounded-2xl p-8 grid grid-cols-1 md:grid-cols-12 gap-8 shadow-xs">
          <div className="md:col-span-5">
            <span className="font-display text-xl font-semibold text-[#4A152E]">
              Jain Oven Pack
            </span>
            <p className="mt-2.5 text-sm leading-relaxed text-[#7C3F5B] max-w-[38ch]">
              100% eggless, pure vegetarian stone-hearth bakery crafting sourdough loaves,
              viennoiserie, and curated oven packs without onion, garlic, or root vegetables.
            </p>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold text-[#4A152E] mb-3">Bakery &amp; Pickup</h4>
            <p className="text-sm text-[#7C3F5B] leading-relaxed">
              {BAKERY_CONTACT.addressLine1}
              <br />
              {BAKERY_CONTACT.addressLine2}
            </p>
            <p className="mt-2 text-xs text-[#7C3F5B]">
              Pickup: {BAKERY_CONTACT.pickupHours}
            </p>
            <p className="mt-1 text-xs text-[#7C3F5B]">
              Online Payment: GPay accepted ({BAKERY_CONTACT.phoneDisplay})
            </p>
            <a
              href={BAKERY_CONTACT.phoneHref}
              className="mt-2 inline-block text-sm font-semibold text-[#DB2777] hover:underline tabular-nums"
            >
              {BAKERY_CONTACT.phoneDisplay}
            </a>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-[#4A152E] mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-[#7C3F5B]">
              <li>
                <a href="#catalog" className="hover:text-[#DB2777] transition-colors">
                  Oven Packs &amp; Daily Bakes
                </a>
              </li>
              <li>
                <a href="#pack-builder" className="hover:text-[#DB2777] transition-colors">
                  Build Custom Box
                </a>
              </li>
              <li>
                <a href="#custom-orders" className="hover:text-[#DB2777] transition-colors">
                  Custom &amp; Festive Orders
                </a>
              </li>
              <li>
                <a href="#our-craft" className="hover:text-[#DB2777] transition-colors">
                  Kitchen Protocol &amp; Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#7C3F5B]">
          <span>&copy; {new Date().getFullYear()} Jain Oven Pack. All bakes 100% eggless.</span>
          <span>{BAKERY_CONTACT.serviceArea} · Pure-Vegetarian Stone Hearth</span>
        </div>
      </div>
    </footer>
  );
}
