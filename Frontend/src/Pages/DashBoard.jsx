import { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import axios from 'axios';  
import { RestroCard } from "../Components/RestroCard";

export function DashBoard () {

    const [restro , setRestro] = useState([]);  
    const [search , setSearch] = useState('');    



    const handlesearch = async  () => {

        await   axios.post('https://backend-l7u8fzvxj-krish-patels-projects-3e6b9326.vercel.app/foodapp/restaurantcity' , {city : search}, {
         headers : {
           Authorization : `${localStorage.getItem('token')}` 
         }
        })
        .then ((responce) => { 
         console.log(responce.data); 
         setRestro(responce.data.restaurants);   
        })
       }

    useEffect(()=>{
        handlesearch();  
    } , [])




     return (


        <>
        

            <Navbar  setsearch={setSearch} handlesearch={handlesearch}/> 


<div className="grid grid-cols-4">
    
{restro.map( (restro , index) => (<RestroCard key={index} data={restro} />))}  

</div>
           
         


    
        
        
        </>
     );
}