import axios from "axios";
import { Input } from "../Components/InputBox";
import { useState } from "react";


export function AddMenu() {


   const [data , setData] = useState({
        name : '',
        price : 0,
        description : ''
    })   


   async function addDish () {

    console.log(data);   

      const responce = await axios.post('https://backend-a07sy6pd1-krish-patels-projects-3e6b9326.vercel.app/foodapp/addmenu', data, 
      {
        headers : {
          Authorization : `${localStorage.getItem('token')}`
        }
      })
      
      .then((responce) => {
        console.log(responce.data); 
        alert('Dish Added Successfully');    

      })     

      .catch((err) => { console.log(err)
        alert('Dish Not Added');     } ) ;   
      
    } 



    return (

        <div>

            <Input type='text' placeholder='Enter the name of the dish'  onChange={ (e) => setData({...data , name: e.target.value})}/>   
            <Input type='number' placeholder='Enter the price of the dish'  onChange={ (e) => setData({...data , price: Number(e.target.value)})}/>  
            <Input type='text' placeholder='Enter the description of the dish'  onChange={ (e) => setData({...data , description: e.target.value})}  />    

            <button onClick={addDish}> Add Dish </button>  

            
        </div>
    ); 
}    