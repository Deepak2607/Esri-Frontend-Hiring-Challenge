import React from 'react';

const Transaction =(props)=> {

    return (   
        <tr>
            <td>{props.id}</td>
            <td>{props.account_no}</td>
            <td>{props.date}</td>
            <td>{props.transaction_details}</td>
            <td>{props.value_date}</td>
            <td>{props.withdrawal_amt}</td>
            <td>{props.deposit_amt}</td>
            <td>{props.balance_amt}</td>
        </tr>
       )  
}

export default Transaction;


