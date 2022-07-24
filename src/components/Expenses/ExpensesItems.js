import react, { useState } from 'react';
import Card from '../UI/Card';
import ExpemseDate from './ExpenseDate';
import './ExpensesItems.css';

function ExpenseItem(props) {
 
  const [title, setTitle] = useState(props.title);


  const clickHandler = () => {
    setTitle("updated!")
    console.log(title);
  }


  return (
    <Card className='expense-item'>
      <ExpemseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>CHANGE NAME</button>
    </Card >
  );
}

export default ExpenseItem;