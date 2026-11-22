import heroLogoImage from '../assets/images/logo_jop_food_products_1794720496232.jpg';
import christmasPlumCakeImage from '../assets/images/christmas_plum_cake_1794717994788.jpg';
import { BakeryCategory, BakeryProduct, PackSlotItem, PackTier } from '../types/bakery';

export const HERO_MEDIA = {
  image: heroLogoImage,
  alt: 'JOP Food Products circular rose-pink and white logo with chef hat and smiling JOP lettering',
};

export const CHRISTMAS_PLUM_CAKE_MEDIA = {
  image: christmasPlumCakeImage,
  alt: 'Christmas special 100% eggless plum cake studded with roasted nuts and dried fruit on a white ceramic pedestal beside a blush pink ribbon gift box',
};

export const BAKERY_CONTACT = {
  phoneRaw: '9987922303',
  phoneDisplay: '+91 99879 22303',
  phoneHref: 'tel:+919987922303',
  addressLine1: 'Cheknaka, Wagle West, Road No. 3',
  addressLine2: 'Shivaji Nagar, Kisan Nagar 1, Thane, Maharashtra',
  fullAddress: 'Cheknaka, Wagle West, Road No. 3, Shivaji Nagar, Kisan Nagar 1, Thane, Maharashtra',
  pickupHours: 'Monday – Sunday, 12:00 Noon – 8:00 PM',
  serviceArea: 'Local Orders: Mulund West, Shivaji Nagar & Kisan Nagar 1',
  serviceAreaShort: 'Mulund West, Shivaji Nagar & Kisan Nagar 1',
};

export const BAKERY_CATEGORIES: BakeryCategory[] = [
  'All',
  'Butter',
  'Khari',
  'Toast',
  'Bakery Products',
  'Cookies',
  'Cakes',
];

export const BAKERY_PRODUCTS: BakeryProduct[] = [
  {
    id: 'jeera-butter',
    name: 'Jeera Butter',
    category: 'Butter',
    price: 60,
    weightOrCount: 'Fresh Sealed Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Roasted Cumin',
    shortDescription:
      'Crisp, golden-baked tea-time butter biscuits infused with aromatic roasted cumin seeds—light, flaky, and packed fresh.',
    fullDescription:
      'Our signature Jeera Butter is baked to a crisp golden crunch in our 100% eggless, pure-vegetarian hearth oven. Prepared without onion, garlic, or root ingredients and sealed warm for lasting freshness with evening chai or coffee.',
    ingredients: [
      'Refined Wheat Flour',
      'Pure Butter',
      'Roasted Cumin Seeds (Jeera)',
      'Milk',
      'Sugar',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_15__2026_-_11_01AM_abbd2a76',
    imageAlt: 'Fresh sealed bakery pack of golden-baked Jeera Butter biscuits from Jain Oven Pack',
    variants: [
      {
        id: 'standard-pack',
        label: 'Standard Fresh Pack',
        priceDelta: 0,
        note: 'Sealed crisp from today’s hearth batch',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Pack',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'maska-butter',
    name: 'Maska Butter',
    category: 'Butter',
    price: 60,
    weightOrCount: 'Fresh Sealed Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Classic Butter',
    shortDescription:
      'Light, flaky, golden-baked classic butter biscuits made with rich dairy butter—crisp layers that melt cleanly with tea.',
    fullDescription:
      'Our classic Maska Butter is slow-baked for airy, crisp layers and a rich pure-butter aroma in our 100% eggless, pure-vegetarian hearth kitchen. Crafted without onion, garlic, or root ingredients and sealed fresh in every pack.',
    ingredients: [
      'Refined Wheat Flour',
      'Pure Butter (Maska)',
      'Milk',
      'Sugar',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_15__2026_-_11_03AM_86438235',
    imageAlt: 'Fresh sealed bakery pack of golden-baked flaky Maska Butter biscuits from Jain Oven Pack',
    variants: [
      {
        id: 'standard-pack',
        label: 'Standard Fresh Pack',
        priceDelta: 0,
        note: 'Sealed crisp from today’s hearth batch',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Pack',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'whole-wheat-butter',
    name: 'Whole Wheat Butter',
    category: 'Butter',
    price: 70,
    weightOrCount: 'Fresh Sealed Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Whole Wheat',
    shortDescription:
      'Wholesome, nutty whole wheat flour butter biscuits baked to a crisp golden finish—light, nourishing, and full of pure butter warmth.',
    fullDescription:
      'Crafted with stone-milled whole wheat flour and pure butter in our 100% eggless, pure-vegetarian hearth kitchen. Prepared without onion, garlic, or root ingredients and sealed fresh for crisp everyday tea-time snacking.',
    ingredients: [
      'Whole Wheat Flour (Atta)',
      'Pure Butter',
      'Milk',
      'Sugar',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_15__2026_-_11_06AM_8e424e33',
    imageAlt: 'Fresh sealed bakery pack of crisp golden Whole Wheat Butter biscuits from Jain Oven Pack',
    variants: [
      {
        id: 'standard-pack',
        label: 'Standard Fresh Pack',
        priceDelta: 0,
        note: 'Sealed crisp from today’s hearth batch',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Pack',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'makhaniya-butter',
    name: 'Makhaniya Butter',
    category: 'Butter',
    price: 70,
    weightOrCount: 'Fresh Sealed Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Bite-Sized Butter',
    shortDescription:
      'Bite-sized, melt-in-the-mouth golden makhaniya butter puffs baked crisp with pure makhan richness—ideal for chai and snacking.',
    fullDescription:
      'Our bite-sized Makhaniya Butter rounds are slow-baked for an extra-light, crumbly crisp texture in our 100% eggless, pure-vegetarian stone-hearth kitchen. Made without onion, garlic, or root ingredients and packed fresh in a sealed bag.',
    ingredients: [
      'Refined Wheat Flour',
      'Pure Butter (Makhan)',
      'Cumin Seeds',
      'Milk',
      'Sugar',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_15__2026_-_11_10AM_2cd29961',
    imageAlt: 'Fresh sealed bakery pack of bite-sized golden Makhaniya Butter biscuits from Jain Oven Pack',
    variants: [
      {
        id: 'standard-pack',
        label: 'Standard Fresh Pack',
        priceDelta: 0,
        note: 'Sealed crisp from today’s hearth batch',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Pack',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'whole-wheat-makhaniya-butter',
    name: 'Whole Wheat Makhaniya Butter',
    category: 'Butter',
    price: 80,
    weightOrCount: 'Fresh Sealed Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Whole Wheat Bite-Sized',
    shortDescription:
      'Bite-sized whole wheat makhaniya butter puffs baked golden with pure makhan richness and a light, wholesome crunch.',
    fullDescription:
      'Made with stone-milled whole wheat flour, pure butter, and gentle cumin aroma in our 100% eggless, pure-vegetarian hearth kitchen. Prepared without onion, garlic, or root ingredients and sealed crisp for everyday tea-time snacking.',
    ingredients: [
      'Whole Wheat Flour (Atta)',
      'Pure Butter (Makhan)',
      'Cumin Seeds',
      'Milk',
      'Sugar',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_15__2026_-_11_13AM_8b2796fb',
    imageAlt: 'Fresh sealed bakery pack of bite-sized golden Whole Wheat Makhaniya Butter biscuits from Jain Oven Pack',
    variants: [
      {
        id: 'standard-pack',
        label: 'Standard Fresh Pack',
        priceDelta: 0,
        note: 'Sealed crisp from today’s hearth batch',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Pack',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'stick-butter-big',
    name: 'Stick Butter Big',
    category: 'Butter',
    price: 60,
    weightOrCount: 'Large Sealed Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Big Crisp Butter Sticks',
    shortDescription:
      'Long, golden-baked 100% eggless tea-time butter sticks packed generously in a large clear bakery pouch—airy, crisp, and ideal for dipping.',
    fullDescription:
      'Our Stick Butter Big is shaped into crisp, golden finger-length butter sticks and baked slow in our stone-hearth oven for an effortless snap and airy crunch. Crafted in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Pure Butter',
      'Milk',
      'Sugar',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_19__2026_-_1_03PM_a447d77d',
    imageAlt: 'Large clear sealed bakery pack of crisp golden 100% eggless Stick Butter Big tea sticks from Jain Oven Pack',
    variants: [
      {
        id: 'standard-pack',
        label: 'Large Fresh Pack',
        priceDelta: 0,
        note: 'Sealed crisp from today’s hearth batch',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Pack',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'stick-butter-small',
    name: 'Stick Butter Small',
    category: 'Butter',
    price: 40,
    weightOrCount: 'Small Sealed Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Slender Crisp Butter Sticks',
    shortDescription:
      'Slim, golden-baked 100% eggless crisp butter sticks sealed in our signature Jain Oven Pack striped pouch—light, crunchy, and handy for daily tea.',
    fullDescription:
      'Our Stick Butter Small offers the same crisp, stone-hearth baked butter stick crunch in a slim, everyday snack pouch. Crafted in our 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Pure Butter',
      'Milk',
      'Sugar',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_19__2026_-_1_03PM_2c32279f',
    imageAlt: 'Sealed Jain Oven Pack striped pouch of slender golden crisp 100% eggless Stick Butter Small tea sticks',
    variants: [
      {
        id: 'standard-pack',
        label: 'Small Fresh Pack',
        priceDelta: 0,
        note: 'Sealed crisp from today’s hearth batch',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Pack',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'jeera-khari',
    name: 'Jeera Khari',
    category: 'Khari',
    price: 70,
    weightOrCount: 'Fresh Sealed Box',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Flaky Cumin Puff',
    shortDescription:
      'Airy, multi-layered puff-pastry jeera khari dotted with aromatic roasted cumin seeds—crisp, light, and packed fresh.',
    fullDescription:
      'Our Jeera Khari is laminated in small batches and stone-hearth baked into crisp, flaky layers infused with roasted cumin seeds. Prepared in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Bakery Butter & Shortening (100% Veg)',
      'Roasted Cumin Seeds (Jeera)',
      'Milk',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_15__2026_-_11_25AM_dc263e1e',
    imageAlt: 'Fresh sealed clear box of flaky golden Jeera Khari puffs studded with cumin seeds from Jain Oven Pack',
    variants: [
      {
        id: 'standard-box',
        label: 'Standard Fresh Box',
        priceDelta: 0,
        note: 'Sealed crisp from today’s hearth batch',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Pack',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'maska-khari',
    name: 'Maska Khari',
    category: 'Khari',
    price: 70,
    weightOrCount: 'Fresh Sealed Box',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Classic Butter Puff',
    shortDescription:
      'Crisp, multi-layered classic maska khari folded with rich pure butter—light, airy crunch crafted for morning or evening tea.',
    fullDescription:
      'Our Maska Khari is laminated in small batches with pure dairy butter and hearth-baked into crisp, golden-flaky layers. Prepared in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Pure Butter (Maska)',
      'Bakery Shortening (100% Veg)',
      'Milk',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_16__2026_-_12_25PM_3ce29df9',
    imageAlt: 'Fresh sealed clear bakery pack of layered golden Maska Khari puffs from Jain Oven Pack',
    variants: [
      {
        id: 'standard-box',
        label: 'Standard Fresh Box',
        priceDelta: 0,
        note: 'Sealed crisp from today’s hearth batch',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Pack',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'whole-wheat-khari',
    name: 'Whole Wheat Khari',
    category: 'Khari',
    price: 80,
    weightOrCount: 'Fresh Sealed Box',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Whole Wheat Puff',
    shortDescription:
      'Wholesome, nutty stone-milled whole wheat khari baked into crisp, airy puff layers—rich flavor with a light crunch.',
    fullDescription:
      'Our Whole Wheat Khari combines nourishing stone-milled atta with pure vegetarian lamination and hearth baking for flaky, golden-brown layers. Prepared 100% eggless and completely free of onion, garlic, or root ingredients.',
    ingredients: [
      'Whole Wheat Flour (Atta)',
      'Pure Butter & Bakery Shortening (100% Veg)',
      'Milk',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_16__2026_-_12_35PM_7e546f01',
    imageAlt: 'Fresh sealed clear bakery pack of layered golden-brown Whole Wheat Khari puffs from Jain Oven Pack',
    variants: [
      {
        id: 'standard-box',
        label: 'Standard Fresh Box',
        priceDelta: 0,
        note: 'Sealed crisp from today’s hearth batch',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Pack',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'methi-khari',
    name: 'Methi Khari',
    category: 'Khari',
    price: 70,
    weightOrCount: 'Fresh Sealed Box',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Kasuri Methi Puff',
    shortDescription:
      'Fragrant, flaky puff-pastry khari infused with aromatic kasuri methi (fenugreek leaves) and warm savory spices—crisp in every bite.',
    fullDescription:
      'Our Methi Khari pairs delicate laminated puff layers with sun-dried kasuri methi leaves and gentle spices, baked crisp in our 100% eggless, pure-vegetarian stone-hearth kitchen without onion, garlic, or root ingredients.',
    ingredients: [
      'Refined Wheat Flour',
      'Kasuri Methi (Dried Fenugreek Leaves)',
      'Pure Butter & Bakery Shortening (100% Veg)',
      'Milk',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_16__2026_-_12_50PM_51d4d3d3',
    imageAlt: 'Fresh sealed clear box of flaky golden Methi Khari puffs flecked with fenugreek leaves from Jain Oven Pack',
    variants: [
      {
        id: 'standard-box',
        label: 'Standard Fresh Box',
        priceDelta: 0,
        note: 'Sealed crisp from today’s hearth batch',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Pack',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'amul-khari',
    name: 'Amul Khari',
    category: 'Khari',
    price: 70,
    weightOrCount: 'Fresh Sealed Box',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Amul Butter Puff',
    shortDescription:
      'Rich, flaky puff-pastry khari laminated with genuine Amul butter—savory, crisp, golden layers made for chai.',
    fullDescription:
      'Our signature Amul Khari is folded with genuine Amul butter and baked in small batches for rich savory aroma and airy, crisp puff layers. Prepared in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Amul Butter',
      'Bakery Shortening (100% Veg)',
      'Milk',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_16__2026_-_12_53PM_23237cd0',
    imageAlt: 'Fresh sealed clear bakery pack of golden layered Amul Khari puffs from Jain Oven Pack',
    variants: [
      {
        id: 'standard-box',
        label: 'Standard Fresh Box',
        priceDelta: 0,
        note: 'Sealed crisp from today’s hearth batch',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Pack',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'sweet-khari',
    name: 'Sweet Khari',
    category: 'Khari',
    price: 70,
    weightOrCount: 'Fresh Sealed Box',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Sugar-Crusted Puff',
    shortDescription:
      'Delicate, flaky puff-pastry sweet khari curls dusted with golden caramelized sugar crystals—light crunch with gentle sweetness.',
    fullDescription:
      'Our Sweet Khari is rolled and laminated with sparkling cane sugar so every flaky curl bakes to a crisp, lightly caramelized finish. Crafted in our 100% eggless, pure-vegetarian stone-hearth kitchen without onion, garlic, or root ingredients.',
    ingredients: [
      'Refined Wheat Flour',
      'Pure Butter & Bakery Shortening (100% Veg)',
      'Fine Cane Sugar',
      'Milk',
      'Pinch of Salt',
    ],
    image: '/assets/aistudio/Image_November_16__2026_-_12_56PM_57401b72',
    imageAlt: 'Fresh sealed clear box of sugar-dusted golden Sweet Khari puffs from Jain Oven Pack',
    variants: [
      {
        id: 'standard-box',
        label: 'Standard Fresh Box',
        priceDelta: 0,
        note: 'Sealed crisp from today’s hearth batch',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Pack',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'cheese-khari',
    name: 'Cheese Khari',
    category: 'Khari',
    price: 70,
    weightOrCount: 'Fresh Sealed Box',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Baked Cheddar Puff',
    shortDescription:
      'Crisp, golden puff-pastry cheese khari folded with vegetarian processed cheese—savory, airy layers with a rich cheesy finish.',
    fullDescription:
      'Our Cheese Khari blends delicate laminated puff layers with pure vegetarian cheese and hearth baking for a crisp, savory crunch. Prepared 100% eggless and completely free of onion, garlic, or root ingredients.',
    ingredients: [
      'Refined Wheat Flour',
      'Vegetarian Processed Cheese',
      'Pure Butter & Bakery Shortening (100% Veg)',
      'Milk',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_16__2026_-_1_11PM_c1a00af2',
    imageAlt: 'Fresh sealed clear box of golden flaky Cheese Khari puffs from Jain Oven Pack',
    variants: [
      {
        id: 'standard-box',
        label: 'Standard Fresh Box',
        priceDelta: 0,
        note: 'Sealed crisp from today’s hearth batch',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Pack',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'butter-toast',
    name: 'Butter Toast',
    category: 'Toast',
    price: 50,
    weightOrCount: 'Fresh Sealed Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Twice-Baked Crisp',
    shortDescription:
      'Golden, twice-baked tea-time butter toast rusks made with rich dairy butter—light, crunchy, and perfect for dipping in chai or milk.',
    fullDescription:
      'Our Butter Toast slices are baked twice in our stone-hearth ovens until uniformly golden and crisp, with gentle butter aroma and melt-in-cup crunch. Crafted in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Pure Butter',
      'Milk',
      'Sugar',
      'Cardamom (Elaichi)',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_16__2026_-_1_14PM_22b98539',
    imageAlt: 'Fresh sealed bakery pack of crisp golden twice-baked Butter Toast slices from Jain Oven Pack',
    variants: [
      {
        id: 'standard-pack',
        label: 'Standard Fresh Pack',
        priceDelta: 0,
        note: 'Sealed crisp from today’s hearth batch',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Pack',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'milk-toast',
    name: 'Milk Toast',
    category: 'Toast',
    price: 50,
    weightOrCount: 'Fresh Sealed Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Classic Milk Rusk',
    shortDescription:
      'Light, subtly sweet milk toast slices twice-baked to an airy golden crunch—a gentle everyday favorite with morning tea or warm milk.',
    fullDescription:
      'Our Milk Toast is kneaded with rich dairy milk and slow-toasted twice for a delicate, crisp snap that softens smoothly when dipped. Crafted in our 100% eggless, pure-vegetarian hearth kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Fresh Dairy Milk',
      'Pure Butter',
      'Fine Sugar',
      'Cardamom (Elaichi)',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_16__2026_-_1_16PM_b0ae8341',
    imageAlt: 'Fresh sealed bakery pack of crisp golden three-row Milk Toast rusks from Jain Oven Pack',
    variants: [
      {
        id: 'standard-pack',
        label: 'Standard Fresh Pack',
        priceDelta: 0,
        note: 'Sealed crisp from today’s hearth batch',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Pack',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'whole-wheat-toast',
    name: 'Whole Wheat Toast',
    category: 'Toast',
    price: 70,
    weightOrCount: 'Fresh Sealed Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Whole Wheat Rusk',
    shortDescription:
      'Wholesome, nutty stone-milled whole wheat toast rusks baked twice for hearty crunch—nourishing everyday companion for chai or coffee.',
    fullDescription:
      'Our Whole Wheat Toast is crafted from stone-milled atta and pure butter, slow-baked twice for a rich toasted grain aroma and crisp bite. Prepared in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Whole Wheat Flour (Atta)',
      'Pure Butter',
      'Fresh Dairy Milk',
      'Fine Sugar',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_16__2026_-_1_19PM_84cad059',
    imageAlt: 'Fresh sealed bakery pack of hearty crisp Whole Wheat Toast rusks from Jain Oven Pack',
    variants: [
      {
        id: 'standard-pack',
        label: 'Standard Fresh Pack',
        priceDelta: 0,
        note: 'Sealed crisp from today’s hearth batch',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Pack',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'cream-donut',
    name: 'Cream Donut',
    category: 'Bakery Products',
    price: 30,
    weightOrCount: '1 Piece',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Chocolate Glazed',
    shortDescription:
      'Soft, pillowy 100% eggless cream-filled donut dipped in rich dark chocolate glaze and topped with rainbow sprinkles and glazed cherries.',
    fullDescription:
      'Freshly crafted in our pure-vegetarian, 100% eggless bakery kitchen—fluffy golden donut filled with smooth whipped cream, coated in glossy chocolate ganache, and finished with colorful sprinkles and cherries.',
    ingredients: [
      'Refined Wheat Flour',
      'Whipped Dairy Cream',
      'Dark Chocolate Glaze',
      'Rainbow Sprinkles & Glazed Cherries',
      'Butter',
      'Milk',
      'Fine Sugar',
    ],
    image: '/assets/aistudio/Image_November_16__2026_-_1_24PM_739023d0',
    imageAlt: 'Soft 100% eggless chocolate-glazed Cream Donut topped with rainbow sprinkles and cherries from Jain Oven Pack',
    variants: [
      {
        id: 'single-fresh-piece',
        label: 'Single Fresh Donut',
        priceDelta: 0,
        note: 'Packed fresh in a protective pastry box',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Pastry Box',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'pizza-base',
    name: 'Pizza Base',
    category: 'Bakery Products',
    price: 30,
    weightOrCount: 'Fresh Sealed Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Soft Hearth Crust',
    shortDescription:
      'Soft, pillowy 100% eggless stone-hearth pizza base packed fresh in our signature Jain Oven Pack pouch—ready for homemade Jain pizzas.',
    fullDescription:
      'Freshly baked in our pure-vegetarian, 100% eggless hearth kitchen with zero onion, garlic, or root ingredients. Soft crumb that crisps lightly on the edges when topped and baked at home.',
    ingredients: [
      'Refined Wheat Flour',
      'Fresh Milk',
      'Butter & Veg Oil',
      'Fine Sugar',
      'Yeast',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_16__2026_-_1_27PM_5efac727',
    imageAlt: 'Fresh sealed Jain Oven Pack Pizza Base pouch on pink counter',
    variants: [
      {
        id: 'standard-pack',
        label: 'Standard Fresh Pack',
        priceDelta: 0,
        note: 'Sealed fresh from today’s bakery batch',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Party Prep Pack',
        priceDelta: 0,
        note: 'Packed fresh for same-day pizza night',
      },
    ],
  },
  {
    id: 'white-bread',
    name: 'White Bread',
    category: 'Bakery Products',
    price: 40,
    weightOrCount: 'Fresh Sliced Loaf',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Soft Sandwich Loaf',
    shortDescription:
      'Soft, pillowy daily sandwich white bread baked fresh in our stone hearth and sliced evenly inside our Jain Oven Pack loaf bag.',
    fullDescription:
      'Freshly baked every day in our 100% eggless, pure-vegetarian bakery kitchen without onion, garlic, or root ingredients. Tender, fine crumb ideal for grilled sandwiches, morning toast, and family tiffins.',
    ingredients: [
      'Refined Wheat Flour',
      'Fresh Dairy Milk',
      'Pure Butter & Veg Shortening',
      'Fine Sugar',
      'Yeast',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_16__2026_-_1_30PM_3469565e',
    imageAlt: 'Fresh sliced loaf of soft White Bread in signature Jain Oven Pack striped bakery bag',
    variants: [
      {
        id: 'sliced-loaf',
        label: 'Fresh Sliced Loaf',
        priceDelta: 0,
        note: 'Sealed soft from today’s bakery batch',
      },
      {
        id: 'unsliced-loaf',
        label: 'Whole Unsliced Loaf',
        priceDelta: 0,
        note: 'Packed whole for custom slicing at home',
      },
    ],
  },
  {
    id: 'mava-cupcake',
    name: 'Mava Cupcake',
    category: 'Bakery Products',
    price: 70,
    weightOrCount: 'Pack of 6',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Rich Khoya & Cardamom',
    shortDescription:
      'Soft, melt-in-the-mouth 100% eggless mava cupcakes baked golden with pure dairy khoya and aromatic cardamom in blush paper liners.',
    fullDescription:
      'Classic Mumbai-style bakery Mava Cupcakes crafted with rich milk khoya, pure butter, and fragrant green cardamom in our 100% eggless, pure-vegetarian oven kitchen—packed fresh as a sealed box of six.',
    ingredients: [
      'Refined Wheat Flour',
      'Fresh Milk Khoya (Mava)',
      'Pure Butter',
      'Fresh Dairy Milk',
      'Fine Sugar',
      'Cardamom (Elaichi)',
    ],
    image: '/assets/aistudio/Image_November_16__2026_-_1_34PM_1de030f5',
    imageAlt: 'Clear sealed box of 6 golden 100% eggless Mava Cupcakes in pink patterned paper liners from Jain Oven Pack',
    variants: [
      {
        id: 'pack-of-6',
        label: 'Fresh Pack of 6',
        priceDelta: 0,
        note: 'Sealed in clear bakery box with pink liners',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Box',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'laddi-pav',
    name: 'Laddi Pav',
    category: 'Bakery Products',
    price: 20,
    weightOrCount: '6-Piece Ladi',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Soft Pull-Apart Pav',
    shortDescription:
      'Pillowy-soft, pull-apart Mumbai-style laddi pav baked fresh with a light golden crust—perfect for Jain pav bhaji, vada, or maska pav.',
    fullDescription:
      'Baked fresh daily in our 100% eggless, pure-vegetarian oven kitchen with zero onion, garlic, or root ingredients. Feather-light crumb and soft crust packed as a 6-piece ladi.',
    ingredients: [
      'Refined Wheat Flour',
      'Fresh Dairy Milk',
      'Pure Butter & Veg Shortening',
      'Fine Sugar',
      'Yeast',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_16__2026_-_1_35PM_790ee686',
    imageAlt: 'Fresh sealed 6-piece pack of soft golden Mumbai-style Laddi Pav from Jain Oven Pack',
    variants: [
      {
        id: 'standard-ladi',
        label: 'Standard 6-Piece Ladi',
        priceDelta: 0,
        note: 'Packed soft from today’s hearth batch',
      },
      {
        id: 'same-day-warm-pack',
        label: 'Evening Tea / Dinner Batch',
        priceDelta: 0,
        note: 'Reserved from fresh afternoon bake',
      },
    ],
  },
  {
    id: 'chocolate-cupcake',
    name: 'Chocolate Cupcake',
    category: 'Bakery Products',
    price: 70,
    weightOrCount: 'Pack of 6',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Rich Cocoa Crumb',
    shortDescription:
      'Moist, rich dark-cocoa 100% eggless chocolate cupcakes baked tender inside blush heart-patterned liners—packed fresh as a box of six.',
    fullDescription:
      'Our Chocolate Cupcakes are crafted with rich cocoa and pure dairy milk for a soft, velvety crumb without eggs, onion, garlic, or root ingredients—sealed fresh in a convenient 6-piece bakery box.',
    ingredients: [
      'Refined Wheat Flour',
      'Rich Cocoa Powder',
      'Fresh Dairy Milk',
      'Pure Butter',
      'Fine Sugar',
      'Vanilla Essence',
    ],
    image: '/assets/aistudio/Image_November_16__2026_-_1_38PM_35279dc8',
    imageAlt: 'Clear sealed box of 6 moist 100% eggless Chocolate Cupcakes in pink heart-patterned liners from Jain Oven Pack',
    variants: [
      {
        id: 'pack-of-6',
        label: 'Fresh Pack of 6',
        priceDelta: 0,
        note: 'Sealed in clear bakery box',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Box',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'chocolate-slice-cake',
    name: 'Chocolate Slice Cake',
    category: 'Bakery Products',
    price: 70,
    weightOrCount: 'Fresh Sliced Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Rich Dark Cocoa Loaf',
    shortDescription:
      'Moist, pre-sliced dark cocoa tea cake baked in our 100% eggless kitchen and packed fresh in a clear sealed tray for easy sharing.',
    fullDescription:
      'Our Chocolate Slice Cake is baked in loaf pans with rich dark cocoa and dairy milk, then evenly sliced for tea-time serving or tiffin treats. Prepared 100% eggless and completely free of onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Dark Cocoa Powder',
      'Fresh Dairy Milk',
      'Pure Butter',
      'Fine Sugar',
      'Vanilla Essence',
    ],
    image: '/assets/aistudio/Image_November_16__2026_-_1_39PM_194e23f8',
    imageAlt: 'Clear sealed tray of evenly sliced rich dark 100% eggless Chocolate Slice Cake from Jain Oven Pack',
    variants: [
      {
        id: 'sliced-loaf-box',
        label: 'Fresh Sliced Tray Pack',
        priceDelta: 0,
        note: 'Pre-sliced and sealed fresh in bakery tray',
      },
      {
        id: 'gift-ribbon-pack',
        label: 'Blush Ribbon Gift Box',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'bun-pav',
    name: 'Bun Pav',
    category: 'Bakery Products',
    price: 20,
    weightOrCount: 'Pack of 2',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Soft Round Burger Buns',
    shortDescription:
      'Soft, pillowy round 100% eggless bun pav packed fresh in a twin Jain Oven Pack pouch—ideal for homemade Jain burgers, dabeli, or maska bun.',
    fullDescription:
      'Freshly baked daily in our pure-vegetarian, 100% eggless hearth kitchen without onion, garlic, or root ingredients. Tender, golden-domed round buns sealed fresh as a pack of two.',
    ingredients: [
      'Refined Wheat Flour',
      'Fresh Dairy Milk',
      'Pure Butter & Veg Shortening',
      'Fine Sugar',
      'Yeast',
      'Salt',
    ],
    image: '/assets/aistudio/Image_November_16__2026_-_1_40PM_4d9a3cb5',
    imageAlt: 'Fresh sealed Jain Oven Pack pouch of 2 soft golden round Bun Pav',
    variants: [
      {
        id: 'pack-of-2',
        label: 'Fresh Pack of 2',
        priceDelta: 0,
        note: 'Sealed soft in Jain Oven Pack pouch',
      },
      {
        id: 'same-day-warm-pack',
        label: 'Evening Snack Batch',
        priceDelta: 0,
        note: 'Reserved from fresh afternoon bake',
      },
    ],
  },
  {
    id: 'cream-pav',
    name: 'Cream Pav',
    category: 'Bakery Products',
    price: 20,
    weightOrCount: 'Pack of 2',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Sweet Cream-Filled Pav',
    shortDescription:
      'Soft, pillowy 100% eggless sweet pav rolls generously piped with smooth bakery cream—sealed fresh in a Jain Oven Pack twin pouch.',
    fullDescription:
      'Baked soft daily in our pure-vegetarian, 100% eggless hearth kitchen without onion, garlic, or root ingredients, then split and filled with light whipped vanilla bakery cream for a nostalgic tea-time treat.',
    ingredients: [
      'Refined Wheat Flour',
      'Fresh Whipped Bakery Cream',
      'Fine Sugar',
      'Fresh Dairy Milk',
      'Pure Butter & Veg Shortening',
      'Vanilla Essence',
    ],
    image: '/assets/aistudio/Image_November_17__2026_-_1_29PM_e734cbf6',
    imageAlt: 'Fresh sealed Jain Oven Pack pouch of 2 soft cream-filled 100% eggless Cream Pav rolls',
    variants: [
      {
        id: 'pack-of-2',
        label: 'Fresh Pack of 2',
        priceDelta: 0,
        note: 'Sealed fresh in Jain Oven Pack pouch',
      },
      {
        id: 'same-day-warm-pack',
        label: 'Evening Snack Batch',
        priceDelta: 0,
        note: 'Reserved from fresh afternoon batch',
      },
    ],
  },
  {
    id: 'nankhatai',
    name: 'Nankhatai',
    category: 'Cookies',
    price: 70,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Classic Cardamom Shortbread',
    shortDescription:
      'Melt-in-the-mouth traditional 100% eggless Indian shortbread cookies with delicate cracked tops and fragrant green cardamom—packed in a clear 250g bakery tray.',
    fullDescription:
      'Our heirloom Nankhatai is baked slow in our stone-hearth oven until pale golden with signature delicate cracks and a tender, crumbly melt-in-the-mouth texture. Crafted in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Pure Ghee & Butter',
      'Powdered Sugar',
      'Semolina (Rava)',
      'Gram Flour (Besan)',
      'Green Cardamom',
    ],
    image: '/assets/aistudio/Image_November_17__2026_-_12_44PM_e362a62b',
    imageAlt: 'Clear sealed 250g bakery tray of golden cracked-top 100% eggless Nankhatai cookies from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'badam-coconut-cookies',
    name: 'Badam Coconut Cookies',
    category: 'Cookies',
    price: 130,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Roasted Almond & Coconut',
    shortDescription:
      'Rich, crisp 100% eggless desiccated coconut cookies studded with whole roasted almonds (badam)—packed fresh in a clear 250g bakery tray.',
    fullDescription:
      'Our Badam Coconut Cookies blend toasted desiccated coconut and pure butter with crunchy roasted almond tops, baked to a delicate golden crisp in our 100% eggless, pure-vegetarian hearth kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Desiccated Coconut',
      'Almonds (Badam)',
      'Pure Butter & Veg Shortening',
      'Powdered Sugar',
      'Milk',
    ],
    image: '/assets/aistudio/Image_November_17__2026_-_12_48PM_3f422368',
    imageAlt: 'Clear sealed 250g bakery tray of golden 100% eggless Badam Coconut Cookies topped with whole almonds from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'fruit-nankhatai',
    name: 'Fruit Nankhatai',
    category: 'Cookies',
    price: 80,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Tutti Frutti Shortbread',
    shortDescription:
      'Golden square-cut 100% eggless nankhatai cookies studded with sweet candied fruit bits—buttery, crumbly, and packed fresh in a clear 250g bakery tray.',
    fullDescription:
      'Our Fruit Nankhatai pairs rich shortbread biscuit dough with bright, chewy candied fruit pieces, baked slow in our stone-hearth oven until crisp on the edges and melt-in-the-mouth inside. Crafted in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Pure Butter & Veg Shortening',
      'Candied Fruit Bits (Tutti Frutti)',
      'Powdered Sugar',
      'Custard & Cardamom Flavour',
      'Milk',
    ],
    image: '/assets/aistudio/Image_November_17__2026_-_12_50PM_70ac7ac3',
    imageAlt: 'Clear sealed 250g bakery tray of golden square-cut 100% eggless Fruit Nankhatai studded with candied fruit bits from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'badam-coconut-cookies-square',
    name: 'Badam Coconut Cookies',
    category: 'Cookies',
    price: 120,
    weightOrCount: 'Fresh Sealed Tray',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Square Cut Almond Coconut',
    shortDescription:
      'Crisp square-cut 100% eggless coconut cookies folded with roasted almond bits—lightly sweet, aromatic, and packed fresh in a clear bakery tray.',
    fullDescription:
      'These square-cut Badam Coconut Cookies combine fine desiccated coconut and crunchy chopped almonds in a crisp, crumbly butter biscuit dough baked golden in our stone-hearth oven. Crafted in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Desiccated Coconut',
      'Chopped Almonds (Badam)',
      'Pure Butter & Veg Shortening',
      'Powdered Sugar',
      'Milk',
    ],
    image: '/assets/aistudio/Image_November_17__2026_-_12_52PM_36b56a17',
    imageAlt: 'Clear sealed bakery tray of golden square-cut 100% eggless Badam Coconut Cookies with almond bits from Jain Oven Pack',
    variants: [
      {
        id: 'standard-tray',
        label: 'Fresh Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-tray',
        label: 'Blush Ribbon Gift Box',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'kaju-crunch-cookies',
    name: 'Kaju Crunch Cookies',
    category: 'Cookies',
    price: 100,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Roasted Cashew Crunch',
    shortDescription:
      'Crisp, golden-baked 100% eggless butter cookies generously loaded with crunchy roasted cashew bits—packed fresh in a clear 250g bakery tray.',
    fullDescription:
      'Our Kaju Crunch Cookies fold roasted cashew pieces into rich, melt-in-the-mouth butter biscuit dough for a toasted nutty crunch in every bite. Baked in our 100% eggless, pure-vegetarian hearth kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Roasted Cashews (Kaju)',
      'Pure Butter & Veg Shortening',
      'Powdered Sugar',
      'Milk',
      'Cardamom Flavour',
    ],
    image: '/assets/aistudio/Image_November_17__2026_-_12_55PM_033b7b0c',
    imageAlt: 'Clear sealed 250g bakery tray of golden crisp 100% eggless Kaju Crunch Cookies from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'badam-nankhatai',
    name: 'Badam Nankhatai',
    category: 'Cookies',
    price: 120,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Almond Shortbread Bars',
    shortDescription:
      'Tender, crumbly bar-cut 100% eggless nankhatai shortbread cookies enriched with sliced and chopped almonds (badam)—packed fresh in a clear 250g bakery tray.',
    fullDescription:
      'Our Badam Nankhatai blends classic cardamom shortbread richness with roasted almond bits, baked golden in our stone-hearth oven for a delicate melt-in-the-mouth bite. Crafted in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Almonds (Badam)',
      'Pure Ghee & Butter',
      'Powdered Sugar',
      'Semolina (Rava)',
      'Green Cardamom',
    ],
    image: '/assets/aistudio/Image_November_17__2026_-_1_01PM_dfe65c64',
    imageAlt: 'Clear sealed 250g bakery tray of golden bar-cut 100% eggless Badam Nankhatai cookies from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'kesar-cookies',
    name: 'Kesar Cookies',
    category: 'Cookies',
    price: 90,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Saffron Square Butter Cookies',
    shortDescription:
      'Fragrant saffron-infused square 100% eggless butter cookies with a festive sprinkle finish—crisp, buttery, and packed fresh in a clear 250g bakery tray.',
    fullDescription:
      'Our Kesar Cookies pair aromatic saffron notes and rich butter biscuit dough with a light crunch of colourful sugar sprinkles, baked golden in our stone-hearth oven. Crafted in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Pure Butter & Veg Shortening',
      'Saffron (Kesar) Essence & Strands',
      'Powdered Sugar',
      'Rainbow Sugar Sprinkles',
      'Milk',
    ],
    image: '/assets/aistudio/Image_November_17__2026_-_1_05PM_d5634ff1',
    imageAlt: 'Clear sealed 250g bakery tray of saffron-golden square 100% eggless Kesar Cookies with colourful sprinkles from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'vanilla-cookies',
    name: 'Vanilla Cookies',
    category: 'Cookies',
    price: 70,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Classic Vanilla Bars',
    shortDescription:
      'Crisp, golden finger-bar 100% eggless vanilla butter cookies finished with a sweet red jam ribbon—lightly fragrant and packed fresh in a clear 250g bakery tray.',
    fullDescription:
      'Our Vanilla Cookies bring classic bakery vanilla warmth to a tender, crisp finger-bar shortbread topped with a bright jam accent. Baked fresh in our 100% eggless, pure-vegetarian hearth kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Pure Butter & Veg Shortening',
      'Powdered Sugar',
      'Vanilla Essence',
      'Fruit Jam Glaze',
      'Milk',
    ],
    image: '/assets/aistudio/Image_November_17__2026_-_1_07PM_91b14f1a',
    imageAlt: 'Clear sealed 250g bakery tray of golden finger-bar 100% eggless Vanilla Cookies with a red jam accent from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'chocolate-cookies',
    name: 'Chocolate Cookies',
    category: 'Cookies',
    price: 100,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Rich Cocoa & Choco Chips',
    shortDescription:
      'Deep cocoa-rich 100% eggless round chocolate cookies dotted with dark chocolate chips—crisp on the edges, tender inside, and packed fresh in a clear 250g tray.',
    fullDescription:
      'Our Chocolate Cookies blend rich baker’s cocoa, pure butter, and dark chocolate chips for a deeply satisfying cocoa crunch in every bite. Baked fresh in our 100% eggless, pure-vegetarian hearth kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Cocoa Powder',
      'Dark Chocolate Chips',
      'Pure Butter & Veg Shortening',
      'Powdered Sugar',
      'Milk',
    ],
    image: '/assets/aistudio/Image_November_17__2026_-_1_09PM_b95397a0',
    imageAlt: 'Clear sealed 250g bakery tray of rich cocoa 100% eggless Chocolate Cookies studded with choco chips from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'rava-nankhatai',
    name: 'Rava Nankhatai',
    category: 'Cookies',
    price: 80,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Roasted Semolina Shortbread',
    shortDescription:
      'Delicate, crisp-textured 100% eggless semolina (rava) nankhatai cookies with a signature lightly toasted crunch and cardamom warmth—packed fresh in a clear 250g tray.',
    fullDescription:
      'Our Rava Nankhatai combines fine roasted semolina, pure butter, and aromatic green cardamom for a pleasantly grainy, crisp shortbread bite that melts gently on the palate. Crafted in our 100% eggless, pure-vegetarian hearth kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Fine Semolina (Rava / Sooji)',
      'Refined Wheat Flour',
      'Pure Ghee & Butter',
      'Powdered Sugar',
      'Green Cardamom',
      'Milk',
    ],
    image: '/assets/aistudio/Image_November_17__2026_-_1_12PM_188dd695',
    imageAlt: 'Clear sealed 250g bakery tray of golden crisp 100% eggless Rava Nankhatai cookies from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'kaju-katli-nankhatai',
    name: 'Kaju Katli Nankhatai',
    category: 'Cookies',
    price: 90,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Diamond-Cut Cashew Shortbread',
    shortDescription:
      'Signature diamond-cut 100% eggless cashew nankhatai shortbread cookies inspired by classic kaju katli—rich, crumbly, and packed fresh in a clear 250g tray.',
    fullDescription:
      'Our Kaju Katli Nankhatai pairs creamy cashew richness and cardamom aroma in crisp, festive diamond-cut shortbread bites baked golden in our stone-hearth oven. Crafted in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Cashews (Kaju)',
      'Pure Ghee & Butter',
      'Powdered Sugar',
      'Green Cardamom',
      'Milk',
    ],
    image: '/assets/aistudio/Image_November_17__2026_-_1_13PM_4dad34df',
    imageAlt: 'Clear sealed 250g bakery tray of diamond-cut 100% eggless Kaju Katli Nankhatai cookies from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'vanilla-chocolate-nankhatai',
    name: 'Vanilla Chocolate Nankhatai',
    category: 'Cookies',
    price: 70,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Dual-Layer Cocoa & Vanilla',
    shortDescription:
      'Dual-layered 100% eggless vanilla and cocoa shortbread nankhatai bars—tender, fragrant, and packed fresh in a clear 250g bakery tray.',
    fullDescription:
      'Our Vanilla Chocolate Nankhatai brings sweet cream vanilla shortbread and rich baker’s cocoa together in crisp, melt-in-the-mouth layered bars. Crafted in our 100% eggless, pure-vegetarian hearth kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Cocoa Powder',
      'Pure Ghee & Butter',
      'Powdered Sugar',
      'Vanilla Essence',
      'Milk',
    ],
    image: '/assets/aistudio/Image_November_17__2026_-_1_14PM_f2ef4d82',
    imageAlt: 'Clear sealed 250g bakery tray of two-tone 100% eggless Vanilla Chocolate Nankhatai bars from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'pista-wonder',
    name: 'Pista Wonder',
    category: 'Cookies',
    price: 100,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Pistachio Melt-in-Mouth Cookies',
    shortDescription:
      'Aromatic pistachio-infused 100% eggless round butter cookies with delicate cracked crowns—crumbly, nutty, and packed fresh in a clear 250g bakery tray.',
    fullDescription:
      'Our Pista Wonder cookies blend roasted pistachio richness, green cardamom, and pure butter into tender, melt-in-the-mouth rounds baked gently in our stone-hearth oven. Crafted in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Pistachios (Pista)',
      'Pure Ghee & Butter',
      'Powdered Sugar',
      'Green Cardamom',
      'Milk',
    ],
    image: '/assets/aistudio/Image_November_17__2026_-_1_17PM_926560cb',
    imageAlt: 'Clear sealed 250g bakery tray of light pistachio-toned 100% eggless Pista Wonder cookies from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'kaju-cookies',
    name: 'Kaju Cookies',
    category: 'Cookies',
    price: 100,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Roasted Cashew Butter Cookies',
    shortDescription:
      'Golden round 100% eggless butter cookies richly folded with roasted cashews (kaju)—crisp, nutty, and packed fresh in a clear 250g bakery tray.',
    fullDescription:
      'Our Kaju Cookies pair creamy roasted cashews with rich butter biscuit dough for a crisp yet tender tea-time bite. Crafted in our 100% eggless, pure-vegetarian hearth kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Roasted Cashews (Kaju)',
      'Pure Ghee & Butter',
      'Powdered Sugar',
      'Green Cardamom',
      'Milk',
    ],
    image: '/assets/aistudio/Image_November_17__2026_-_1_22PM_bf4ce41b',
    imageAlt: 'Clear sealed 250g bakery tray of golden round 100% eggless Kaju Cookies from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'pista-badam-cookies',
    name: 'Pista Badam Cookies',
    category: 'Cookies',
    price: 100,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Pistachio & Almond Slivers',
    shortDescription:
      'Golden oval 100% eggless butter cookies richly studded with roasted pistachio and almond slivers—crisp, fragrant, and packed fresh in a clear 250g bakery tray.',
    fullDescription:
      'Our Pista Badam Cookies fold generous pistachio and almond slivers into aromatic saffron-warmed butter biscuit dough, baked to a crisp golden snap in our stone-hearth oven. Crafted in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Pistachios (Pista)',
      'Almonds (Badam)',
      'Pure Butter & Veg Shortening',
      'Powdered Sugar',
      'Saffron & Cardamom Flavour',
    ],
    image: '/assets/aistudio/Image_November_17__2026_-_1_26PM_c13ced53',
    imageAlt: 'Clear sealed 250g bakery tray of golden oval 100% eggless Pista Badam Cookies with pistachio and almond slivers from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'kaju-crunch-cookies-tray',
    name: 'Kaju Crunch Cookies',
    category: 'Cookies',
    price: 100,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Cashew-Crusted Rounds',
    shortDescription:
      'Golden round 100% eggless butter cookies crowned with crushed roasted cashews (kaju)—light, crisp, and packed fresh in a clear 250g bakery tray.',
    fullDescription:
      'These cashew-crusted Kaju Crunch Cookies combine tender pure-butter shortbread rounds with a crunchy golden topping of chopped roasted cashews. Baked fresh in our 100% eggless, pure-vegetarian hearth kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Roasted Cashews (Kaju)',
      'Pure Butter & Veg Shortening',
      'Powdered Sugar',
      'Cardamom Flavour',
      'Milk',
    ],
    image: '/assets/aistudio/Image_November_19__2026_-_12_49PM_5f6a26e3',
    imageAlt: 'Clear sealed 250g bakery tray of golden round cashew-crusted 100% eggless Kaju Crunch Cookies from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'til-makroom-cookies',
    name: 'Til Makroom Cookies',
    category: 'Cookies',
    price: 100,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Roasted Sesame Macaroons',
    shortDescription:
      'Crisp, nutty 100% eggless sesame macaroon (til makroom) cookies studded with toasted white sesame seeds—lightly sweet, aromatic, and packed fresh in a clear 250g tray.',
    fullDescription:
      'Our Til Makroom Cookies pair toasted white sesame seeds and desiccated coconut notes with delicate butter cookie dough, slow-baked to a crisp golden crunch in our stone-hearth oven. Crafted in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Toasted Sesame Seeds (Til)',
      'Desiccated Coconut',
      'Pure Butter & Veg Shortening',
      'Powdered Sugar',
      'Milk',
    ],
    image: '/assets/aistudio/Image_November_19__2026_-_12_54PM_4eb5c93b',
    imageAlt: 'Clear sealed 250g bakery tray of golden crisp 100% eggless Til Makroom Cookies speckled with sesame seeds from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'nut-nankhatai',
    name: 'Nut Nankhatai',
    category: 'Cookies',
    price: 90,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Glazed Roasted Nut Bars',
    shortDescription:
      'Golden-baked 100% eggless nankhatai shortbread bars topped with crunchy chopped roasted nuts—rich, fragrant, and packed fresh in a clear 250g bakery tray.',
    fullDescription:
      'Our Nut Nankhatai pairs rich, buttery cardamom shortbread with a caramelized glaze and a generous topping of chopped roasted nuts, slow-baked to crisp perfection in our stone-hearth oven. Crafted in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Roasted Mixed Nuts (Almonds & Cashews)',
      'Pure Ghee & Butter',
      'Powdered Sugar',
      'Green Cardamom',
      'Milk',
    ],
    image: '/assets/aistudio/Image_November_19__2026_-_12_55PM_3896d6f5',
    imageAlt: 'Clear sealed 250g bakery tray of golden glazed 100% eggless Nut Nankhatai shortbread bars topped with chopped roasted nuts from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'chocolate-crunch-cookies',
    name: 'Chocolate Crunch Cookies',
    category: 'Cookies',
    price: 100,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Rich Dark Cocoa & Nut Crunch',
    shortDescription:
      'Crisp, square-cut dark cocoa 100% eggless cookies baked with crunchy nut and choco bits—deeply chocolaty and packed fresh in a clear 250g bakery tray.',
    fullDescription:
      'Our Chocolate Crunch Cookies pair dark baker’s cocoa with crunchy nut pieces and roasted cocoa nib accents in crisp square-cut biscuit bites baked fresh in our stone-hearth oven. Crafted in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Dark Cocoa Powder',
      'Roasted Nut & Choco Crunch Bits',
      'Pure Butter & Veg Shortening',
      'Powdered Sugar',
      'Milk',
    ],
    image: '/assets/aistudio/Image_November_19__2026_-_12_57PM_495a91b5',
    imageAlt: 'Clear sealed 250g bakery tray of dark square-cut 100% eggless Chocolate Crunch Cookies from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'pista-chocolate-cookies',
    name: 'Pista Chocolate Cookies',
    category: 'Cookies',
    price: 100,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Pistachio-Crusted Cocoa Bars',
    shortDescription:
      'Rich cocoa-dark 100% eggless finger-bar cookies coated with crushed green pistachios—crisp, nutty, and packed fresh in a clear 250g bakery tray.',
    fullDescription:
      'Our Pista Chocolate Cookies unite deep dark baker’s cocoa with aromatic crushed green pistachios in crisp finger-bar shortbread cookies baked fresh in our stone-hearth oven. Crafted in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Dark Cocoa Powder',
      'Crushed Pistachios (Pista)',
      'Pure Butter & Veg Shortening',
      'Powdered Sugar',
      'Milk',
    ],
    image: '/assets/aistudio/Image_November_19__2026_-_12_58PM_a9144e21',
    imageAlt: 'Clear sealed 250g bakery tray of dark cocoa 100% eggless Pista Chocolate Cookies coated with crushed pistachios from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'butterscotch-cookies',
    name: 'Butterscotch Cookies',
    category: 'Cookies',
    price: 100,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Caramel Butterscotch Chips',
    shortDescription:
      'Crisp, buttery 100% eggless round cookies studded with golden caramel butterscotch crunch chips—sweet, toasted, and packed fresh in a clear 250g bakery tray.',
    fullDescription:
      'Our Butterscotch Cookies fold crunchy amber butterscotch chips into melt-in-the-mouth pure-butter shortbread rounds, baked golden in our stone-hearth oven. Crafted in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Butterscotch Caramel Chips',
      'Pure Butter & Veg Shortening',
      'Powdered Sugar',
      'Butterscotch Essence',
      'Milk',
    ],
    image: '/assets/aistudio/Image_November_19__2026_-_1_00PM_55233154',
    imageAlt: 'Clear sealed 250g bakery tray of golden round 100% eggless Butterscotch Cookies dotted with caramel chips from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'amul-cookies',
    name: 'Amul Cookies',
    category: 'Cookies',
    price: 100,
    weightOrCount: '250g Pack',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Pure Amul Butter Squares',
    shortDescription:
      'Rich, melt-in-the-mouth square 100% eggless cookies crafted with genuine Amul butter—golden, subtly salted-sweet, and packed fresh in a clear 250g bakery tray.',
    fullDescription:
      'Our Amul Cookies celebrate the unmistakable creaminess of genuine Amul butter in crisp, flaky square-cut shortbread biscuits baked golden in our stone-hearth oven. Crafted in a 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Genuine Amul Butter',
      'Powdered Sugar',
      'Milk',
      'Pinch of Salt',
      'Vanilla Essence',
    ],
    image: '/assets/aistudio/Image_November_19__2026_-_1_01PM_a12993f9',
    imageAlt: 'Clear sealed 250g bakery tray of golden square 100% eggless Amul Cookies from Jain Oven Pack',
    variants: [
      {
        id: 'pack-250g',
        label: '250g Sealed Tray',
        priceDelta: 0,
        note: 'Packed fresh in clear airtight box',
      },
      {
        id: 'gift-ribbon-250g',
        label: 'Blush Ribbon Gift Box (250g)',
        priceDelta: 0,
        note: 'Packed with ribbon & note card',
      },
    ],
  },
  {
    id: 'chocolate-cake',
    name: 'Chocolate Cake',
    category: 'Cakes',
    price: 500,
    weightOrCount: '500g Cake',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Chocolate Ganache & Filigree',
    shortDescription:
      'Moist 100% eggless chocolate sponge layered with smooth dark chocolate ganache and finished with hand-piped dark-and-white chocolate filigree—500g celebration cake.',
    fullDescription:
      'Our signature Chocolate Cake pairs rich, tender 100% eggless cocoa sponge layers with silky chocolate ganache and crisp chocolate filigree collars on a gold presentation board. Prepared fresh in our pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Dark Cocoa & Chocolate Ganache',
      'Fresh Whipped Cream',
      'Pure Butter & Veg Shortening',
      'Fine Sugar',
      'Vanilla Essence',
    ],
    image: '/assets/aistudio/Image_November_22__2026_-_12_51PM_2b837ab6',
    imageAlt: 'Fresh 500g 100% eggless Chocolate Cake with dark ganache glaze, dark-and-white chocolate filigree wrap, and cherry garnish from Jain Oven Pack',
    variants: [
      {
        id: 'cake-500g',
        label: '500g Celebration Cake Box',
        priceDelta: 0,
        note: 'Presented on gold board in bakery cake box',
      },
      {
        id: 'cake-500g-message',
        label: '500g Cake + Custom Message',
        priceDelta: 0,
        note: 'Add celebration name plaque in order notes',
      },
    ],
  },
  {
    id: 'chocolate-vanilla-cake',
    name: 'Chocolate Vanilla Cake',
    category: 'Cakes',
    price: 330,
    weightOrCount: '500g Cake',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Vanilla Frosting & Choco Drip',
    shortDescription:
      'Soft 100% eggless vanilla-and-cocoa sponge frosted in light whipped vanilla cream, crowned with a glossy dark chocolate drip, cream swirls, and rainbow sprinkles—500g cake.',
    fullDescription:
      'Our Chocolate Vanilla Cake brings together fluffy vanilla sponge and rich dark chocolate ganache drip over smooth whipped vanilla frosting with sprinkle-topped cream rosettes. Crafted fresh in our 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Fresh Whipped Vanilla Cream',
      'Dark Chocolate Drip Glaze',
      'Pure Butter & Veg Shortening',
      'Fine Sugar',
      'Vanilla Essence',
      'Rainbow Sugar Sprinkles',
    ],
    image: '/assets/aistudio/Image_November_22__2026_-_12_53PM_147b4de3',
    imageAlt: 'Fresh 500g 100% eggless Chocolate Vanilla Cake with white vanilla frosting, glossy dark chocolate drip, cream swirls, and colourful sprinkles from Jain Oven Pack',
    variants: [
      {
        id: 'cake-500g',
        label: '500g Celebration Cake Box',
        priceDelta: 0,
        note: 'Presented on gold board in bakery cake box',
      },
      {
        id: 'cake-500g-message',
        label: '500g Cake + Custom Message',
        priceDelta: 0,
        note: 'Add celebration name plaque in order notes',
      },
    ],
  },
  {
    id: 'blueberry-cake',
    name: 'Blueberry Cake',
    category: 'Cakes',
    price: 330,
    weightOrCount: '500g Cake',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Blueberry Glaze & Cream',
    shortDescription:
      'Light 100% eggless vanilla sponge layered with tangy-sweet blueberry compote and whipped cream, finished in a glossy blueberry mirror glaze—500g cake.',
    fullDescription:
      'Our Blueberry Cake pairs tender vanilla sponge layers with fruity blueberry compote and airy whipped cream beneath a vibrant blueberry mirror glaze and white chocolate swirl crown. Prepared fresh in our 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Blueberry Compote & Glaze',
      'Fresh Whipped Cream',
      'Pure Butter & Veg Shortening',
      'Fine Sugar',
      'Vanilla Essence',
    ],
    image: '/assets/aistudio/Image_November_22__2026_-_12_55PM_70c4ac12',
    imageAlt: 'Fresh 500g 100% eggless Blueberry Cake finished with glossy blueberry mirror glaze, white swirl pattern, and chocolate curls from Jain Oven Pack',
    variants: [
      {
        id: 'cake-500g',
        label: '500g Celebration Cake Box',
        priceDelta: 0,
        note: 'Presented on gold board in bakery cake box',
      },
      {
        id: 'cake-500g-message',
        label: '500g Cake + Custom Message',
        priceDelta: 0,
        note: 'Add celebration name plaque in order notes',
      },
    ],
  },
  {
    id: 'chocolate-cake-250g',
    name: 'Chocolate Cake',
    category: 'Cakes',
    price: 250,
    weightOrCount: '250g Cake',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Mini 250g Chocolate Truffle',
    shortDescription:
      'Petite 250g 100% eggless rich dark chocolate sponge cake coated with smooth cocoa ganache and chocolate crumb finish, topped with colourful chocolate fans and cherry.',
    fullDescription:
      'Our 250g mini Chocolate Cake brings the same deep dark cocoa richness and smooth ganache layering in an intimate size ideal for two to four servings. Crafted fresh in our 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Dark Cocoa & Chocolate Ganache',
      'Fresh Whipped Cream',
      'Pure Butter & Veg Shortening',
      'Fine Sugar',
      'Vanilla Essence',
    ],
    image: '/assets/aistudio/Image_November_22__2026_-_12_58PM_9f17ff50',
    imageAlt: 'Fresh 250g 100% eggless Chocolate Cake with dark ganache, chocolate crumb sides, cherry, and white chocolate garnishes from Jain Oven Pack',
    variants: [
      {
        id: 'cake-250g',
        label: '250g Celebration Cake Box',
        priceDelta: 0,
        note: 'Presented on gold board in bakery cake box',
      },
      {
        id: 'cake-250g-message',
        label: '250g Cake + Custom Message',
        priceDelta: 0,
        note: 'Add celebration name plaque in order notes',
      },
    ],
  },
  {
    id: 'choco-chips-cake',
    name: 'Choco Chips Cake',
    category: 'Cakes',
    price: 250,
    weightOrCount: '250g Cake',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Glossy Ganache & Choco Chips',
    shortDescription:
      'Tender 250g 100% eggless chocolate sponge coated in silky dark ganache and studded with crisp choco chips, finished with white chocolate curls and a cherry.',
    fullDescription:
      'Our Choco Chips Cake layers rich cocoa sponge with smooth chocolate ganache and crunchy white & dark choco chips inside and out—crafted in our 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Dark Cocoa & Chocolate Ganache',
      'White & Dark Choco Chips',
      'Fresh Whipped Cream',
      'Pure Butter & Veg Shortening',
      'Fine Sugar',
    ],
    image: '/assets/aistudio/Image_November_22__2026_-_1_01PM_02675e48',
    imageAlt: 'Fresh 250g 100% eggless Choco Chips Cake covered in glossy chocolate ganache, choco chips around the sides, and white chocolate curls from Jain Oven Pack',
    variants: [
      {
        id: 'cake-250g',
        label: '250g Celebration Cake Box',
        priceDelta: 0,
        note: 'Presented on gold board in bakery cake box',
      },
      {
        id: 'cake-250g-message',
        label: '250g Cake + Custom Message',
        priceDelta: 0,
        note: 'Add celebration name plaque in order notes',
      },
    ],
  },
  {
    id: 'chocolate-sprinkler-cake',
    name: 'Chocolate Sprinkler Cake',
    category: 'Cakes',
    price: 250,
    weightOrCount: '250g Cake',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Festive Rainbow Sprinkles',
    shortDescription:
      'Moist 250g 100% eggless dark chocolate sponge wrapped in glossy ganache and colourful rainbow sugar sprinkles, topped with chocolate curls and a cherry.',
    fullDescription:
      'Our Chocolate Sprinkler Cake layers soft cocoa sponge with smooth chocolate ganache and a joyful crunch of rainbow sprinkles all around—crafted fresh in our 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Dark Cocoa & Chocolate Ganache',
      'Rainbow Sugar Sprinkles',
      'Fresh Whipped Cream',
      'Pure Butter & Veg Shortening',
      'Fine Sugar',
    ],
    image: '/assets/aistudio/Image_November_22__2026_-_1_02PM_e355d338',
    imageAlt: 'Fresh 250g 100% eggless Chocolate Sprinkler Cake finished with dark ganache, rainbow sugar sprinkles around the sides, white chocolate fan curls, and cherry from Jain Oven Pack',
    variants: [
      {
        id: 'cake-250g',
        label: '250g Celebration Cake Box',
        priceDelta: 0,
        note: 'Presented on gold board in bakery cake box',
      },
      {
        id: 'cake-250g-message',
        label: '250g Cake + Custom Message',
        priceDelta: 0,
        note: 'Add celebration name plaque in order notes',
      },
    ],
  },
  {
    id: 'blueberry-cake-250g',
    name: 'Blueberry Cake',
    category: 'Cakes',
    price: 250,
    weightOrCount: '250g Cake',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Mini 250g Blueberry Glaze',
    shortDescription:
      'Petite 250g 100% eggless vanilla sponge layered with fruity blueberry compote and fresh whipped cream beneath a glossy royal-violet blueberry glaze and crisp chocolate shards.',
    fullDescription:
      'Our 250g mini Blueberry Cake pairs soft vanilla sponge layers with sweet-tart blueberry filling and airy cream frosting, topped with sculpted dark and gold chocolate curls. Crafted fresh in our 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Blueberry Compote & Glaze',
      'Fresh Whipped Cream',
      'Pure Butter & Veg Shortening',
      'Fine Sugar',
      'Vanilla Essence',
    ],
    image: '/assets/aistudio/Image_November_22__2026_-_1_04PM_f8c7cfcd',
    imageAlt: 'Fresh 250g 100% eggless Blueberry Cake finished with glossy violet blueberry mirror glaze, piped white cream border, and chocolate curls from Jain Oven Pack',
    variants: [
      {
        id: 'cake-250g',
        label: '250g Celebration Cake Box',
        priceDelta: 0,
        note: 'Presented on gold board in bakery cake box',
      },
      {
        id: 'cake-250g-message',
        label: '250g Cake + Custom Message',
        priceDelta: 0,
        note: 'Add celebration name plaque in order notes',
      },
    ],
  },
  {
    id: 'white-forest-cake',
    name: 'White Forest Cake',
    category: 'Cakes',
    price: 250,
    weightOrCount: '250g Cake',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'White Chocolate & Cherries',
    shortDescription:
      'Snow-white 250g 100% eggless vanilla sponge layered with airy whipped cream, wrapped in flaky white chocolate shavings and crowned with glazed cherries.',
    fullDescription:
      'Our White Forest Cake layers tender vanilla sponge with light whipped cream and sweet cherry filling, generously finished around the sides with creamy white chocolate flakes and cherry-topped cream rosettes. Crafted fresh in our 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'White Chocolate Flakes',
      'Fresh Whipped Cream',
      'Glazed Cherries',
      'Pure Butter & Veg Shortening',
      'Fine Sugar',
      'Vanilla Essence',
    ],
    image: '/assets/aistudio/Image_November_22__2026_-_1_05PM_8925a20a',
    imageAlt: 'Fresh 250g 100% eggless White Forest Cake frosted with whipped cream, white chocolate shavings around the sides, cream rosettes, and red cherries from Jain Oven Pack',
    variants: [
      {
        id: 'cake-250g',
        label: '250g Celebration Cake Box',
        priceDelta: 0,
        note: 'Presented on gold board in bakery cake box',
      },
      {
        id: 'cake-250g-message',
        label: '250g Cake + Custom Message',
        priceDelta: 0,
        note: 'Add celebration name plaque in order notes',
      },
    ],
  },
  {
    id: 'chocolate-vanilla-cake-250g',
    name: 'Chocolate Vanilla Cake',
    category: 'Cakes',
    price: 250,
    weightOrCount: '250g Cake',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Mini 250g Vanilla & Choco Drip',
    shortDescription:
      'Petite 250g 100% eggless vanilla sponge frosted in smooth white cream with a glossy dark chocolate drip glaze, whipped rosettes, and rainbow sprinkles.',
    fullDescription:
      'Our 250g mini Chocolate Vanilla Cake brings soft vanilla sponge, smooth whipped vanilla cream, and rich chocolate ganache drip together in an intimate celebration size. Crafted fresh in our 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Fresh Whipped Vanilla Cream',
      'Dark Chocolate Drip Glaze',
      'Pure Butter & Veg Shortening',
      'Fine Sugar',
      'Vanilla Essence',
      'Rainbow Sugar Sprinkles',
    ],
    image: '/assets/aistudio/Image_November_22__2026_-_1_06PM_d6f94ec0',
    imageAlt: 'Fresh 250g 100% eggless Chocolate Vanilla Cake with white cream frosting, glossy dark chocolate drip, cream swirls, and sprinkles from Jain Oven Pack',
    variants: [
      {
        id: 'cake-250g',
        label: '250g Celebration Cake Box',
        priceDelta: 0,
        note: 'Presented on gold board in bakery cake box',
      },
      {
        id: 'cake-250g-message',
        label: '250g Cake + Custom Message',
        priceDelta: 0,
        note: 'Add celebration name plaque in order notes',
      },
    ],
  },
  {
    id: 'swiss-chocolate-cake',
    name: 'Swiss Chocolate Cake',
    category: 'Cakes',
    price: 250,
    weightOrCount: '250g Cake',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Cocoa Cream & Chocolate Drizzle',
    shortDescription:
      'Smooth 250g 100% eggless Swiss cocoa sponge layered with silky chocolate mousse cream, dark ganache drip, white glaze stripes, and cocoa cream rosettes.',
    fullDescription:
      'Our Swiss Chocolate Cake pairs velvety cocoa cream frosting with moist chocolate sponge, glossy ganache drip, delicate white chocolate drizzle lines, and choco-chip topped mocha swirls. Crafted fresh in our 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Swiss Cocoa Cream',
      'Dark Chocolate Ganache & Drip',
      'White Chocolate Glaze',
      'Dark Choco Chips',
      'Pure Butter & Veg Shortening',
      'Fine Sugar',
    ],
    image: '/assets/aistudio/Image_November_22__2026_-_1_07PM_a4edb0b1',
    imageAlt: 'Fresh 250g 100% eggless Swiss Chocolate Cake with whipped frosting, glossy dark chocolate drip, white chocolate stripes, and cocoa rosettes from Jain Oven Pack',
    variants: [
      {
        id: 'cake-250g',
        label: '250g Celebration Cake Box',
        priceDelta: 0,
        note: 'Presented on gold board in bakery cake box',
      },
      {
        id: 'cake-250g-message',
        label: '250g Cake + Custom Message',
        priceDelta: 0,
        note: 'Add celebration name plaque in order notes',
      },
    ],
  },
  {
    id: 'black-forest-cake',
    name: 'Black Forest Cake',
    category: 'Cakes',
    price: 250,
    weightOrCount: '250g Cake',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Dark Chocolate Shavings & Cherries',
    shortDescription:
      'Classic 250g 100% eggless chocolate sponge layered with airy whipped cream and cherry compote, wrapped in dark chocolate shavings and topped with red cherries.',
    fullDescription:
      'Our Black Forest Cake pairs moist chocolate sponge with fresh whipped vanilla cream and sweet cherries, generously finished around the sides with flaky dark chocolate shavings and cherry-topped rosettes. Crafted fresh in our 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Dark Chocolate Shavings',
      'Fresh Whipped Cream',
      'Glazed Cherries',
      'Cocoa Powder',
      'Pure Butter & Veg Shortening',
      'Fine Sugar',
    ],
    image: '/assets/aistudio/Image_November_22__2026_-_1_09PM_11b95308',
    imageAlt: 'Fresh 250g 100% eggless Black Forest Cake frosted with whipped cream, dark chocolate flakes on the sides, cream rosettes, and cherries from Jain Oven Pack',
    variants: [
      {
        id: 'cake-250g',
        label: '250g Celebration Cake Box',
        priceDelta: 0,
        note: 'Presented on gold board in bakery cake box',
      },
      {
        id: 'cake-250g-message',
        label: '250g Cake + Custom Message',
        priceDelta: 0,
        note: 'Add celebration name plaque in order notes',
      },
    ],
  },
  {
    id: 'strawberry-cake',
    name: 'Strawberry Cake',
    category: 'Cakes',
    price: 250,
    weightOrCount: '250g Cake',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Strawberry Glaze & Cream',
    shortDescription:
      'Light 250g 100% eggless vanilla sponge layered with sweet strawberry crush and fresh whipped cream, coated in a glossy ruby-red strawberry glaze with crisp chocolate curls.',
    fullDescription:
      'Our Strawberry Cake pairs airy vanilla sponge layers with fruity strawberry crush and whipped cream beneath a vibrant glossy strawberry glaze and floral white drizzle. Crafted fresh in our 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Strawberry Crush & Glaze',
      'Fresh Whipped Cream',
      'Pure Butter & Veg Shortening',
      'Fine Sugar',
      'Vanilla Essence',
    ],
    image: '/assets/aistudio/Image_November_22__2026_-_1_10PM_2638de45',
    imageAlt: 'Fresh 250g 100% eggless Strawberry Cake finished with glossy ruby-red strawberry mirror glaze, white floral drizzle, piped cream border, and chocolate curls from Jain Oven Pack',
    variants: [
      {
        id: 'cake-250g',
        label: '250g Celebration Cake Box',
        priceDelta: 0,
        note: 'Presented on gold board in bakery cake box',
      },
      {
        id: 'cake-250g-message',
        label: '250g Cake + Custom Message',
        priceDelta: 0,
        note: 'Add celebration name plaque in order notes',
      },
    ],
  },
  {
    id: 'pineapple-cake',
    name: 'Pineapple Cake',
    category: 'Cakes',
    price: 250,
    weightOrCount: '250g Cake',
    dietaryLabel: '100% Eggless · Zero Onion/Garlic',
    highlightNote: 'Classic Pineapple & Cream',
    shortDescription:
      'Fluffy 250g 100% eggless vanilla sponge layered with sweet pineapple tidbits and fresh whipped cream, finished with sunny yellow cream sides and golden pineapple glaze.',
    fullDescription:
      'Our Pineapple Cake pairs light vanilla sponge layers with juicy pineapple compote and airy whipped cream beneath sunny yellow combed cream sides, golden pineapple crown glaze, and crisp chocolate curls. Crafted fresh in our 100% eggless, pure-vegetarian kitchen with zero onion, garlic, or root vegetables.',
    ingredients: [
      'Refined Wheat Flour',
      'Pineapple Crush & Glaze',
      'Fresh Whipped Cream',
      'Pure Butter & Veg Shortening',
      'Fine Sugar',
      'Vanilla Essence',
    ],
    image: '/assets/aistudio/Image_November_22__2026_-_1_11PM_2c8daa4b',
    imageAlt: 'Fresh 250g 100% eggless Pineapple Cake with sunny yellow combed cream frosting, golden pineapple crown glaze, piped border, and chocolate curls from Jain Oven Pack',
    variants: [
      {
        id: 'cake-250g',
        label: '250g Celebration Cake Box',
        priceDelta: 0,
        note: 'Presented on gold board in bakery cake box',
      },
      {
        id: 'cake-250g-message',
        label: '250g Cake + Custom Message',
        priceDelta: 0,
        note: 'Add celebration name plaque in order notes',
      },
    ],
  },
];

export const PACK_TIERS: PackTier[] = [
  {
    id: 'tasting-4',
    name: '4-Piece Tasting Pack',
    slotCount: 4,
    price: 399,
    packagingNote: 'Compact kraft sleeve with parchment dividers',
  },
  {
    id: 'family-6',
    name: '6-Piece Family Oven Pack',
    slotCount: 6,
    price: 599,
    packagingNote: 'Signature linen-lined hearth box with ribbon',
  },
  {
    id: 'celebration-10',
    name: '10-Piece Celebration Box',
    slotCount: 10,
    price: 949,
    packagingNote: 'Two-tier presentation box + handwritten card',
  },
];

export const PACK_SLOT_ITEMS: PackSlotItem[] = [];

export const CRAFT_PILLARS = [
  {
    number: '01.',
    title: 'Dedicated Eggless Stone Hearth',
    description:
      'Every loaf, laminated pastry, and tea cake is baked in a strictly pure-vegetarian facility—zero eggs, gelatin, or animal shortenings ever cross our prep tables.',
  },
  {
    number: '02.',
    title: 'Zero Onion, Garlic & Root Veg',
    description:
      'Our savory focaccias and herb puffs rely on fresh garden rosemary, roasted cumin, green chilies, and house-pressed paneer for clean, vibrant depth.',
  },
  {
    number: '03.',
    title: 'Linen-Sealed Oven Pack Dispatch',
    description:
      'Curated boxes are packed minutes after cooling in breathable unbleached parchment so crusts stay crisp and crumbs stay tender from our oven to your table.',
  },
];

export const CUSTOMER_TESTIMONIALS = [
  {
    quote:
      'Finding flaky laminated croissants and savory puffs that strictly honor Jain dietary standards without compromising on French technique felt impossible until Jain Oven Pack.',
    name: 'Kavita Mehta',
    role: 'Architect & Studio Founder',
    city: 'Wagle Estate, Thane',
  },
  {
    quote:
      'We ordered three 10-Piece Celebration Boxes for Diwali family brunch. Every single piece arrived crisp, warm-scented, and clearly prepared for our eggless and Jain household.',
    name: 'Rohan Sanghvi',
    role: 'Product Lead',
    city: 'Naupada, Thane',
  },
  {
    quote:
      'The 36-hour sourdough boule has the deepest caramelized crust in town, and the pistachio cardamom tea cake stays moist for days without a single egg.',
    name: 'Ananya Parekh',
    role: 'Culinary Instructor',
    city: 'Kisan Nagar, Thane',
  },
];
