import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { MenuCard } from "../Components/Menucard";
import {  useCart } from "../Components/AddtoCard";    

export function RestroMenu() { 

    const restaurant = useParams(); 
    const [menu , setMenu] = useState([]);  
    const [name , setName] = useState(''); 
    const [show , setshow] = useState(false);    

    const navigate = useNavigate();    

    const {addtocart} = useCart();   
    const {cart} = useCart();    
    const {clearCart} = useCart();   
   


 const menuitems = async () => {

    const responce = await axios.get(`http://localhost:3062/foodapp/menu/restaurant/${restaurant.id}` , {
        headers : {
            Authorization : `${localStorage.getItem('token')}`
        } 
    })
   
    .then((responce) => {
      
        setMenu(responce.data.restaurant) 
        console.log(responce.data.restaurant); 
        setName(responce.data.restaurant[0].restroname);       
        console.log(responce.data.restaurant[0].restroname);    
    })
    .catch((err) => { console.log(err) } ) ; 
 }

 useEffect(()=>{

    menuitems();     
 },[])


    return (

        <>


   

<div>
            <h1>{name} Menu</h1>

            
            {menu.map((menuItem, index) => (
                <MenuCard key={index} data={menuItem} addtocart={addtocart}  setshow={setshow} />  
            ))}

            <div>
               <button onClick={ () => {navigate(`/cart/${encodeURIComponent(name)}/${restaurant.id}`)}}> Place Order </button>    
            </div>
        </div>


        {
  show ? (
    <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-bounce">
      <h1 className="text-lg font-semibold">Item Added to Cart</h1>
    </div>
  ) : null
}

        
            
        
        
        </>
    )
 }