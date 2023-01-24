import "./Expenses.css";
import ExpenseIteam from "./ExpenseIteam";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [year, setYear] = useState("2020");
  const filteChnageHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filteChnageHandler} selected={year} />

        {props.iteams.map((expense) => (
          <ExpenseIteam
            title={expense.title}
            date={expense.date}
            price={expense.price}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
