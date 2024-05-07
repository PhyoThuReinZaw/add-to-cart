import { PRIMARY_COLOR } from "@/constants/app";
import { useCart } from "@/context/CartContext";
import React from "react";

function ListPage({list}){
      const {addToCart,cartItems}=useCart();
      console.log(cartItems);
      return(
            <div className="grid grid-cols-5  gap-6 mt-10 ">
                  {
                        list.map(item=>(
                              <div key={item.id} className={`p-4 border-2 flex flex-col items-center rounded-md bg-white`}>
                                    <img src={item.image} className="w-[80%]"/>
                                    <div className="w-full flex sm:flex-wrap items-center justify-between p-2">
                                          <span className="text-sm w-4/6 text-gray-400 font-semibold">{item.name}</span>
                                          <span className="text-sm w-2/6 text-blue-400 font-semibold">{item.price} $</span>
                                          
                                    </div>
                                    <span className={`flex w-full mt-4 items-center justify-center border-2 py-2 rounded-md font-semibold text-md ${PRIMARY_COLOR} text-white`} onClick={()=>addToCart(item)}>Add to Cart</span>
                              </div>
                        ))
                  }
                  </div>
      );
}
export default ListPage;