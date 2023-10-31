import {BrowserRouter,Route,Routes} from 'react-router-dom' 
import RegistrationPage from '../Routing/RegistrationPage'
import LoginScreen from '../Routing/LoginScreen'
import AboutScreen from '../Routing/AboutScreen'
import BlogScreen from '../Routing/BlogScreen'
import HomeScreen from '../Routing/HomeScreen'
import Contact from '../Routing/Contact'
import ProductDetails from '../Routing/ProductDetails'
import { createContext, useContext, useState } from 'react'
import { loginInfo } from '../App'

 export const CartContext=createContext()
const NavigationStack = ()=>{
  const login=useContext(loginInfo)
  const[cart,setCart]=useState([])
  const addItemsToCart = (item)=>{
    // const cartproducts=cart
    setCart([...cart,item])
  }
    return(
      
      <BrowserRouter>
      {
        login.login ?
        <CartContext.Provider value={{cart,addItemsToCart}}>
        
        
        <Routes>
      <Route path='/' element={<HomeScreen/>}></Route>
        <Route path='/about' element={<AboutScreen/>}></Route>
        <Route path='/blog' element={<BlogScreen/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>
        </CartContext.Provider>
        :
        <Routes>
        {/* <Route path='/register' element={<RegistrationPage/>}></Route> */}
        <Route path='/' element={<LoginScreen/>}></Route>
      </Routes>
}
      </BrowserRouter>
      
    )
}
export default NavigationStack;