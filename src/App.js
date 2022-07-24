import react from "react";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import Expenses from "./components/Expenses/Expenses"

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Home Rental',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New Phone', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 300.00,
      date: new Date(2022, 7, 5),
    },
    {
      id: 'e4',
      title: 'New Bicycle',
      amount: 400.00,
      date: new Date(2022, 7, 22),
    },
  ];
  const addExpenseHandler = expense =>{
    console.log("In App.js");
    console.log(expense);
  }

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}/>
      
    </div>
  );
}

export default App;