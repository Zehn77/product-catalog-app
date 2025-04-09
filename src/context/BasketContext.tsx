"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface BasketContextType {
  basket: Product[];
  addToBasket: (product: Product) => void;
  removeFromBasket: (productId: number) => void; // New function to remove items
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const useBasket = (): BasketContextType => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};

interface BasketProviderProps {
  children: ReactNode;
}

export const BasketProvider: React.FC<BasketProviderProps> = ({ children }) => {
  const [basket, setBasket] = useState<Product[]>([]);

  // Load from localStorage once
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("basket");
      if (stored) {
        setBasket(JSON.parse(stored));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("basket", JSON.stringify(basket));
    }
  }, [basket]);

  const addToBasket = (product: Product) => {
    setBasket((prevBasket) => {
      const existing = prevBasket.find((item) => item.id === product.id);

      if (existing) {
        return prevBasket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevBasket, product];
      }
    });
  };

  const removeFromBasket = (productId: number) => {
    setBasket((prevBasket) => {
      const updatedBasket = prevBasket.filter((item) => item.id !== productId);
      return updatedBasket;
    });
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
