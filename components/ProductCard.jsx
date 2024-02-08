import Link from "next/link";
import clsx from "clsx";

export default function ProductCard({ product }) {
  return (
    <article
      key={`product-${product?.id}`}
      className={clsx(
        "p-5",
        "border border-gray-400 rounded",
        "flex flex-col justify-between"
      )}
    >
      <img src={product?.thumbnail} alt={product?.title} />
      <h3>{product?.title}</h3>
      <p>{product?.price}</p>
      <Link
        href={`/producto/${product?.id}`}
        className="bg-black text-white w-full flex justify-center items-center p-2 rounded"
      >
        Ver detalle
      </Link>
    </article>
  );
}
