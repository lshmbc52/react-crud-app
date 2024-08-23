import React, {Component} from 'react';
import './ExpenseLIst.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({initialExpenses, handleDelete}) => {
    return (
        <>
        <ul className="list">

            {initialExpenses.map(expense => {
                return (
                    <ExpenseItem key={expense.id} expense={expense}
                                 handleDelete={handleDelete}
                    />
                )
            })}
        </ul>
    <button className="btn">
        목록지우기
    </button>
    </>

)
}

export default ExpenseList