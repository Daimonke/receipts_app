import Button from "../common/Button";
import Select from "../common/Select";

type Props = {};

const ExpensesNav = (props: Props) => {
  const options = ["Food", "Houseware", "Entertainment"];
  return (
    <nav className="expensesNav">
      <Select />
      <Button variant="outlined">Add expense</Button>
    </nav>
  );
};

export default ExpensesNav;
