import Expenses from './components/Expenses';
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
  //Advice, you need to always use **key** when you use map function with Arrays
  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
