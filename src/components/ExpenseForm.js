import { useState } from 'react';
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
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = { ...userInput };
    props.onSaveExpenseData(expenseData);
    setUserInput({ enteredTitle: '', enteredAmount: '', enteredDate: '' });
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>Title</label>
          <input
            type='text'
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={userInput.enteredAmount}
            onChange={amountChangedHandler}
          />
        </div>
        <div>
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
      <div>
        <button type='submint'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
