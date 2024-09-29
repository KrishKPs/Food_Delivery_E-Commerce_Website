import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { useCart } from "./AddtoCard";

export function MenuCard({ data, addtocart, removefromcart, setshow }) {


    const { cart } = useCart();


    const cartItem = cart.find((item) => item._id === data._id);

    return (
        <div className="h-auto w-80 bg-white shadow-md rounded-lg p-4 hover:shadow-lg flex flex-col transition-transform duration-300 ease-in-out cursor-pointer transform hover:scale-105 ml-5 mt-3">
            {/* Image Section */}
            <img
                src={data.image}
                alt={data.nameitem}
                className="h-48 w-full rounded-lg object-cover"
            />

            {/* Item Info Section */}
            <div className="flex justify-between items-center mt-4">
                <h1 className="text-lg font-semibold text-gray-800">
                    {data.name}
                </h1>
            </div>

            {/* Description and Price */}
            <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">
                    {data.description}
                </p>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-bold text-gray-800">${data.price}</p>

                    {/* Quantity and Remove Button */}
                    {cartItem  ? (
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => removefromcart(data)}
                                className="bg-red-500 text-white rounded-full px-3 py-1 hover:bg-red-600 transition-colors duration-300"
                            >
                                <IoRemoveCircleOutline className="text-xl" />
                            </button>
                            <p className="text-lg">{cartItem.quantity }</p>
                            <button
                                onClick={() => {
                                    addtocart(data);
                                    setshow(true);
                                }}
                                className="bg-blue-500 text-white rounded-full px-3 py-1 hover:bg-blue-600 transition-colors duration-300"
                            >
                                <IoAddCircleOutline className="text-xl" />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => {
                                addtocart(data);
                                setshow(true);
                            }}
                            className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition-colors duration-300"
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
