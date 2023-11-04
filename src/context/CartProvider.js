import { useState } from "react";
import { CartContext } from "./CartContext";
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      console.log(updatedCart);
      updatedCart[existingItemIndex].amount += 1;
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...item, amount: 1 }];
      console.log(updatedCart);
      setCart(updatedCart);
    }
  };

  const deleteFromCart = (id) => {
    const updatedItems = cart.filter((item) => item.id !== id);
    setCart(updatedItems);
  };

  const increaseAmount = (prod) => {
    const updatedCart = cart.map((item) => {
      if (item.id === prod.id) {
        item.amount += 1;
      }
      return item;
    });

    setCart(updatedCart);
  };

  const decreaseAmount = (prod) => {
    const updatedCart = cart.map((item) => {
      if (item.id === prod.id && item.amount > 0) {
        item.amount -= 1;
      }
      return item;
    });

    setCart(updatedCart);
  };

  const totalPurchase = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.amount;
    });
    return totalPrice;
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        deleteFromCart,
        increaseAmount,
        decreaseAmount,
        totalPurchase,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
