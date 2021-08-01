import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountChangedHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangedHandler = (event) => {
    console.log(event.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let newDate = new Date(userInput.enteredDate);
    newDate = new Date(
      newDate.getFullYear(),
      newDate.getMonth(),
      newDate.getDay()
    );
    console.log(newDate);
    console.log(newDate.getFullYear());
    console.log(userInput);
    props.onSaveExpenseData(userInput);
    setUserInput({ enteredTitle: '', enteredAmount: '', enteredDate: '' });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={userInput.enteredAmount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2020-01-01'
            max='2022-12-31'
            value={userInput.enteredDate}
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submint'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
