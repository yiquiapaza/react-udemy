import Card from './Card';
import ExpenseItem from './ExpenseItem';

import './Card.css';
import './Expenses.css'

const Expenses = (props) => {
  console.log(props);

  let extensesToReader = props.expenses.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });
  return <Card className="expenses">{extensesToReader}</Card>;
};
export default Expenses;
