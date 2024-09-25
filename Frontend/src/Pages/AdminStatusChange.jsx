import axios from "axios";
import { useEffect, useState } from "react";
import {  PendingOrderCard } from "../Components/PendingOrdercard";


export function AdminStatusChange () {

    const [data , setdata] = useState([]);   


    const pendingorders = async () => {


        const responce = await axios.get ('http://localhost:3062/foodapp/admin/pendingorders' , {
            headers : {
                Authorization : `${localStorage.getItem('token')}`
            }    
        })
        .then((responce) => {
        
            setdata(responce.data.order); 
            
            console.log(responce.data.order);    
            


            
            
        })   
        .catch((err) => {
            console.log(err);    

        })      ; 
    }


    useEffect (() => {

        pendingorders();    


    }, []); 

    const changeStatus = async  (orderid , newstatus) => {


        const responce = await axios.post('http://localhost:3062/foodapp/admin/updateorder' , {
            id : orderid, 
            status : newstatus 
        }, 
        {
            headers : {
                Authorization : `${localStorage.getItem('token')}`
            }
        })   

        .then((responce) => {
            console.log(responce.data); 
            alert('Status Changed Successfully');   
            
            pendingorders();     
        })   
        .catch((err) => {
            console.log(err); 
            alert('Status Not Changed');    
        }) ;    


    }

    console.log(data);   


    return (
        <>


          <h1>Admin Status Change</h1>

          

          {data.map(( userOrder , index  )=>( <PendingOrderCard key={index} username={userOrder.username} orders={userOrder.orders} ChangeStatus={changeStatus} />))}       


         
        </>
      ); 


}