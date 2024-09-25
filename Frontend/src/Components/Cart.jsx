

export function CartCard ({data , clearcart}) {  

    return (
        <>
        <h1> {data.name}</h1>
        <h3> {data.price}</h3>
        <p> {data.quantity}</p> 
        <p> {data.price  * data.quantity}</p>       

    
        
        </>
    );      
} 