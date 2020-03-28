import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import * as serviceWorker from './serviceWorker';

function getStorage(){
  return JSON.parse(localStorage.getItem("expense")) || [];
}

document.addEventListener("click",function(event){
  console.log(event.target.className)
  if (event.target.className.includes("add-button")){
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
    
    let expenseList = getStorage()
    expenseList.push(newExpense);
    // expenseList = expenseList.forEach((expense,index)=>expense.index=index)  
    for (let i = 0; i<expenseList.length; i ++) {
      expenseList[i].index = i;
    }
    localStorage.setItem("expense", JSON.stringify(expenseList));
    ReactDOM.render(
      <React.StrictMode>
        <App /> 
      </React.StrictMode>,
    // document.querySelector('#expenses-table')
    document.querySelector('#expense-table')
    )
  }
  else if (event.target.className.includes("del-img")){
    let indexVal = event.target.dataset.index
    let expenses = JSON.parse(localStorage.getItem("expense"))

    console.log(expenses.index === indexVal)

    if (indexVal){
      expenses = expenses.filter(exp => exp.index !=  indexVal)
      console.log(expenses)
      localStorage.setItem("expense", JSON.stringify(expenses)); 
    }
    
  }
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
