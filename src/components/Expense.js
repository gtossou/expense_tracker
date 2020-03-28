import React from "react"
import cash from '../img/cash.png';
import card from '../img/card.png';
import crypto from '../img/crypto.png';
import other from '../img/other.png';
import del from "../img/del.png"

function getImg(propValue){
    if (propValue ==="cash"){
        return cash
    }
    else if (propValue ==="card"){
        return card
    }
    else if (propValue ==="crypto"){
        return crypto
    }
    else return other
}
function Expense(props){

    return(
        
        <tbody>
            <tr>
                <td><button type="button" className="delete btn btn-default btn-sm">
                    <img data-index={props.expense.index} src={del} className="del-img"/></button>
                </td>
                <td><button type="button" data-index={props.expense.index} className="btn btn-default btn-sm">
                    <img src={getImg(props.expense.paymentType)} className="type-img"/></button></td>
                <td>{props.expense.description}</td>
                <td>{props.expense.dateValue}</td>
                <td>{props.expense.amountSpent}</td>
            </tr>
        </tbody>
    )
}

export default Expense 
