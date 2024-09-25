
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

function App() {


  return (
    <>
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
           <Route path='/pendingorders' element= {<AdminStatusChange/>} /> 

            
  
           
      
      </Routes>
      </BrowserRouter>


      </CartProvider> 

     
    </>
  )
}

export default App
