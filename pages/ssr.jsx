import clsx from "clsx";
import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";

// SSR - Server Side Rendering

export default function Home(props) {
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
        {props.products.map((product) => {
          return <ProductCard key={product?.id} product={product} />;
        })}
      </section>
    </main>
  );
}

export async function getServerSideProps() {
  console.log("hola desde el server");

  const response = await fetch("https://dummyjson.com/products");
  const json = await response.json();

  return {
    props: {
      products: json.products,
    },
  };
}
