
import './App.css'
import Navbar from './layouts/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from '@/pages/Home/HomePage'
import DrinkPage from '@/pages/Drinks/DrinkPage'
import IceCreamPage from '@/pages/IceCream/IceCreamPage'
import CartPage from '@/pages/Carts/CartPage'
import { CartProvider } from './context/CartContext'
import { Toaster } from 'react-hot-toast'

function App() {


  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Drinks' element={<DrinkPage/>}/>
          <Route path='/IceCream' element={<IceCreamPage/>}/>
          <Route path='/Carts' element={<CartPage/>}/>
        </Routes>
        </CartProvider>
        <Toaster />
      </BrowserRouter>
    </>
  )
}

export default App
