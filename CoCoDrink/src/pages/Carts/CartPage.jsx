import { useCart } from "@/context/CartContext";
import Layout from "@/layouts/Layout";
import React, { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { APP_BG_COLOR } from "@/constants/app";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import TotalValueComponent from "@/pages/Carts/components/TotalValueComponent";
function CartPage(){
      const navigator=useNavigate();
      const{cartItems,handleAdd,handleReduce,removeFromCart,totalItem,totalCost,clearCart}=useCart();
      useEffect(()=>{
            if (cartItems.length==0){
                  navigator("/");
            }
      },[cartItems]);
      const handleCheckout=()=>{
            clearCart();
            
            navigator("/");
      }
      return <Layout title={"Cart"}>
            <div className="w-full flex flex-row  ">
            <div className="w-2/3 mr-2">
                        <h1 className="font-semibold text-4xl border-b-2 pb-4 ">ItemList</h1>
                        {
                              cartItems.map((item)=>(
                                    <div  key={item.id} className={`${APP_BG_COLOR}  flex flex-col w-full items-start justify-center p-4 border-b-2`}>
                                          <div className="flex flex-row w-full items-start justify-between">
                                                <div className="w-full flex flex-row items-start">
                                                      <div className="w-24 h-24 flex items-center bg-white-600 justify-center rounded-md">
                                                            <img src={item.image} className="w-[80%]"/>
                                                      </div>
                                                      <div className="ml-2 w-full h-[80px] max-h-full flex flex-col items-start justify-between">
                                                            <span className="text-black text-2xl font-semibold">{item.name}</span>
                                                            <div className="flex flex-row text-center rounded-md overflow-hidden">
                                                                  <span className="p-2 text-lg font-semibold text-white bg-red-600 cursor-pointer">
                                                                  <MinusIcon className="w-4 h-4" onClick={()=>handleReduce(item)}/>
                                                                  </span>
                                                                  <span className="px-2 text-lg font-semibold text-black">{item.count}</span>
                                                                  <span className="p-2 text-lg font-semibold text-white bg-green-600 cursor-pointer">
                                                                        <PlusIcon className="w-4 h-4" onClick={()=>handleAdd(item)}/>
                                                                  </span>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="w-full h-[80px] max-h-full px2 flex flex-col justify-between items-end">
                                                      <span className="text-blue-600 font-semibold text-xl">{item.price} $</span>
                                                      <TrashIcon className="w-8 h-8 text-red-500 cursor-pointer" onClick={()=>removeFromCart(item.id)}/>
                                                </div>
                                          </div>
                                    </div>
                              ))
                        }
                  </div>  

                  <div className="w-1/3 sticky h-full top-20">
                  <h1 className="font-bold text-2xl mb-6 px-4 ">Summary</h1>
                        <TotalValueComponent TotalName={"Total Item"} TotalValue={totalItem}/>
                        <TotalValueComponent TotalName={"Total Item Cost"} TotalValue={totalCost}/>
                        <TotalValueComponent TotalName={"Tax Cost"} TotalValue={0}/>
                        <TotalValueComponent TotalName={"Total Cost"} TotalValue={totalCost} last={true}/>
                        <div className="w-full flex mt-4">
                              <span className="w-full p-4 text-center bg-gray-500 text-white rounded-full font-semibold text-xl cursor-pointer" onClick={()=>handleCheckout()}>CheckOut</span>
                        </div>
                  </div>
            </div>
      </Layout>
}
export default CartPage;


