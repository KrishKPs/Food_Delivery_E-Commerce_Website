import axios from "axios";
import { useEffect, useState } from "react";
import { HistroyCard } from "../Components/History";

export function OrderHistroy() {
  const [data, setData] = useState([]);

  const getOrders = async () => {
    const responce = await axios
      .get("http://localhost:3062/foodapp/history", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((responce) => {
        setData(responce.data.order);
        console.log(responce.data.order);
      });
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Order History</h1>
      {data.length > 0 ? (
        data.map((order, index) => (
          <HistroyCard key={index} data={order} orders={order.orders} />
        ))
      ) : (
        <p className="text-gray-500">No orders found</p>
      )}
    </div>
  );
}
