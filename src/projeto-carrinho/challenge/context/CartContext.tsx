import React, { createContext, useState, useContext, ReactNode } from "react";

// 1. Definição do Tipo de Item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// 2. Definição do Tipo do Contexto
interface CartContextType {
  items: CartItem[];
  totalPrice: number;
  addItem: (item: { id: number; name: string; price: number }) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// 3. O Provider (Gerencia o Estado)
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (newItem: { id: number; name: string; price: number }) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === newItem.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
  };

  const removeItem = (id: number) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevItems.filter(item => item.id !== id);
      }
    });
  };

  const clearCart = () => setItems([]);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ items, totalPrice, addItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 4. O Hook de Consumo
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};
