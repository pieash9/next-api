import React from "react";
const getUsers = async (id) => {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const data = await res.json();
  return data.result;
};

const UserDetails = async ({ params }) => {
  const user = await getUsers(params.userId);

  return (
    <div>
      <p>Name : {user?.name}</p>
      <p>id : {user?.id}</p>
      <p>email : {user?.email}</p>
    </div>
  );
};

export default UserDetails;
