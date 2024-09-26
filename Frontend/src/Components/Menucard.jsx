import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"; // Added remove icon

export function MenuCard({ data, addtocart, removefromcart, setshow }) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

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
                {/* Add to Cart Button */}
                <IoAddCircleOutline
                    className="text-blue-500 hover:text-blue-600 text-3xl cursor-pointer"
                    onClick={() => {
                        addtocart(data);
                        setshow(true);
                      
                    }}
                />
            </div>

            {/* Description and Price */}
            <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">
                    {data.description}
                </p>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-bold text-gray-800">${data.price}</p>

                    {/* Quantity and Remove Button */}
                    {cartItem && cartItem.quantity > 0 ? (
                        <div className="flex items-center space-x-2">
                            <p className="text-lg">{cartItem.quantity}</p>
                            <IoRemoveCircleOutline
                                className="text-red-500 hover:text-red-600 text-3xl cursor-pointer"
                                onClick={() => {
                                    removefromcart(data);
                                }}
                            />
                        </div>
                    ) : (
                        <p className="text-sm text-gray-600">Add to cart</p>
                    )}
                </div>
            </div>
        </div>
    );
}
