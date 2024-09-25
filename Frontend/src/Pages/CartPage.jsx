import axios from "axios";
import { useCart } from "../Components/AddtoCard";
import { CartCard } from "../Components/Cart";
import { useParams } from "react-router-dom";

export function CartPage() {
    const restroid = useParams();   
    const { cart, clearCart } = useCart(); 

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    
    
    
    console.log("Cart Data:", cart);


    const handleOrder = async () => {
        // Construct the order array directly using map
        const sendorder = cart.map(item => ({
            fooditem: item.name,
            quantity: item.quantity
        }));
        
        console.log("Send Order Array:", sendorder); // Debugging
    
        try {
            const response = await axios.post(`http://localhost:3062/foodapp/order/restaurant/${restroid.id}`, {
                restaurant: restroid.name,
                order: sendorder,  // Send as array
                price: getTotalPrice(),  
                status: 'Pending'
            }, {
                headers: {
                    Authorization: `${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'  // Ensure correct content type
                }
            });
            console.log(response.data);  // Debugging response
            localStorage.setItem('cart', JSON.stringify([]));  // Clear cart   
            alert("Order Placed Successfully!");  // Alert user    
        } catch (error) {
            console.error(error);  // Handle the error here
        }
    };
    
    return (
        <>
            {cart.map((item, index) => (
                <CartCard key={index} data={item} clearCart={clearCart} />
            ))}

            <h1>Total: {getTotalPrice()}</h1>

            <button onClick={clearCart}>Clear Cart</button>
            <br/>
            <button onClick={handleOrder}>Place Order</button>  
        </>
    );
}
