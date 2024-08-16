import { Button } from "./Button";

export function Product({ product }: { product: any }) {
  return (
    <div className="sm:max-w-[37.5rem] sm:max-h-[28.125rem] my-7 mx-4 rounded-[10px] overflow-hidden flex flex-col sm:flex-row bg-pure-white">
      <img
        className="h-60 sm:h-auto w-full sm:w-1/2 object-cover object-center"
        src={product.image.url_desktop}
        srcSet={`${product.image.url_desktop} 600w, ${product.image.url_mobile} 400w`}
        sizes="(min-width: 640px) 600px, 400px"
        alt={product.image.alt_text}
      />
      <section className="m-6 sm:m-8 flex flex-col gap-5 sm:gap-auto">
        <span className="font-montserrat font-medium text-sm uppercase tracking-[0.3125rem] text-aurometal-saurus">
          {product.category}
        </span>
        <h1 className="font-fraunces text-[2rem] font-bold leading-[1] text-gunmetal">
          {product.name}
        </h1>
        <p className="font-montserrat text-sm font-medium text-aurometal-saurus leading-[1.63]">
          {product.description}
        </p>
        <div className="flex gap-4 items-center">
          <div className="font-fraunces text-[2rem] font-bold leading-[1] text-deep-aquamarine">
            ${product.price.current}
          </div>
          <div className="font-montserrat text-[0.8rem] font-medium leading-[1.76] line-through text-aurometal-saurus">
            ${product.price.original}
          </div>
        </div>
        <Button variant="cta" onclick={() => alert("item added to cart")}>
          Add to Cart
        </Button>
      </section>
    </div>
  );
}
