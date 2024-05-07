import { PRIMARY_COLOR, SECONDARY_COLOR } from '@/constants/app';
import LOGO from '@/assets/logo/logo.png'
import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { useCart } from '@/context/CartContext';
import NavCartItemList from '@/components/NavCartItemList';
function Navbar(){
      const {totalItem}=useCart();
      const navigator=useNavigate();
      const handleLogo=()=>{
            navigator("/");
      }
      return(
            <div className={`w-full ${PRIMARY_COLOR} ${SECONDARY_COLOR} px-40 py-4 flex justify-between items-center`}>
                  <div className='flex items-center'>
                        <img src={LOGO} className='mr-2 w-10 h-10 rounded-[50%]' onClick={()=>handleLogo()}/>
                  </div>
                  <div className='flex items-center font-semibold text-lg'>
                        <Link to="/" className='mr-4 font-serif'>Home</Link>
                        <Link to="/Drinks" className='mr-4 font-serif'>Drink</Link>
                        <Link to="/IceCream" className='mr-4 font-serif'>IceCream</Link>
                        <div>
                              <Menu as={"div"} className="relative inline-block text-left ">
                                    <Menu.Button className="relative w-full justify-center">
                                          <span className='absolute -top-3 -left-2 text-sm font-normal text-white bg-blue-600 px-1 rounded-md'>{totalItem}</span>
                                          Cart</Menu.Button>

                                    {/* Use the `Transition` component. */}
                                    <Transition as={Fragment}
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                    >
                                    <Menu.Items className="absolute -right-4 mt-2 w-[400px] rounded-md bg-white shadow-lg overflow-hidden z-20"><NavCartItemList /></Menu.Items>
                                    </Transition>
                              </Menu>
                        </div>
                  </div>
            </div>
      );
}
export default Navbar;