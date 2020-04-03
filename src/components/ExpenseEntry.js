import React, {Component} from "react"
import '../style/App.css';

class ExpenseEntry extends Component{
    render() {
        return (
            <div>
                <form className="text-center border border-light p-5">

                    <p className="h1 mb-4">Simple expense tracker</p>

                    <div className="form-row mb-4 justify-content-md-center">
                        <div className="col-3">
                            <select className="form-control" name="payment-type" id="payment-type" defaultValue={"cash"}>
                                <option value="cash">Cash
                                </option>
                                <option value="card">Card
                                </option>
                                <option value="crypto">Cryptocurrency</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <input type="date" className="form-input" id="datepicker" className="form-control"/>
                        </div>
                    </div>
                    <input type="text" id="spend-desc" className="mb-4 justify-content-md-center col-6" placeholder="Expense details..."/>
                    <div className="justify-content-md-center">
                    <input type="text" id="amount-spent" className="justify-content-md-center col-6" placeholder="Amount"/>
                    </div>

                    <button onClick={() => this.props.onAddExpense()} id="add-expense-btn" className="btn btn-info my-4 justify-content-md-center col-6" type="submit">SUBMIT</button>

            </form>
            </div>
            
        )
    }
}

export default ExpenseEntry