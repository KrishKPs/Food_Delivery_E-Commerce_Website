
import { useState } from "react";     
import { Input } from "../Components/InputBox";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";  
     

export function RestoRegistration () {

    const [user, setUser] = useState({ 
        username: "",
        adress: "",
        number: ""   
    });        

    const navigate = useNavigate();  

    async function handleSignup() {  



        const responce = await axios.post('https://backend-a07sy6pd1-krish-patels-projects-3e6b9326.vercel.app/foodapp/restaurantregister', user)

        .then((responce) => {

            console.log(responce.data)
            const data = responce.data; 
       
                alert("Restro Registration Success")
                navigate('/dashboard')   
                localStorage.setItem('token', data.token)      
                navigate('/addmenu')      
        

        })

        .catch((err) => { console.log(err)
            const data = err.response.data;  
        alert(data) }    );  
        
        

      }

    

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-10">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-bold text-center mb-1 text-black">Register as Restaurant</h2>
                <p className="text-center text-gray-500 mb-6">Enter your details below to Register your Restaurant</p>

                {/* Username Input */}
                <div className="mb-4 w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name of Restaurant</label>
                    <Input
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900" 
                        onChange={(e)=> setUser({ ...user, username: e.target.value })} 
                    />
                </div>

                {/* Email Input */}
                <div className="mb-4 w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Adress</label>
                    <Input
                        type="text" 
                        placeholder="9003 S San Pedro ST" 
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900" 
                        onChange={(e)=> setUser({ ...user, adress: e.target.value })} 
                    />
                </div>

                {/* Password Input with Eye Icon */}
                <div className="relative mb-6 w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <Input 
                        type={"text"}  
                        placeholder="Phone Number" 
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900" 
                        onChange={(e)=> setUser({ ...user, number: e.target.value })} 
                    />
                   
                </div>

                {/* Sign Up Button */}
                <button onClick={handleSignup} className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition duration-300">
                    Sign Up
                </button>

                {/* Terms and Conditions */}
                <p className="text-center text-gray-500 text-sm mt-4">
                    By clicking continue, you agree to our 
                    <a href="#" className="text-black font-medium"> Terms of Service </a> 
                    and 
                    <a href="#" className="text-black font-medium"> Privacy Policy</a>.
                </p>

                <p className="text-black text-center mt-6">
                   Already have an account?   
                   <Link to="/restrologin" className="text-black font-medium"> Login</Link>     
                </p>
            </div>
        </div>
    );
}
