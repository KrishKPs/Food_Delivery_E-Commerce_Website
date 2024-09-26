import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();    

export function CartProvider ({children}) {

    const [cart , setcart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    }); 

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    
    const addtocart = (item) => {
      setcart((prevCart) => {
          const exist = prevCart.find((cartItem) => cartItem._id === item._id);         

          if (exist) {
              return prevCart.map(cartItem => cartItem._id === item._id 
                  ? { ...cartItem, quantity: cartItem.quantity + 1 } 
                  : cartItem
              );    
          } else {
              return [...prevCart, { ...item, quantity: 1 }];
          }
      });
    }

    const removefromcart = (item) => {
      setcart((prevCart) => {
          const exist = prevCart.find((cartItem) => cartItem._id === item._id);
  
          if (exist && exist.quantity === 1) {
              // If the item has only one left, remove it from the cart
              return prevCart.filter(cartItem => cartItem._id !== item._id);
          } else {
              // Otherwise, decrease its quantity
              return prevCart.map(cartItem => cartItem._id === item._id
                  ? { ...cartItem, quantity: cartItem.quantity - 1 }
                  : cartItem
              );
          }
      });
    };
    const removeitem = (item) => {

      setcart((prevCart) => {
        
        return prevCart.filter((cartItem) => cartItem._id !== item._id); 
      });
    };
    const clearCart = () => setcart([]);

    return (
        <CartContext.Provider value={{ cart, addtocart, clearCart, removefromcart , removeitem }}>
            {children} 
        </CartContext.Provider>  
    );
}

export const useCart = () => useContext(CartContext);   



// setcount ((prev) => prev + 1);   
