import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
//React render all components the first time then, you can't modify the DOM with simple function
//TODO: Create markdonw file, and write notes with the most important  concept that learned in this section
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle('Updated!')
  };
  return (
    <div>
      <div>
        <ExpenseDate date={props.date} />
        <h2>{title}</h2>
        <div>{props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </div>
  );
};

export default ExpenseItem;
