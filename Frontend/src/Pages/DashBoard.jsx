import { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import axios from 'axios';  
import { RestroCard } from "../Components/RestroCard";

export function DashBoard() {
    const [restro, setRestro] = useState([]);  
    const [search, setSearch] = useState('');    

    const handlesearch = async () => {
        try {
            const response = await axios.post(
                'https://backend-d2jsihff7-krish-patels-projects-3e6b9326.vercel.app/foodapp/restaurantcity',
                { city: search },
                {
                    headers: {
                        Authorization: `${localStorage.getItem('token')}`
                    }
                }
            );
            console.log(response.data); 
            setRestro(response.data.restaurants);   
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        }
    };

    useEffect(() => {
        handlesearch();  
    }, []);

    return (
        <>
            {/* Navbar */}
            <Navbar setsearch={setSearch} handlesearch={handlesearch} /> 

            {/* Restro Cards */}
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
                {restro.length > 0 ? (
                    restro.map((restro, index) => (
                        <RestroCard key={index} data={restro} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500 text-lg">
                        No restaurants found.
                    </div>
                )}
            </div>
        </>
    );
}
