import { ReactNode } from "react";

type Props = {
  variant?: "contained" | "outlined";
  children: ReactNode;
  onClick?: () => void;
};

const Button = ({ variant, children, onClick }: Props) => {
  return (
    <button
      className={`btn ${
        variant === "outlined" ? "btn-outlined" : "btn-contained"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
