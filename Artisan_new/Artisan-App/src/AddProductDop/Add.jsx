import React, { useState } from 'react';
import './Add.css';

const artisansData = {
  PAH003: {
    artisanName: 'Karan Singh',
    products: [
      { id: 1, name: 'Product 1', price: 50.0, quantity: 2 },
    ],
  },
  PAH006: {
    artisanName: 'Sonia Jain',
    products: [
      { id: 2, name: 'Product 2', price: 100.0, quantity: 1 },
    ],
  },
  PAH009: {
    artisanName: 'Amit Kumar',
    products: [{
        id: 3, name: 'Product 3', price: 100.0, quantity: 4 
    }],
  },
};

function AddProductById() {
  const [pahchanId, setPahchanId] = useState('');
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    quantity: '',
  });
  const [message, setMessage] = useState('');
  const [artisans, setArtisans] = useState(artisansData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = () => {
    const artisan = artisans[pahchanId];
    if (!artisan) {
      setMessage('Artisan not found. Please check the Pahchan ID.');
      return;
    }

    if (productData.name && productData.price && productData.quantity) {
      const updatedProducts = [
        ...artisan.products,
        {
          id: artisan.products.length + 1,
          name: productData.name,
          price: parseFloat(productData.price),
          quantity: parseInt(productData.quantity),
        },
      ];

      setArtisans((prev) => ({
        ...prev,
        [pahchanId]: { ...artisan, products: updatedProducts },
      }));

      setMessage('Product added successfully!');
      setProductData({ name: '', price: '', quantity: '' });
    } else {
      setMessage('Please fill in all fields.');
    }
  };

  return (
    <div className="add-product-by-id-container">
      <h1>Add Product</h1>
      <div className="form-container">
        <input
          type="text"
          placeholder="Pahchan ID"
          value={pahchanId}
          onChange={(e) => setPahchanId(e.target.value)}
        />
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={productData.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          value={productData.price}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Product Quantity"
          value={productData.quantity}
          onChange={handleInputChange}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      {message && <p className="message">{message}</p>}

      <h2>Artisans and Products</h2>
      {Object.keys(artisans).map((id) => (
        <div key={id} className="artisan-details">
          <h3>{artisans[id].artisanName}</h3>
          <p>Pahchan ID: {id}</p>
          <table className="products-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {artisans[id].products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default AddProductById;
