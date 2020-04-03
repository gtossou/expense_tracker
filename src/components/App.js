import React, {Component} from 'react';
import Expense from "./Expense"
import ExpenseEntry from './ExpenseEntry';

function getStorage(){
  return JSON.parse(localStorage.getItem("expense")) || [];
}

class App extends Component {
  state = {
    storedExpenses : getStorage() //|| false
  }
  
  delExpense=(id)=>{
      let expenseList = getStorage()
      if (id || id===0){
        expenseList = expenseList.filter(exp => exp.index != id)
        for (let i = 0; i<expenseList.length; i ++) {
          expenseList[i].index = i;
        }
        localStorage.setItem("expense", JSON.stringify(expenseList)); 
        this.setState({storedExpenses : getStorage()})
      } 
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
    
    if (description !="" && dateValue!="" && amountSpent!=""){
      let expenseList = getStorage()
      expenseList.push(newExpense);
      for (let i = 0; i<expenseList.length; i ++) {
        expenseList[i].index = i;
      }
      localStorage.setItem("expense", JSON.stringify(expenseList));
      this.setState({ storedExpenses: getStorage() });
    }   
  }
  render(){
    return(
      <div>
        <ExpenseEntry onAddExpense = {this.addExpense}/>
        <Expense expenses = {this.state.storedExpenses} onDelExpense= {this.delExpense}/>
      </div>
    )
  }
}

export default App
