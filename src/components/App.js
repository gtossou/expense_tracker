import React from 'react';
import '../style/App.css';
import Expense from "./Expense"

function App() {

  const empty = [{
    index : 0,
    expenseok : "",
    dateValue : "H"
  }]
  const storedExpenses = JSON.parse(localStorage.getItem("expense")) || empty
  console.log(storedExpenses)
  let Ex = storedExpenses.map(expense => {
    return (<Expense key={expense.index} expense={expense}/>)
  })
  // console.log(Ex)
  console.log("Ex")
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
