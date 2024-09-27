export function HistroyCard({ data, orders }) {
    // Calculate total spending
    const totalSpending = orders.reduce((acc, order) => acc + order.price, 0);
  
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full max-w-4xl">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          {data.username}'s Order History
        </h1>
        
        {/* Total Spending */}
        <div className="bg-blue-100 text-blue-800 p-4 rounded-lg mb-4">
          <h2 className="text-xl font-bold">Total Spending: ${totalSpending.toFixed(2)}</h2>
        </div>
  
        {/* Order Details */}
        <div className="space-y-4">
          {orders.map((order, index) => (
            <Card key={index} data={order} />
          ))}
        </div>
      </div>
    );
  }
  
  function Card({ data }) {
    return (
      <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
        {/* Restaurant and Price */}
        <h2 className="text-lg font-semibold text-gray-700">
          Restaurant: {data.restaurant}
        </h2>
        <p className="text-gray-600">Price: ${data.price.toFixed(2)}</p>
  
        {/* Order Items */}
        <h3 className="font-medium text-gray-800 mt-3">Items Ordered:</h3>
        <ul className="ml-5 list-disc text-gray-600">
          {data.items.map((item, index) => (
            <li key={index}>
              {item.foodItem} (Qty: {item.quantity})
            </li>
          ))}
        </ul>
  
        {/* Status */}
        <p className="text-sm text-gray-500 mt-4">
          Status: <span className="capitalize">{data.status}</span>
        </p>
      </div>
    );
  }
  