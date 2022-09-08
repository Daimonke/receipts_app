import React, { useContext } from "react";
import { context } from "../../App";
import Button from "../common/Button";

const ReceiptNav = () => {
  const ctx = useContext(context);
  return (
    <nav>
      <div className="receipt-total-div">
        <span className="font-large">Total</span>
        <span className="receipt-total">${ctx?.total}</span>
      </div>
      <Button variant="contained" onClick={ctx?.newReceipt}>
        Add receipt
      </Button>
    </nav>
  );
};

export default ReceiptNav;
