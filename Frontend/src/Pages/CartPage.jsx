import axios from "axios";
import { useCart } from "../Components/AddtoCard";
import { CartCard } from "../Components/Cart";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

// Load Stripe with your publishable key
const stripePromise = loadStripe("pk_test_51Q3A8907tIc5oTXBtgselQRXk67WbbjMMM77V9AdHDqGhuAN7UpEZin4JZoZDDINt24NszTzqhBDidfP3iTBcaIM00f74WmCTg");

export function CartPage() {
  const restroid = useParams();
  const { cart, removeitem, clearCart } = useCart();

  const stripe = useStripe(); // Initialize Stripe
  const elements = useElements(); // Initialize Elements to get CardElement

  const [show, setShow] = useState(false);
  const [clientKey, setClientKey] = useState('');
  const [cardError, setCardError] = useState(''); // State to handle card errors
  const [isProcessing, setIsProcessing] = useState(false); // State to handle form processing

  useEffect(() => {
    const createPaymentIntent = async () => {
      const totalPrice = getTotalPrice();

      try {
        const response = await axios.post(
          "http://localhost:3062/foodapp/payment",
          { amount: totalPrice * 100 },
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        setClientKey(response.data.client_secret);
      } catch (error) {
        console.error("Error creating payment intent:", error);
      }
    };

    createPaymentIntent();
  }, [cart]);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleOrder = async () => {
    if (!clientKey || !stripe || !elements) {
      alert("Payment setup incomplete. Try again later.");
      return;
    }

    // Start processing the payment
    setIsProcessing(true);
    const cardElement = elements.getElement(CardElement); // Correctly fetch the CardElement

    if (!cardElement) {
      setCardError("Card information is not available.");
      setIsProcessing(false);
      return;
    }

    try {
      // Confirm the payment using the client secret
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientKey, {
        payment_method: {
          card: cardElement,
        },
      });

      if (error) {
        setCardError(error.message);
        setIsProcessing(false);
        return;
      }

      if (paymentIntent.status === "succeeded") {
        // Now that the payment is successful, place the order in your system
        const sendorder = cart.map((item) => ({
          fooditem: item.name,
          quantity: item.quantity,
        }));

        const response = await axios.post(
          `http://localhost:3062/foodapp/order/restaurant/${restroid.id}`,
          {
            restaurant: restroid.name,
            order: sendorder,
            price: getTotalPrice(),
            status: "Pending",
          },
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            }
          }
        );
        localStorage.setItem("cart", JSON.stringify([]));
        alert("Order Placed Successfully!");
        clearCart();
        setIsProcessing(false);
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      setIsProcessing(false);
    }
  };

  return (

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Cart Summary</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Your Items</h2>
            <div className="space-y-4">
              {cart.length > 0 ? (
                cart.map((item, index) => (
                  <CartCard key={index} data={item} removeitem={removeitem} />
                ))
              ) : (
                <p className="text-gray-600">Your cart is empty.</p>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-600">Subtotal</p>
                <p className="text-gray-800 font-semibold">${getTotalPrice()}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">Delivery Fee</p>
                <p className="text-gray-800 font-semibold">$1.49</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">Taxes & Other Fees</p>
                <p className="text-gray-800 font-semibold">$20.82</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between items-center text-lg font-bold">
                <p>Total</p>
                <p>${(parseFloat(getTotalPrice()) + 1.49 + 20.82).toFixed(2)}</p>
              </div>

              {/* Payment Card Form */}
              <div className="mt-4">
                <CardElement className="p-4 border border-gray-300 rounded-md" />
                {cardError && <p className="text-red-500 mt-2">{cardError}</p>}
              </div>

              <button
                onClick={handleOrder}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold transition-all hover:bg-gray-800 mt-4"
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : <><FaShoppingCart className="inline mr-2" /> Place Order</>}
              </button>
            </div>
          </div>
        </div>

        {show ? (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-bounce">
            <h1 className="text-lg font-semibold">Item Added to Cart</h1>
          </div>
        ) : null}
      </div>

  );
}
