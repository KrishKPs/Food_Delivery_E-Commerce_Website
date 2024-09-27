import axios from "axios";
import { useEffect, useState } from "react";
import { OrderAdminCard } from "../Components/Admincard";




export function AdminStatusChange() {
  const [data, setdata] = useState([]);

  const pendingorders = async () => {
    await axios
      .get("https://backend-a07sy6pd1-krish-patels-projects-3e6b9326.vercel.app/foodapp/admin/pendingorders", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((responce) => {
        setdata(responce.data.order);
        console.log(responce.data.order);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    pendingorders();
  }, []);

  const changeStatus = async (orderid, newstatus) => {
    await axios
      .post(
        "https://backend-a07sy6pd1-krish-patels-projects-3e6b9326.vercel.app/foodapp/admin/updateorder",
        {
          id: orderid,
          status: newstatus,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((responce) => {
        console.log(responce.data);
        alert("Status Changed Successfully");
        pendingorders();
      })
      .catch((err) => {
        console.log(err);
        alert("Status Not Changed");
      });
  };

  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-gray-50 py-10">
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Admin Order Status Management
        </h1>

        {/* Orders List */}
        <div className="w-full md:w-3/4 lg:w-1/2 bg-white shadow-md rounded-lg p-6">
          {data.length > 0 ? (
            data.map((userOrder, index) => (
              <OrderAdminCard
                key={index}
                username={userOrder.username}
                orders={userOrder.orders}
                ChangeStatus={changeStatus}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No pending orders found.</p>
          )}
        </div>

        {/* Refresh Button */}
        <div className="mt-8">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition-colors"
            onClick={pendingorders}
          >
            Refresh Orders
          </button>
        </div>

    
      </div>
    </>
  );
}
