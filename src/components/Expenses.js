import { useState } from 'react';

import Card from './Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpensesFilter';
const Expenses = (props) => {
  console.log(props);

  const [filteredYear, setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

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
  return (
    <Card>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <div>{extensesToReader}</div>;
    </Card>
  );
};
export default Expenses;
