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
      user list
      {users.map((user) => (
        <div key={user.id}>
          <Link href={`http://localhost:3000/users/${user.id}`}>
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
