import { Products } from '@/services/manageData_api';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, createContext, useState } from 'react';
import { toast } from 'react-toastify';

type CartItems = Products;

type CartContextProps = {
  children: ReactNode;
};

export type CartContextData = {
  products: CartItems;
  productsLength: number;
  addItem: (params: Products[0]) => void;
  removeItem: (itemId: string)=>void;
  finalize: (name: string, date: string) => void;
  clean: () => void;
};

export const CartContext = createContext<CartContextData>(
  {} as CartContextData,
);

export const CartProvider = ({ children }: CartContextProps) => {
  const [cartLength, setInternalCartLength] = useState(0);
  const [cart, setInternalCart] = useState<CartItems>([]);
  const router = useRouter();

  useEffect(() => {
    setInternalCartLength(Number(localStorage.getItem('itemsLength')) || 0);
    setInternalCart(
      (JSON.parse(
        localStorage.getItem('cart') || (null as any),
      ) as CartItems) || [],
    );
  }, []);

  useEffect(() => {
    setInternalCartLength(cart.length);
  }, [cart]);

  const setCart = (cart: CartItems) => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setInternalCart(cart);
  };

  const addItem = async (item: Products[0]) => {
    const itemAlreadyExists = cart.find((existingItem) => {
      if (existingItem._id === item._id) {
        toast.error(`${item._name} já existe no carrinho!`);
        return true;
      }
    });
    if (itemAlreadyExists) return;
    setCart([...cart, item]);
    toast.success(`${item._name} adicionado ao carrinho com sucesso!`);
  };

  const removeItem = async (itemId: string) => {
    let newItems = [] as CartItems;
    cart.forEach((item)=>{
        if(item._id!=itemId)
            newItems.push(item);
    });
    setCart(newItems);
  };

  const clean = () => {
    setCart([]);
  };

  const finalize = async (name: string, date: string) => {
    const phoneNumber = "5515996746250";
    const dateFormated = `${date.substring(8,10)}/${date.substring(5,7)}/${date.substring(0,4)}`
    const items = cart.map(item=>`- ${item._name}`).join("%0A")
    const text = `Olá, me chamo ${name} e gostaria de alugar seus produtos para o dia ${dateFormated}.%0AOs itens são os seguintes:%0A${items}`
    window.open(`https://wa.me/${phoneNumber}/?text=${text}`, "_blank");
  };

  return (
    <CartContext.Provider
      value={{
        products: cart,
        productsLength: cartLength,
        finalize,
        addItem,
        removeItem,
        clean,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
