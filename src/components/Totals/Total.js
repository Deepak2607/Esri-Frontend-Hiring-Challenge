import React from 'react';

const Total =(props)=> {

    return (   
        <tr>
            <td>{props.id}</td>
            <td>{props.date}</td>
            <td>{props.transactions}</td>
            <td>{props.amount_transferred}</td>
        </tr>
       )  
}

export default Total;


