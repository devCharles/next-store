import clsx from "clsx";
import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";

// CSR - Client Side Rendering

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
      .then((response) => response.json())
      .then((json) => setProducts(json?.products));
  }, []);

  return (
    <main>
      <header
        className={clsx(
          "min-h-[300px] bg-black w-full",
          "flex justify-center items-center",
          "text-4xl font-bold text-white"
        )}
      >
        <h1>Mi tiendita</h1>
      </header>

      <section className="grid grid-cols-3 gap-5">
        {products.map((product) => {
          return <ProductCard key={product?.id} product={product} />;
        })}
      </section>
    </main>
  );
}
