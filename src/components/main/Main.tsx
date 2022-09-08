import React, { useContext } from "react";
import { context } from "../../App";
import ExpensesNav from "./ExpensesNav";

type Props = {};

const Main = (props: Props) => {
  const ctx = useContext(context);
  return (
    <main>
      {ctx?.expenses.map((item) => (
        <ExpensesNav key={item.id} expense={item} />
      ))}
    </main>
  );
};

export default Main;
