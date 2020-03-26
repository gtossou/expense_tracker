import React from "react"

function Expense(props){
    console.log(props)
    return(

    // 
    //     <table class="table table-striped" id="expenses-table">
    //         <thead>
    //         <tr>
    //             <th colspan="4">LIST OF YOUR EXPENSES</th>
    //         </tr>
    //         </thead>
    //         <tr>
    //         <td>
    //             First
    //         </td>
    //         <td>
    //             First
    //         </td>
    //         <td>
    //             First
    //         </td>
    //         <td>
    //             First
    //         </td>
    //         </tr>
    //     </table>
    // </div>
        <tbody>
            <tr>
                <td><button type="button" data-index={props.expense.index} className="test btn btn-default btn-sm"><span className="glyphicon glyphicon-question-sign"></span></button>
                </td>
                <td>{props.expense.paymentType}</td>
                <td>{props.expense.description}</td>
                <td>{props.expense.dateValue}</td>
                <td>{props.expense.amountSpent}</td>
            </tr>
        </tbody>
    )
}

export default Expense