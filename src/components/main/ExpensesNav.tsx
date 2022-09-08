import Button from "../common/Button";
import Select from "../common/Select";
import { v4 as uuidv4 } from "uuid";
import { useContext, useEffect, useState } from "react";
import ExpenseBody from "./ExpenseBody";
import { context, ReceiptInterface } from "../../App";

type Props = {
  receipt: ReceiptInterface;
};
export type Row = {
  id: string;
  name: string;
  price: string;
};
const ExpensesNav = ({ receipt }: Props) => {
  const ctx = useContext(context);
  const [rows, setRows] = useState<Row[]>([]);

  const handleRows = (row: Row) => {
    const newRow = {
      ...row,
      price: row.price[0] === "€" ? row.price.slice(1) : row.price,
    };
    const rowIndex = rows.findIndex((item) => item.id === row.id);
    const rowsCopy = [...rows];
    rowsCopy.splice(rowIndex, 1, newRow);
    setRows(rowsCopy);
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        id: uuidv4(),
        name: "",
        price: "",
      },
    ]);
  };

  useEffect(() => {
    const totalSum = rows.reduce((c, n) => c + Number(n.price), 0);
    ctx?.handleReceipt({
      ...receipt,
      total: totalSum.toFixed(2),
    });
  }, [rows]);
  return (
    <div>
      <nav className="expensesNav">
        <Select />
        <Button variant="outlined" onClick={addRow}>
          Add expense
        </Button>
      </nav>
      {rows.length > 0 && <ExpenseBody rows={rows} handleRows={handleRows} />}
    </div>
  );
};

export default ExpensesNav;
