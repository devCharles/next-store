export default function Producto(props) {
  return (
    <main>
      <header className="bg-black text-white flex justify-center items-center min-h-[150px]">
        <h1 className="text-4xl">{props.product.title}</h1>
      </header>
      <section>
        <img src={props.product.thumbnail} alt={props.product.title} />
        <p>{props.product.price}</p>
        <p>{props.product.description}</p>
      </section>
    </main>
  );
}

export async function getServerSideProps(context) {
  const productId = context.params.id;
  const key = process.env.KEY;

  console.log("hola desde el server key:", key);

  const response = await fetch(`${process.env.API_URL}/products/${productId}`);
  const product = await response.json();

  return {
    props: {
      product: product,
    },
  };
}
