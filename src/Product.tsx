import { Button } from "./Button";

export function Product({ product }: { product: any }) {
  return (
    <div className="my-7 mx-4 rounded-[10px] overflow-hidden bg-pure-white">
      <img
        className="h-60 w-full object-cover object-center"
        src={product.image.url}
        alt={product.image.alt}
      />
      <section className="m-6 flex flex-col">
        <span className="mb-3 font-montserrat font-medium text-sm uppercase tracking-[0.3125rem] text-aurometal-saurus">
          {product.category}
        </span>
        <h1 className="mb-4 font-fraunces text-[2rem] font-bold leading-[1] text-gunmetal">
          {product.name}
        </h1>
        <p className="mb-6 font-montserrat text-sm font-medium text-aurometal-saurus leading-[1.63]">
          {product.description}
        </p>
        <div className="mb-5 flex gap-4 items-center">
          <div className="font-fraunces text-[2rem] font-bold leading-[1] text-deep-aquamarine">
            {product.price.current}
          </div>
          <div className="font-montserrat text-[0.8rem] font-medium leading-[1.76] line-through text-aurometal-saurus">
            {product.price.original}
          </div>
        </div>
        <Button variant="cta" onclick={() => alert("item added to cart")}>
          Add to Cart
        </Button>
      </section>
    </div>
  );
}
