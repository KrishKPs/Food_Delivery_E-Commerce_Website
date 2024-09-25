import React, { createContext, useContext, useEffect, useState } from 'react';


const CartContext = createContext();    

export function CartProvider ({children}) {

    const [cart , setcart] = useState( () => {

        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    }); 


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    
    const addtocart = (item) => {


      const exist = cart.find( (cartItem) => cartItem._id === item._id);         

      if(exist) {

        setcart(cart.map( cartItem => cartItem._id === item._id ? {...cartItem , quantity : cartItem.quantity + 1  } : cartItem));    
      }

      else {

        setcart([...cart , {...item , quantity : 1 }]);     
      }

    }

    const clearCart = () => setcart([]);



    return (

        <CartContext.Provider value={{cart , addtocart , clearCart}}>
            {children} 
            </CartContext.Provider>  
    );



}

export const useCart = () => useContext(CartContext);   

    