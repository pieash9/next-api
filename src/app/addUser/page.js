"use client";

import React from "react";

const AddUser = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const age = formData.get("age");
    const userData = { name, email, age };
    console.log(userData);

    const res = await fetch(`http://localhost:3000/api/users`, {
      method: "POST",
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    console.log(data);
    if (data.success) {
      alert("New user created");
    } else {
      alert("Error happened");
    }
  };
  return (
    <div>
      <h3>Add New User</h3>
      <form
        onSubmit={handleSubmit}
        className="mt-5 p-10 bg-gray-200 w-fit mx-auto flex flex-col gap-5 rounded"
      >
        <input
          className="input input-primary"
          type="text"
          name="name"
          placeholder="Enter name"
        />
        <input
          className="input input-primary"
          type="text"
          name="email"
          placeholder="Enter email"
        />
        <input
          className="input input-primary"
          type="text"
          name="age"
          placeholder="Enter age"
        />
        <button type="submit" className="btn btn-primary">
          Add user
        </button>
      </form>
    </div>
  );
};

export default AddUser;
