"use client";

import Link from "next/link";
import React from "react";

const AddProduct = () => {
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

    const res = await fetch(`http://localhost:3000/api/products`, {
      method: "POST",
      body: JSON.stringify(productData),
    });
    if (res.success) {
      alert("New product added");
    }
  };
  return (
    <div>
      <h3>Add Products</h3>
      <Link href="/">
        <h4 className="text-blue-500">⬅️Home</h4>
      </Link>

      <div className=" mt-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 w-fit mx-auto"
        >
          <input
            name="name"
            type="text"
            placeholder="Enter Name"
            className="input input-info"
          />
          <input
            name="price"
            type="text"
            placeholder="Enter price"
            className="input input-info"
          />
          <input
            name="color"
            type="text"
            placeholder="Enter color"
            className="input input-info"
          />
          <input
            name="company"
            type="text"
            placeholder="Enter company"
            className="input input-info"
          />
          <input
            name="category"
            type="text"
            placeholder="Enter category"
            className="input input-info"
          />
          <button className="btn btn-info" type="submit">
            Add product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
