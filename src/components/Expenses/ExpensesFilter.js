import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const onYearChangeHandler = (event) => {
    props.yearToFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={onYearChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
