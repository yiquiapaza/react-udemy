import { useState } from 'react';
const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value
    });
  };
  const amountChangedHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    })
  };
  const dateChangedHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    })
  };
  return (
    <form>
      <div>
        <div>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangedHandler}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type='date'
            min='2020-01-01'
            max='2022-12-31'
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
