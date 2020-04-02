import React, {Component} from "react"
import '../style/App.css';

class ExpenseEntry extends Component{
    render() {
        return (
            <div>
                <h1>
                    Simple expense manager
                </h1>
                <div className="form-inline form-group">
                    <label htmlFor="payment-type" className="form-label">Type: </label>
                     <select className="form-input" name="payment-type" id="payment-type" defaultValue={"cash"}>
                        <option value="cash">Cash
                        </option>
                        <option value="card">Card
                        </option>
                        <option value="crypto">Cryptocurrency</option>
                        <option value="other">Other</option>
                    </select>
                    <label htmlFor="spend-desc" className="form-label">Name: </label>
                    <input type="dropdown" className="form-input" id="spend-desc" name="spend-desc" placeholder="What you spent on"></input>
                </div>
                <div className="form-inline form-group">

                    <label className="form-label" htmlFor="date-spent">Date: </label>
                    <input type="text" className="form-input" id="datepicker" name="date-spent"></input>
                    <label htmlFor="amount-spent">Amount: </label>
                    <input type="dropdown" className="form-input" id="amount-spent" name="amount-spent" required></input>
                </div>
                <div className="form-inline">
                    <button onClick={() => this.props.onAddExpense} type="button" className="add-button btn btn-primary btn-lg" id="add-expense-btn">Add a new expense</button>
                </div>
                <div className="form-inline" id="expense-table">
                    <table className="table table-striped table-hover" id="tfc">
                        <thead> 
                        <tr>
                            <th></th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }
}

export default ExpenseEntry