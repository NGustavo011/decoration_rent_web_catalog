import { CartContext } from '@/contexts/cart/CartContext';
import { useContext } from 'react';

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    console.error('No Cart Context found');
  }
  return context;
}
export default useCart;
