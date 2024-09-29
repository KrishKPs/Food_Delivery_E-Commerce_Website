
import { useState } from "react";    
import { Input } from "../Components/InputBox";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; 
     

export function RestroLogin () {


    const navigate = useNavigate(); 

    const [user, setUser] = useState({ 
        username: "",
        password: ""    
    });   
    
    async function handleLogin() {  



        const responce = await axios.post('https://backend-d2jsihff7-krish-patels-projects-3e6b9326.vercel.app/foodapp/loginrestro', user)

        .then((responce) => {

            console.log(responce.data)
            const data = responce.data;
                alert("Login Success")
                localStorage.setItem('token', data.token) 
                navigate('/addmenu')
                
        })

        .catch((err) => { console.log(err)
            const data = err.response.data; 
        alert(data) }   )
        
        

      }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-10">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-bold text-center mb-1 text-black">Login With your Resto Credentials</h2>
                <p className="text-center text-gray-500 mb-6">Enter your details below to Login</p>

                {/* Username Input */}
                <div className="mb-4 w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <Input
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900" 
                        onChange={(e)=> setUser({ ...user, username: e.target.value })} 
                    />
                </div>
               

                {/* Password Input with Eye Icon */}
                <div className="relative mb-6 w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <Input 
                        type={"text"} 
                        placeholder="Enter your password" 
                        className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900" 
                        onChange={(e)=> setUser({ ...user, password: e.target.value })} 
                    />
                  
                </div>

                {/* Sign Up Button */}
                <button onClick={handleLogin} className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition duration-300">
                 Login
                </button>

                {/* Terms and Conditions */}
                <p className="text-center text-gray-500 text-sm mt-4">
                    By clicking continue, you agree to our 
                    <a href="#" className="text-black font-medium"> Terms of Service </a> 
                    and 
                    <a href="#" className="text-black font-medium"> Privacy Policy</a>.
                </p>

                <p className="text-black text-center mt-6">
                  Don't have an account?     
                   <Link to="/restroregistration" className="text-black font-medium"> Sign-Up</Link>     
                </p>
            </div>
        </div>
    );
}
