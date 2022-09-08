import React, { useContext } from "react";
import { context } from "../../App";
import Button from "../common/Button";
import { v4 as uuidv4 } from "uuid";

type Props = {};

const ReceiptNav = (props: Props) => {
  const ctx = useContext(context);
  return (
    <nav>
      <span>Total ${ctx?.total}</span>
      <Button
        variant="contained"
        onClick={() =>
          ctx?.handleExpense({
            id: uuidv4(),
            total: Math.floor(Math.random() * 100),
          })
        }
      >
        Add receipt
      </Button>
    </nav>
  );
};

export default ReceiptNav;
