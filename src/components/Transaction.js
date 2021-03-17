import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/GloablState';
export const Transaction = ({transaction}) => {
    const { deleteExpense } = useContext(GlobalContext);
    // console.log(deleteExpense);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
            {transaction.text} <span> {sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteExpense(transaction.id)}>x</button>
        </li>
    )
}
