import { useState } from 'react';

import Card from './Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpensesFilter';
import './Card.css';
import './Expenses.css';

const Expenses = (props) => {
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
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {extensesToReader};
      </Card>
    </div>
  );
};
export default Expenses;
