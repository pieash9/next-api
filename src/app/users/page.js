import DeleteUsers from "@/components/DeleteUsers";
import Link from "next/link";
import React from "react";

const getUsers = async () => {
  const res = await fetch(`http://localhost:3000/api/users`);
  const data = res.json();
  return data;
};

const Users = async () => {
  const users = await getUsers();
  console.log(users);
  return (
    <div className="text-center mt-5">
      <h3>user list</h3>
      {users.map((user) => (
        <div key={user.id}>
          <Link href={`http://localhost:3000/users/${user.id}`}>
            {user.name}
          </Link>
          <span className="text-blue-600 ml-5 inline-block w-[100px]">
            {" "}
            <Link href={`http://localhost:3000/users/${user.id}/update`}>
              Edit
            </Link>
          </span>
          <DeleteUsers id={user.id} />
        </div>
      ))}
    </div>
  );
};

export default Users;
