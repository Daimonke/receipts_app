import { ReactNode } from "react";

type Props = {
  variant?: "contained" | "outlined";
  children: ReactNode;
};

const Button = ({ variant, children }: Props) => {
  return (
    <button
      className={`btn ${
        variant === "outlined" ? "btn-outlined" : "btn-contained"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
