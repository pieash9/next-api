import Link from "next/link";
import React from "react";

const getProducts = async () => {
  const res = await fetch(`http://localhost:3000/api/products`);
  const data = await res.json();
  return data.result;
};

const Products = async () => {
  const products = await getProducts();
  console.log(products);
  return (
    <div>
      <h3>Products list</h3>
      <Link href="/">
        <h4 className="text-blue-500">⬅️ Home</h4>
      </Link>

      <div className="">
        <table className="table">
          <thead className="border border-gray-400">
            <tr className="border border-gray-400">
              <td>Name</td>
              <td>Price</td>
              <td>Color</td>
              <td>Company</td>
              <td>Category</td>
              <td>Action</td>
            </tr>
          </thead>

          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.color}</td>
                  <td>{product.company}</td>
                  <td>{product.category}</td>
                  <td className="text-blue-500">
                    <Link href={`/products/${product._id}`}>Edit</Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
