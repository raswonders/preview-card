import { ReactNode } from "react";
import cart from "/src/assets/icon-cart.svg";

interface ButtonProps {
  variant: string;
  children: ReactNode;
  onclick: () => void;
}

export function Button({ variant, children, onclick }: ButtonProps) {
  let styles = "";
  switch (variant) {
    case "cta":
    default:
      styles =
        "flex items-center justify-center gap-2 py-4 font-montserrat font-bold text-sm bg-deep-aquamarine hover:bg-deep-aquamarine-hover focus:outline-deep-aquamarine focus:outline-offset-2 transition-colors ease-in-out duration-300 rounded-[0.5rem] text-pure-white";
      break;
  }

  return (
    <button className={styles} onClick={onclick}>
      <img src={cart} alt="Cart icon" />
      {children}
    </button>
  );
}
