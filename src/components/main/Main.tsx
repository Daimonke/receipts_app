import React, { useContext } from "react";
import { context } from "../../App";
import ExpensesNav from "./ExpensesNav";

const Main = () => {
  const ctx = useContext(context);
  return (
    <main>
      {ctx?.receipts.map((item) => (
        <ExpensesNav key={item.id} receipt={item} />
      ))}
    </main>
  );
};

export default Main;
