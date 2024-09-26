export function CartCard({ data, removeitem }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-center">
        {/* Left Section: Item Info */}
        <div className="flex items-center">
          {/* Item Image */}
          <img
            src={data.image}
            alt={data.name}
            className="h-16 w-16 rounded-md object-cover mr-4"
          />
  
          {/* Item Details */}
          <div>
            <h1 className="text-lg font-semibold text-gray-800">{data.name}</h1>
            <p className="text-gray-600">Qty: {data.quantity}</p>
          </div>
        </div>
  
        {/* Right Section: Price Info */}
        <div className="text-right">
          <h3 className="text-lg font-semibold text-gray-800">
            ${data.price * data.quantity}
          </h3>
          <p className="text-sm text-gray-500">${data.price} each</p>
  
          {/* Clear Cart Button */}
          <button
            onClick={() => removeitem(data)}
            className="text-red-500 text-sm mt-2 underline hover:text-red-600"
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
  