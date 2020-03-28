import React from 'react';
import '../style/App.css';
import Expense from "./Expense"

function App() {

  const empty = [{
    index : 0,
    paymentType : "",
    description : "",
    dateValue : "",
    amountSpent : ""
  }]
  let storedExpenses = JSON.parse(localStorage.getItem("expense")) || empty
  let Ex = storedExpenses.filter(expense=>expense.paymentType && expense.description && expense.dateValue && expense.amountSpent)
  Ex = Ex.map(expense => {
    return (<Expense key={expense.index} expense={expense}/>)
  })

  return (<div><table className="table table-striped table-hover">
    <thead>
        <tr><th></th>
            <th>Type</th>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>   
        </tr>
    </thead>
    {Ex}
    </table></div>)
}
export default App
