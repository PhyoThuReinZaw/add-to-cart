import { createContext, useContext, useEffect, useState } from "react"

import toast from "react-hot-toast";

const CartContext=createContext();


const CartProvider=({children})=>{
      const [cartItems,setCartItems]=useState([]);
      const [totalItem,setTotalItem]=useState(0);
      const [totalCost,setTotalCost]=useState(0);
      const addToCart=(newItem)=>{

            const initialItems=newItem;
            const existingItems=cartItems.find(item=>item.id===newItem.id);
            if (existingItems){
                  const updatedItems=cartItems.map(item=>item.id===newItem.id?{...item,count:item.count+newItem.count,price:(item.count+1)*initialItems.price}:item);
                  setCartItems(updatedItems);
            }else{
                  setCartItems([...cartItems,newItem]);     
            }
            
      };
      const getTotalItems=()=>{
            return cartItems.reduce((total,cartItems)=>total+cartItems.count,0);
      }
      const getTotalCost=()=>{
            return cartItems.reduce((total,cartItems)=>total+cartItems.price,0);
      }

      //updated CartItem
      const updatedCartItem=(changedItem)=>{
            const updatedItems=cartItems.map((item)=>item.id==changedItem.id ?{
                  ...item,count:changedItem.count,price:changedItem.price
            }:item);
            setCartItems(updatedItems);
      }

      //remove from Cart
      const removeFromCart=(ItemId)=>{
            setCartItems((prevCart)=>prevCart.filter((item)=>item.id !== ItemId));
      }

      //handle reduce
      const handleReduce=(cartItem)=>{
            const initial = cartItem;
            if(cartItem.count == 1){
                  removeFromCart(cartItem.id);
            }else{
                  const newCount=cartItem.count-1;
                  const newPrice=initial.price-initial.price/initial.count;

                  updatedCartItem({...cartItem,count:newCount,price:newPrice})
            }
      }

      //handle add
      const handleAdd=(cartItem)=>{
            const initial=cartItem;
            const newCount=cartItem.count+1;
            const newPrice=initial.price + initial.price/initial.count;
            updatedCartItem({...cartItem,count:newCount,price:newPrice})
      }

      //clear all cart data
      const clearCart=()=>{
            toast.success('Order confirmed.Thanks!');
            setCartItems([]);
            
      }

      useEffect(()=>{
            const newTotalItems=getTotalItems();
            setTotalItem(newTotalItems);

            const newTotalCost=getTotalCost();
            setTotalCost(newTotalCost);
      },[cartItems]);
      return <CartContext.Provider value={{
            addToCart,
            cartItems,
            totalItem,
            totalCost,
            handleReduce,
            handleAdd,
      removeFromCart,
      clearCart}}>{children}</CartContext.Provider>;
};
const useCart=()=>{
      return useContext(CartContext);
};
export {CartProvider,useCart};