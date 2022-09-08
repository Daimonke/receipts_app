import Button from "../common/Button";
import Select from "../common/Select";
import { v4 as uuidv4 } from "uuid";

type Props = {
  expense: {
    id: string;
    total: number;
  };
};

const ExpensesNav = ({ expense }: Props) => {
  return (
    <nav className="expensesNav">
      <Select />
      <Button variant="outlined">Add expense</Button>
    </nav>
  );
};

export default ExpensesNav;
