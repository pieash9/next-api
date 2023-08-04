"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const AddProduct = ({ params }) => {
  const [productData, setProductData] = useState([]);
  console.log(productData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const price = formData.get("price");
    const color = formData.get("color");
    const company = formData.get("company");
    const category = formData.get("category");

    const productData = { name, price, color, company, category };
    console.log(productData);

    const res = await fetch(
      `http://localhost:3000/api/products/${params.editProduct}`,
      {
        method: "PUT",
        body: JSON.stringify(productData),
      }
    );
    const data = await res.json();
    if (data.success) {
      alert("Product Updated");
    }
  };

  useEffect(() => {
    getProduct(params.editProduct);
  }, []);

  const getProduct = async (id) => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`);
    const data = await res.json();
    setProductData(data.result);
    return data.result;
  };

  return (
    <div>
      <h3>Update Product</h3>
      <Link href="/products">
        <h4 className="text-blue-500">⬅️ All Products</h4>
      </Link>

      <div className=" mt-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 w-fit mx-auto"
        >
          <input
            name="name"
            type="text"
            defaultValue={productData.name}
            placeholder="Enter Name"
            className="input input-info"
          />
          <input
            name="price"
            type="text"
            defaultValue={productData.price}
            placeholder="Enter price"
            className="input input-info"
          />
          <input
            name="color"
            type="text"
            defaultValue={productData.color}
            placeholder="Enter color"
            className="input input-info"
          />
          <input
            name="company"
            type="text"
            defaultValue={productData.company}
            placeholder="Enter company"
            className="input input-info"
          />
          <input
            name="category"
            type="text"
            defaultValue={productData.category}
            placeholder="Enter category"
            className="input input-info"
          />
          <button className="btn btn-info" type="submit">
            Update product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
