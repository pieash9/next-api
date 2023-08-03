"use client";
import React, { useEffect, useState } from "react";

const Update = ({ params }) => {
  const id = params.userId;
  const [userData, setUserData] = useState([]);
  console.log(userData);
  const getUserDetails = async () => {
    const res = await fetch(`http://localhost:3000/api/users/${id}`);
    const data = await res.json();
    setUserData(data.result);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const age = formData.get("age");
    const updatedData = { name, email, age };
    console.log(updatedData);

    const res = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedData),
    });
    const data = await res.json();
    console.log(data);
    if (data.success) {
      alert("New user Updated");
    } else {
      alert("Error happened");
    }
  };
  return (
    <div>
      <h3>Update user Details</h3>

      <form
        onSubmit={handleSubmit}
        className="mt-5 p-10 bg-gray-200 w-fit mx-auto flex flex-col gap-5 rounded"
      >
        <input
          className="input input-primary"
          type="text"
          name="name"
          defaultValue={userData.name}
          placeholder="Enter name"
        />
        <input
          className="input input-primary"
          type="text"
          name="email"
          defaultValue={userData.email}
          placeholder="Enter email"
        />
        <input
          className="input input-primary"
          type="text"
          name="age"
          defaultValue={userData.age}
          placeholder="Enter age"
        />
        <button type="submit" className="btn btn-primary">
          Update user
        </button>
      </form>
    </div>
  );
};

export default Update;
