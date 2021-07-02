import { useState } from 'react';
const ExpenseForm = () => {
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
  return (
    <form>
      <div>
        <div>
          <label>Title</label>
          <input type='text' onChange={userInput.enteredTitle} />
        </div>
        <div>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={userInput.enteredAmount}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type='date'
            min='2020-01-01'
            max='2022-12-31'
            onChange={userInput.enteredDate}
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
