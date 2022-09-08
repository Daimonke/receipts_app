import React from "react";
import ExpensesNav from "./ExpensesNav";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <ExpensesNav />
    </header>
  );
};

export default Header;
