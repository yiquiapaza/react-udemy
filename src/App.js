import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 92.13,
      date: new Date(2020, 7, 14)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.43,
      date: new Date(2021, 2, 14)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 2)
    }
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js')
    console.log(expense);
  }

  //Advice, you need to always use **key** when you use map function with Arrays
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
