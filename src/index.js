import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import * as serviceWorker from './serviceWorker';

const touse = document.querySelector("#add-expense-btn")
localStorage.clear();

touse.addEventListener("click",function(){

  const paymentType = document.querySelector("#payment-type").value 
  const description = document.querySelector("#spend-desc").value
  const dateValue = document.querySelector("#datepicker").value 
  const amountSpent = document.querySelector("#amount-spent").value

  const newExpense = {
    index: 1,
    paymentType : paymentType,
    description : description,
    dateValue : dateValue,
    amountSpent : amountSpent
  }
  
  let expenseList = JSON.parse(localStorage.getItem("expense")) || [];
  expenseList.push(newExpense);
  // expenseList = expenseList.forEach((expense,index)=>expense.index=index)  
  for (let i = 0; i<expenseList.length; i ++) {
    expenseList[i].index = i;
  }
  console.log(expenseList)
  localStorage.setItem("expense", JSON.stringify(expenseList));
  ReactDOM.render(
    <React.StrictMode>
      <App /> 
    </React.StrictMode>,
  // document.querySelector('#expenses-table')
  document.querySelector('#expense-table')
  )
  
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
