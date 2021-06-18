import React from 'react'

const Transaction = ({ transaction }) => {

    const sign = transaction.amount < 0 ? '-' : '+';
    const signColor = transaction.amount < 0 ? 'minus' : 'plus'

    return (
        <li className={signColor}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
        </li>
    )
}

export default Transaction
