import React from "react";
import ExpenseIteam from "./ExpenseIteam";
import "./ExpensesList.css";

const ExpensesList = (props) => {

  if (props.iteams.length === 0) {
    return <h2 className="expenses-list__fallback">No Found expenses</h2>;
  }

  return (
    <ul className=".expenses-list">
      {props.iteams.map((expense) => (
        <ExpenseIteam
          key={expense.id}
          title={expense.title}
          date={expense.date}
          price={expense.price}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
