import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+';
    const signColor = transaction.amount < 0 ? 'minus' : 'plus'

    return (
        <li className={signColor}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}

export default Transaction
