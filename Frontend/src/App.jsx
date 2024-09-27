
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignupPage } from './Pages/SignupPage'
import { Home } from './Pages/Home'
import { LoginPage } from './Pages/LoginPage'
import { DashBoard } from './Pages/DashBoard'
import { RestroMenu } from './Pages/RestroMenu'
import { CartProvider } from './Components/AddtoCard'
import { CartPage } from './Pages/CartPage'
import { RestoRegistration } from './Pages/RestroRegistration'
import { RestroLogin } from './Pages/RestoLogin'
import { AddMenu } from './Pages/AddMenu'
import { AdminSignup } from './Pages/AdminSignup'
import { AdminLogin } from './Pages/AdminLogin'
import { AdminStatusChange } from './Pages/AdminStatusChange'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {  OrderHistroy } from './Pages/OrderHistory'
// import { PendingOrderCard } from './Components/PendingOrderCard'
const stripePromise = loadStripe("pk_test_51Q3A8907tIc5oTXBtgselQRXk67WbbjMMM77V9AdHDqGhuAN7UpEZin4JZoZDDINt24NszTzqhBDidfP3iTBcaIM00f74WmCTg");

function App() {


  return (
    <>
      <Elements stripe={stripePromise}>
         <CartProvider>
      <BrowserRouter>
      <Routes>

           <Route path='/' element={<Home/> } />  
           <Route path='/signup' element={<SignupPage/>} />  
           <Route path='/login' element={<LoginPage/>} />   
           <Route path='/dashboard' element={<DashBoard/> } />   

  
            
           <Route path='/dashboard/:id' element={<RestroMenu/> } />  

            <Route path='/cart/:name/:id' element={<CartPage/>} />
          

           <Route path='/restroregistration' element={<RestoRegistration/>}/> 
           <Route path='/restrologin' element={<RestroLogin/>}/> 
           <Route path='/adddish' element={<AddMenu/>}/>  


           <Route path='/adminsignup' element= {<AdminSignup/>} />   
           <Route path='/adminlogin' element= {<AdminLogin/>} />  
           {/* <Route path='/pendingorders' element= {<AdminStatusChange/>} />  */}

           <Route path='orders' element={<OrderHistroy/>} />  


      
            
  
           
      
      </Routes>
      </BrowserRouter>


      </CartProvider> 
      </Elements> 

     
    </>
  )
}

export default App
