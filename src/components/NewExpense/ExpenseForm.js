import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  // const [showExpenseForm, setShowExpenseForm] = useState(false);

  const titleChangeHandler = (event) => {
    // event.preventDefault();
    // setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // event.preventDefault();
    // setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    // event.preventDefault();
    // setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: userInput.enteredDate,
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });

    // setShowExpenseForm(!showExpenseForm);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
