import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  }

  function removeFromCart(item) {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === itemId);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[existingItemIndex].quantity === 1) {
        updatedCartItems.splice(existingItemIndex, 1);
      } else {
        updatedCartItems[existingItemIndex].quantity -= 1;
      }
      setCartItems(updatedCartItems);
    }
  }

  const getCartTotalQuantity = cartItems.reduce((acc, { quantity }) => {
    return acc + quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export default function useCart() {
  return useContext(CartContext);
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
