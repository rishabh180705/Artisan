import { useState, useEffect } from "react";
import "./Order.css";

const Order = () => {
  // Sample order data (replace this with actual API data)
  const [orders, setOrders] = useState([
    { id: 1, customer: "John Doe", product: "Wooden Chair", status: "Pending" },
    { id: 2, customer: "Jane Smith", product: "Dining Table", status: "In Progress" },
    { id: 3, customer: "George White", product: "Sofa", status: "Completed" },
  ]);

  // Function to handle status change
  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="order-page">
      <h1>Orders for Artisan</h1>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>{order.status}</td>
              <td>
                <button
                  onClick={() => handleStatusChange(order.id, "In Progress")}
                  disabled={order.status === "In Progress"}
                  className="action-btn"
                >
                  In Progress
                </button>
                <button
                  onClick={() => handleStatusChange(order.id, "Completed")}
                  disabled={order.status === "Completed"}
                  className="action-btn"
                >
                  Complete
                </button>
                <button
                  onClick={() => handleStatusChange(order.id, "Cancelled")}
                  disabled={order.status === "Cancelled"}
                  className="action-btn"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
