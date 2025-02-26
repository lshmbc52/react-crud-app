import React, {Component} from 'react';
import './ExpenseLIst.css';
import ExpenseItem from './ExpenseItem';
import {MdDelete, MdEdit} from "react-icons/md";

const ExpenseList = ({expenses, initialExpenses, handleDelete,handleEdit,clearItems}) => {
    return (
    <>
        <ul className="list">

            {initialExpenses.map(expense => {
                return (
                    <ExpenseItem key={expense.id} expense={expense}
                                 handleDelete={handleDelete} handleEdit={handleEdit}
                    />
                )
            })}
        </ul>
    {expenses.length > 0 ?
    <button className="btn" onClick={clearItems}>
    목록지우기
    <MdDelete className='btn-icon'/>
    </button>
    :null
    }
    </>
    )
}

export default ExpenseList