import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-2xl">
      <Link href="/addProduct">
        <h4 className="text-blue-500">Add a product</h4>
      </Link>
      <Link href="/products">
        <h4 className="text-blue-500">All products</h4>
      </Link>
     
      
    </main>
  );
}
