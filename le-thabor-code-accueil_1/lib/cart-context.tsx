"use client";

import { createContext, useContext, useState, useCallback } from "react";

type CartContextType = {
  count: number;
  bump: boolean;
  addItem: (name: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

// Fournit un compteur de panier global + un flag "bump" que le badge
// utilise pour se faire rebondir à chaque ajout (voir components/site/Navbar.tsx).
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const [bump, setBump] = useState(false);

  const addItem = useCallback((_name: string) => {
    setCount((c) => c + 1);
    setBump(true);
    setTimeout(() => setBump(false), 300);
  }, []);

  return (
    <CartContext.Provider value={{ count, bump, addItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart doit être utilisé dans un <CartProvider>");
  return ctx;
}
