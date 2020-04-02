import React, {Component} from 'react';
import Expense from "./Expense"
import ExpenseEntry from './ExpenseEntry';

function getStorage(){
  return JSON.parse(localStorage.getItem("expense")) || [];
}

class App extends Component {
  state = {
    storedExpenses : getStorage() || false
  }
  
  addExpense=()=>{

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
    console.log("adddd")
    console.log(getStorage())
    this.setState((currentState) => ({
      storedExpenses : getStorage()
    }))
  }
  render(){
    return(
      <div>
        <ExpenseEntry />
        <Expense expenses = {this.state.storedExpenses} onAddExpense = {this.addExpense}/>
      </div>
    )
  }
}
/*//   const empty = [{
//     index : 0,
//     paymentType : "",
//     description : "",
//     dateValue : "",
//     amountSpent : ""
//   }]
//   let storedExpenses = JSON.parse(localStorage.getItem("expense")) || empty
//   let Ex = storedExpenses.filter(expense=>expense.paymentType && expense.description && expense.dateValue && expense.amountSpent)
//   Ex = Ex.map(expense => {
//     return (<Expense key={expense.index} expense={expense}/>)
//   })

//   return (<div><table className="table table-striped table-hover">
//     <thead>
//         <tr><th></th>
//             <th>Type</th>
//             <th>Description</th>
//             <th>Date</th>
//             <th>Amount</th>   
//         </tr>
//     </thead>
//     {Ex}
//     </table></div>)
// }*/
export default App
