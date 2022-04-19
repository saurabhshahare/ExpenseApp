import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expensedData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expensedData);
    props.onAddExpense(expensedData);
    setIsEditing(!isEditing);
  };

  const toggleIsEditing = (event) => {
    event.preventDefault();
    setIsEditing(!isEditing);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={toggleIsEditing}>
          Add Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleIsEditing}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
