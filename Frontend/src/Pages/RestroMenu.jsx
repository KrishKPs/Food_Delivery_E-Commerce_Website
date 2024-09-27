import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MenuCard } from "../Components/Menucard";
import { useCart } from "../Components/AddtoCard";
import { IoCartOutline } from "react-icons/io5"; // Cart icon from React Icons

export function RestroMenu() {
  const restaurant = useParams();
  const [menu, setMenu] = useState([]);
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const { addtocart } = useCart();
  const { cart } = useCart(); // Get cart from useCart context
  const { clearCart } = useCart();
  const { removefromcart } = useCart();  

  const menuitems = async () => {
    const response = await axios.get(
      `https://backend-a07sy6pd1-krish-patels-projects-3e6b9326.vercel.app/foodapp/menu/restaurant/${restaurant.id}`,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    )
      .then((response) => {
        setMenu(response.data.restaurant);
        console.log(response.data.restaurant);
        setName(response.data.restaurant[0].restroname);
        console.log(response.data.restaurant[0].restroname);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    menuitems();
  }, []);

  // Calculate total items in the cart
  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      {/* Restaurant Name and Cart Icon */}
      <div className="flex justify-between items-center px-4 py-6 bg-gray-100 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-800">{name} Menu</h1>
        {/* Cart Icon with item counter */}
        <div className="relative">
          <IoCartOutline
            className="text-4xl text-gray-800 cursor-pointer"
            onClick={() => navigate(`/cart/${encodeURIComponent(name)}/${restaurant.id}`)}
          />
          {totalItemsInCart  > 0 && (   
            <div className="absolute top-0 right-0 bg-red-500 text-white text-sm font-bold h-5 w-5 rounded-full flex items-center justify-center">
              {totalItemsInCart}
            </div>
          )}

    
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {menu.map((menuItem, index) => (
          <MenuCard key={index} data={menuItem} addtocart={addtocart} setshow={setShow} removefromcart={removefromcart}  />
        ))}
      </div>

      {/* Floating Item Added to Cart Notification */}
      
    </>
  );
}
