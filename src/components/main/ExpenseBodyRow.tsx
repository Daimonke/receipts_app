import React, { ChangeEvent, useState } from "react";
import { Row } from "./ExpensesNav";

type Props = {
  row: Row;
  handleRows: (row: Row) => void;
};

const ExpenseBodyRow = ({ row, handleRows }: Props) => {
  const [rowData, setRowData] = useState<Row>(row);

  const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value[0] === "€") value = value.slice(1);
    if (value.match(/^[+-]?((\d+(\.\d*)?)|(\.\d+))$/) || value === "") {
      const newRow = {
        ...rowData,
        price: "€" + value,
      };
      handleRows(newRow);
      setRowData(newRow);
    }
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    const newRow = {
      ...rowData,
      name: e.target.value,
    };
    handleRows(newRow);
    setRowData(newRow);
  };

  return (
    <div className="expense-body-row">
      <input
        type="text"
        onChange={handleName}
        value={rowData.name}
        placeholder="Item"
        className="expense-name-input"
      />
      <input
        type="text"
        onChange={handlePrice}
        value={rowData.price}
        placeholder="Price"
        className="expense-price-input"
      />
    </div>
  );
};

export default ExpenseBodyRow;
