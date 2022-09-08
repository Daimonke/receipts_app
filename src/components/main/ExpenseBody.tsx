import React, { Fragment, useEffect, useState } from "react";
import ExpenseBodyRow from "./ExpenseBodyRow";
import { v4 as uuidv4 } from "uuid";
import { Row } from "./ExpensesNav";
import Divider from "../common/Divider";

type Props = {
  rows: Row[];
  handleRows: (row: Row) => void;
};

const ExpenseBody = ({ rows, handleRows }: Props) => {
  const [total, setTotal] = useState("0");

  useEffect(() => {
    const newTotal = rows.reduce((c, n) => c + Number(n.price), 0);
    setTotal(newTotal.toFixed(2));
  }, [rows]);
  return (
    <div className="expense-body">
      {rows.map((item) => (
        <Fragment key={item.id}>
          <ExpenseBodyRow row={item} handleRows={handleRows} />
          <Divider />
        </Fragment>
      ))}
      <div className="expense-total-div">
        <span>Total</span>
        <span className="expense-total-price">€{total}</span>
      </div>
    </div>
  );
};

export default ExpenseBody;
