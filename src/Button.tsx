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
      styles =
        "flex items-center justify-center gap-2 py-4 font-montserrat font-bold text-sm bg-deep-aquamarine  rounded-[0.5rem] text-pure-white";
      break;
    default:
      break;
  }

  return (
    <button className={styles} onClick={onclick}>
      <img src={cart} alt="Cart icon" />
      {children}
    </button>
  );
}
