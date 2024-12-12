import React, { useState } from "react";
import "./Add.css";
// import axios from "axios";
// import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setImage] = useState(null);
  const [data, setFormData] = useState({
    name: "",
    description: "",
    category: "Handcrafted",
    price: "",
    type: "Wooden",
    dimensions: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!image) {
      toast.error("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("type", data.type);
    formData.append("dimensions", data.dimensions);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/artisan/add`, formData);

      if (response.data.success) {
        setFormData({
          name: "",
          description: "",
          category: "Handcrafted",
          price: "",
          type: "Wooden",
          dimensions: "",
        });
        setImage(null);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Product Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : "https://via.placeholder.com/200"}
              alt="Upload Preview"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Enter Product Name"
            required
          />
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="4"
            placeholder="Enter Product Description"
            required
          />
        </div>

        <div className="add-category flex-col">
          <p>Product Category</p>
          <select
            onChange={onChangeHandler}
            value={data.category}
            name="category"
            required
          >
            <option value="Handcrafted">Handcrafted</option>
            <option value="Modern">Modern</option>
            <option value="Vintage">Vintage</option>
          </select>
        </div>

        <div className="add-type flex-col">
          <p>Product Type</p>
          <select
            onChange={onChangeHandler}
            value={data.type}
            name="type"
            required
          >
            <option value="Wooden">Wooden</option>
            <option value="Metal">Metal</option>
            <option value="Glass">Glass</option>
          </select>
        </div>

        <div className="add-dimensions flex-col">
          <p>Product Dimensions</p>
          <input
            onChange={onChangeHandler}
            value={data.dimensions}
            type="text"
            name="dimensions"
            placeholder="e.g., 20x30x40 cm"
            required
          />
        </div>

        <div className="add-price flex-col">
          <p>Product Price</p>
          <input
            onChange={onChangeHandler}
            value={data.price}
            type="number"
            name="price"
            placeholder="Enter Price"
            required
          />
        </div>

        <button type="submit" className="add-btn">
          ADD PRODUCT
        </button>
      </form>
    </div>
  );
};

export default Add;
