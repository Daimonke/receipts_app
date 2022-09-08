import { createContext, useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import { v4 as uuidv4 } from "uuid";
export interface ReceiptInterface {
  id: string;
  total: string;
}

export interface CtxInterface {
  setTotal: (number: string) => void;
  total: string;
  receipts: ReceiptInterface[];
  handleReceipt: (receipt: ReceiptInterface) => void;
  newReceipt: () => void;
}
export const context = createContext<CtxInterface | null>(null);

function App() {
  const [receipts, setReceipts] = useState<ReceiptInterface[]>([]);
  const [total, setTotal] = useState("");
  const handleReceipt = (receipt: ReceiptInterface) => {
    const ReceiptIndex = receipts.findIndex((item) => item.id === receipt.id);
    const receiptsCopy = [...receipts];
    receiptsCopy.splice(ReceiptIndex, 1, receipt);
    setReceipts(receiptsCopy);
  };

  const newReceipt = () => {
    const newReceipt = {
      id: uuidv4(),
      total: "",
    };
    setReceipts([...receipts, newReceipt]);
  };

  const ctxInitialValue: CtxInterface = {
    setTotal,
    total,
    receipts,
    handleReceipt,
    newReceipt,
  };

  useEffect(() => {
    setTotal(receipts.reduce((c, n) => c + Number(n.total), 0).toFixed(2));
  }, [receipts]);
  return (
    <context.Provider value={ctxInitialValue}>
      <Main />
      <Footer />
    </context.Provider>
  );
}

export default App;
