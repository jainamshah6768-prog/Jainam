import { useEffect, useMemo, useState } from 'react';
import { BAKERY_PRODUCTS } from './data/bakeryCatalog';
import {
  BakeryCategory,
  BakeryProduct,
  CartItem,
  OrderReceipt,
  ProductVariant,
} from './types/bakery';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductDetailModal } from './components/ProductDetailModal';
import { PackBuilder } from './components/PackBuilder';
import { CraftAndReviews } from './components/CraftAndReviews';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';

const STORAGE_KEY = 'jain_oven_pack_cart_inr_v2';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<BakeryCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<BakeryProduct | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);
  const [lastReceipt, setLastReceipt] = useState<OrderReceipt | null>(null);

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.filter(
            (item): item is CartItem =>
              Boolean(item) &&
              typeof item.cartItemId === 'string' &&
              typeof item.productId === 'string' &&
              typeof item.name === 'string' &&
              typeof item.unitPrice === 'number' &&
              typeof item.quantity === 'number' &&
              item.quantity > 0
          );
        }
      }
    } catch {
      // Ignore storage read errors
    }
    return [];
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Ignore storage write errors
    }
  }, [cartItems]);

  const handleSearchChange = (nextQuery: string) => {
    if (nextQuery.trim().length > 0 && searchQuery.trim().length === 0 && activeCategory !== 'All') {
      setActiveCategory('All');
    }
    setSearchQuery(nextQuery);
  };

  const filteredProducts = useMemo(() => {
    const terms = searchQuery.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return BAKERY_PRODUCTS.filter((product) => {
      if (activeCategory !== 'All' && product.category !== activeCategory) {
        return false;
      }
      if (terms.length > 0) {
        const haystack = [
          product.name,
          product.category,
          product.highlightNote ?? '',
          product.weightOrCount,
          product.shortDescription,
          product.fullDescription,
          product.ingredients.join(' '),
          product.price !== undefined ? String(product.price) : '',
        ]
          .join(' ')
          .toLowerCase();
        return terms.every((term) => haystack.includes(term));
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  const totalCartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const cartQuantities = useMemo(() => {
    const map: Record<string, number> = {};
    for (const item of cartItems) {
      map[item.productId] = (map[item.productId] ?? 0) + item.quantity;
    }
    return map;
  }, [cartItems]);

  const handleAddToCart = (
    product: BakeryProduct,
    variant: ProductVariant,
    quantity: number,
    note?: string
  ) => {
    if (product.price === undefined) {
      setSelectedProduct(product);
      return;
    }
    setLastReceipt(null);
    const unitPrice = product.price + variant.priceDelta;
    const matchKey = `${product.id}__${variant.id}__${note ?? ''}`;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.cartItemId === matchKey);
      if (existing) {
        return prev.map((item) =>
          item.cartItemId === matchKey
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          cartItemId: matchKey,
          productId: product.id,
          name: product.name,
          category: product.category,
          variantLabel: variant.label,
          unitPrice,
          quantity,
          image: product.image,
          note,
        },
      ];
    });

    setRecentlyAddedId(product.id);
    setTimeout(() => {
      setRecentlyAddedId((curr) => (curr === product.id ? null : curr));
    }, 1400);
  };

  const handleQuickAdd = (product: BakeryProduct) => {
    if (product.price === undefined) {
      setSelectedProduct(product);
      return;
    }
    const defaultVariant = product.variants[0];
    handleAddToCart(product, defaultVariant, 1);
  };

  const handleAddCustomPack = (customItem: CartItem) => {
    setLastReceipt(null);
    setCartItems((prev) => [...prev, customItem]);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleShopOvenPacks = () => {
    setActiveCategory('All');
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleJumpToBuilder = () => {
    const el = document.getElementById('pack-builder');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#4A152E]">
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateCategory={(category) => setActiveCategory(category)}
      />

      <main className="flex-1">
        <HeroSection
          onShopOvenPacks={handleShopOvenPacks}
          onJumpToBuilder={handleJumpToBuilder}
        />

        <ProductCatalog
          products={filteredProducts}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onQuickAdd={handleQuickAdd}
          onSelectProduct={(product) => setSelectedProduct(product)}
          recentlyAddedId={recentlyAddedId}
          cartQuantities={cartQuantities}
        />

        <PackBuilder onAddCustomPack={handleAddCustomPack} />

        <CraftAndReviews />
      </main>

      <Footer />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        lastReceipt={lastReceipt}
        onOrderConfirmed={(receipt) => setLastReceipt(receipt)}
        onDismissReceipt={() => setLastReceipt(null)}
      />
    </div>
  );
}
