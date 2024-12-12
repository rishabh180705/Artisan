import React, { useState } from 'react';
import './AllOrder.css';
import { useNavigate } from 'react-router-dom';

function AllOrders() {
  const navigate = useNavigate();
  const [ordersData, setOrdersData] = useState([
    {
      id: 1,
      customerName: 'Rohan Sharma',
      orderDate: '2022-01-01',
      total: 100.0,
      products: [
        {
          id: 1,
          name: 'Product 1',
          price: 50.0,
          quantity: 2,
        },
      ],
      status: 'Delivered',
      pahchanId: 'PAH001',
      Marked: 'yes',
    },
    {
      id: 2,
      customerName: 'Priya Patel',
      orderDate: '2022-01-15',
      total: 200.0,
      products: [
        {
          id: 2,
          name: 'Product 2',
          price: 100.0,
          quantity: 2,
        },
      ],
      status: 'Shipped',
      pahchanId: 'PAH002',
      Marked: 'yes',
    },
    {
      id: 3,
      customerName: 'Karan Singh',
      orderDate: '2022-02-01',
      total: 300.0,
      products: [
        {
          id: 3,
          name: 'Product 3',
          price: 150.0,
          quantity: 2,
        },
      ],
      status: 'Pending',
      pahchanId: 'PAH003',
      Marked: 'No',
    },
    {
        id: 4,
        customerName: 'Aisha Khan',
        orderDate: '2022-03-01',
        total: 400.00,
        products: [
          {
            id: 4,
            name: 'Product 4',
            price: 200.00,
            quantity: 2,
          },
        ],
        status: 'Delivered',
        pahchanId: 'PAH004',
        Marked: "yes",
      },
      {
        id: 5,
        customerName: 'Rahul Gupta',
        orderDate: '2022-04-01',
        total: 500.00,
        products: [
          {
            id: 5,
            name: 'Product 5',
            price: 250.00,
            quantity: 2,
          },
        ],
        status: 'Shipped',
        pahchanId: 'PAH005',
        Marked: "yes",
      },
      {
        id: 6,
        customerName: 'Sonia Jain',
        orderDate: '2022-05-01',
        total: 600.00,
        products: [
          {
            id: 6,
            name: 'Product 6',
            price: 300.00,
            quantity: 2,
          },
        ],
        status: 'Pending',
        pahchanId: 'PAH006',
        Marked: "No",
      },
      {
        id: 7,
        customerName: 'Vikram Verma',
        orderDate: '2022-06-01',
        total: 700.00,
        products: [
          {
            id: 7,
            name: 'Product 7',
            price: 350.00,
            quantity: 2,
          },
        ],
        status: 'Delivered',
        pahchanId: 'PAH007',
        Marked: "yes",
      },
      {
        id: 8,
        customerName: 'Neha Sharma',
        orderDate: '2022-07-01',
        total: 800.00,
        products: [
          {
            id: 8,
            name: 'Product 8',
            price: 400.00,
            quantity: 2,
          },
        ],
        status: 'Shipped',
        pahchanId: 'PAH008',
        Marked: "No",
      },
      {
        id: 9,
        customerName: 'Amit Kumar',
        orderDate: '2022-08-01',
        total: 900.00,
        products: [
          {
            id: 9,
            name: 'Product 9',
            price: 450.00,
            quantity: 2,
          },
        ],
        status: 'Pending',
        pahchanId: 'PAH009',
        Marked: "No",
      },
      {
        id: 10,
        customerName: 'Riya Jain',
        orderDate: '2022-09-01',
        total: 1000.00,
        products: [
          {
            id: 10,
            name: 'Product 10',
            price: 500.00,
            quantity: 2,
          },
        ],
        status: 'Delivered',
        pahchanId: 'PAH010',
        Marked: "yes"
      },
  ]);

  const handlePahchanIdClick = (order) => {
    if (order.status === 'Pending') {
      const updatedOrders = ordersData.map((item) =>
        item.id === order.id ? { ...item, Marked: 'yes' } : item
      );
  
      console.log('Updated Orders:', updatedOrders); // Debugging log
      setOrdersData(updatedOrders);
  
      // Logging to verify state change
      setTimeout(() => console.log('Orders Data After Update:', ordersData), 0);
  
      navigate(`/artisan/${order.pahchanId}`);
    }
  };
  

  return (
    <div className="all-orders-container">
      <h1>All Orders</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Total</th>
            <th>Pahchan Id</th>
            <th>Status</th>
            <th>Visited</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.total}</td>
              <td>
                <span
                  onClick={() => handlePahchanIdClick(order)}
                  className={order.status === 'Pending' ? 'pahchan-link' : ''}
                  style={{
                    cursor: order.status === 'Pending' ? 'pointer' : 'default',
                    color: order.status === 'Pending' ? 'blue' : 'black',
                  }}
                >
                  {order.pahchanId}
                </span>
              </td>
              <td>{order.status}</td>
              <td>{order.Marked}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllOrders;
