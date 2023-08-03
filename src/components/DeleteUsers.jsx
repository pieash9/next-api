"use client";

import React from "react";

const DeleteUsers = ({ id }) => {
  const handleDelete = async() => {
    const res = await fetch(`http://localhost:3000/api/users/${id}`,{method:"DELETE"})
    const data = await res.json()
    if(data.success){
        alert("user deleted")
    }
  };
  return (
    <span>
      <button className="btn btn-error btn-xs" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </span>
  );
};

export default DeleteUsers;
