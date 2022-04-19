import "./ExpenseDate.css";

function ExpenseDate(props) {
  let month;
  let day;
  // console.log("date.............", typeof props.date);
  let year;

  if (typeof props.date == "string") {
    let newDate = new Date(
      props.date.toLocaleString("en-US", { year: "numeric" })
    );
    day = newDate.toLocaleString("en-US", { day: "2-digit" });
    month = newDate.toLocaleString("en-US", { month: "long" });
    year = newDate.getFullYear();
  } else {
    year = props.date.getFullYear();
    month = props.date.toLocaleString("en-US", { month: "long" });
    day = props.date.toLocaleString("en-US", { day: "2-digit" });
  }

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
