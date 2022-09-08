import { createContext, useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

export interface ExpenseInterface {
  id: string;
  total: number;
}

export interface CtxInterface {
  total: number;
  expenses: ExpenseInterface[];
  handleExpense: (expense: ExpenseInterface) => void;
}
export const context = createContext<CtxInterface | null>(null);

function App() {
  const [expenses, setExpenses] = useState<ExpenseInterface[]>([]);
  const [total, setTotal] = useState(0);
  const handleExpense = (expense: ExpenseInterface) => {
    const newExpenses = expenses.filter((item) => item.id !== expense.id);
    setExpenses([...newExpenses, expense]);
    console.log(expense.id);
  };
  const ctxInitialValue: CtxInterface = {
    total,
    expenses,
    handleExpense,
  };

  useEffect(() => {
    setTotal(expenses.reduce((c, n) => c + n.total, 0));
  }, [expenses]);
  return (
    <context.Provider value={ctxInitialValue}>
      <Main />
      <Footer />
    </context.Provider>
  );
}

export default App;
