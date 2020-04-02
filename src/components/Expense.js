import React,{Component} from "react"
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

class Expense extends Component{
    render(){
        const constrows = this.props.expenses.map((exp) =>  (
            <tr>
                <td><button type="button" className="delete btn btn-default btn-sm">
                    <img data-index={exp.index} src={del} className="del-img"/></button>
                </td>
                <td><button type="button" data-index={exp.index} className="btn btn-default btn-sm">
                    <img src={getImg(exp.paymentType)} className="type-img"/></button></td>
                <td>{exp.description}</td>
                <td>{exp.dateValue}</td>
                <td>{exp.amountSpent}</td>
            </tr>
        ))
        return(            
        this.props.expenses ? <table><tbody>{constrows}</tbody></table> : <p>Nothing to show</p>
        )
    }
}

export default Expense 
