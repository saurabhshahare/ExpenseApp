import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
// import ExpensesList from "./ExpensesList";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState(2022);

  const yearToFilterHandler = (year) => {
    props.yearToFilter(year);
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    if (typeof expense.date == "string") {
      let newDate = new Date(
        expense.date.toLocaleString("en-US", { year: "numeric" })
      );
      return newDate.getFullYear().toString() === selectedYear;
    } else {
      return expense.date.getFullYear().toString() === selectedYear;
    }
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        yearToFilter={yearToFilterHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList expenses={filteredExpenses}></ExpensesList>
      {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          ></ExpenseItem>
        ))} */}
      {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem> */}
    </Card>
  );
}

export default Expenses;
