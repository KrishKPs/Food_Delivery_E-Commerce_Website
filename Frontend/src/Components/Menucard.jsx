
export function MenuCard ({data , addtocart , setshow}) {  

    return (
        <>
        <h1> {data.name}</h1>
        <h3> {data.price}</h3>
        <p> {data.description}</p>   

        <button onClick={ () => {addtocart(data) 


             
                   setshow(true) 
                   setTimeout(() => {
                    setshow(false)   
                   } , 2000)    
                   }}> Add to Cart</button>    
        
        </>
    );


}