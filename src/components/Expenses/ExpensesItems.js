import react from 'react';
import Card from '../UI/Card';
import ExpemseDate from './ExpenseDate';
import './ExpensesItems.css';

const ExpenseItems =(props)=> {
 
  


  return (
    <li>
    <Card className='expense-item'>
      <ExpemseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      
    </Card >
    </li>

  );
}

export default ExpenseItems;