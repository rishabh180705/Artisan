// ArtisanDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./ArtisansDetails.css"

const ArtisanDetails = () => {
  const { pahchanId } = useParams();

  // Dummy artisan and order data
  const artisansData = [
    {
      pahchanId: 'PAH003',
      name: 'Karan Singh',
      contact: '9876543210',
      address: 'Delhi, India',
      orders: [
        {
          orderId: 101,
          orderDate: '2022-02-01',
          total: 300.0,
          status: 'Pending',
        },
      ],
    },
    {
      pahchanId: 'PAH006',
      name: 'Sonia Jain',
      contact: '9876543222',
      address: 'Mumbai, India',
      orders: [
        {
          orderId: 102,
          orderDate: '2022-05-01',
          total: 600.0,
          status: 'Pending',
        },
      ],
    },
    {
      pahchanId: 'PAH009',
      name: 'Amit Kumar',
      contact: '9876543333',
      address: 'Kolkata, India',
      orders: [
        {
          orderId: 103,
          orderDate: '2022-08-01',
          total: 900.0,
          status: 'Pending',
        },
      ],
    },
  ];

  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
    // Fetch artisan details based on pahchanId
    const artisanDetails = artisansData.find((item) => item.pahchanId === pahchanId);
    setArtisan(artisanDetails);
  }, [pahchanId]);

  if (!artisan) {
    return <p>Loading artisan details...</p>;
  }

  return (
    <div className="artisan-details-container">
      <h1>Artisan Details</h1>
      <p><strong>Name:</strong> {artisan.name}</p>
      <p><strong>Contact:</strong> {artisan.contact}</p>
      <p><strong>Address:</strong> {artisan.address}</p>
      <h2>Orders</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Order Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {artisan.orders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.orderDate}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArtisanDetails;
