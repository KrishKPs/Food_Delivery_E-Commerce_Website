export function PendingOrderCard({ username, orders, ChangeStatus }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6 w-full">
      {/* Username */}
      <h1 className="text-xl font-semibold text-gray-800 mb-4">{username}</h1>

      {/* Orders */}
      {orders.map((order) => (
        <OrderCard key={order._id} data={order} ChangeStatus={ChangeStatus} />
      ))}
    </div>
  );
}

function OrderCard({ data, ChangeStatus }) {
  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    ChangeStatus(data._id, newStatus);
  };

  return (
    <div className="border-t border-gray-200 py-4">
      {/* Restaurant and Price */}
      <div className="mb-2">
        <h2 className="text-lg font-medium text-gray-700">{data.restaurant}</h2>
        <p className="text-gray-600">Price: ${data.price}</p>
      </div>

      {/* Status Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Status
        </label>
        <select
          value={data.status}
          onChange={handleStatusChange}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {/* Items */}
      <div className="bg-gray-50 p-3 rounded-lg">
        {data.items.map((item, index) => (
          <OrderItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

function OrderItem({ data }) {
  return (
    <div className="flex justify-between items-center py-1 border-b border-gray-200">
      <h3 className="text-gray-700">{data.foodItem}</h3>
      <p className="text-gray-600">Qty: {data.quantity}</p>
    </div>
  );
}
