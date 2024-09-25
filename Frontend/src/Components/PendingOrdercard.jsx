


export function PendingOrderCard ({username , orders , ChangeStatus}) {


       return (

        <>

        <h1> {username}</h1>     


        {orders.map((order) => ( <OrderCard key={order._id} data={order}  ChangeStatus={ChangeStatus} />))}   




        
        
        </>
       );




}

function OrderCard ({data , ChangeStatus}) {     

    const handleStatusChange = (event) => {
        const newStatus = event.target.value;
        ChangeStatus( data._id , newStatus);
      };


    return (

        <>

        <h1> {data.restaurant}</h1> 
        <h1> {data.price}</h1>

  

      <select value={data.status} onChange={handleStatusChange}>  
      
        <option value="Pending">Pending</option> 
        <option value="Completed">Completed</option>     
        <option value="Cancelled">Cancelled</option>    
              
      </select>


        {data.items.map ((item , index )=> ( <OrderItem key={index} data={item} />))}   
        
        
        </>
    )
 }

 function OrderItem ({data}) {

    return (

        <>

        <h1> {data.foodItem}</h1> 
        <h1> {data.quantity}</h1> 
        
        
        </>
    )
 }   
