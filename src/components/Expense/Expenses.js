import "./Expenses.css";
import ExpenseIteam from "./ExpenseIteam";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart'
function Expenses(props) {
  const [year, setYear] = useState("2020");
  const filteChnageHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.iteams.filter(
    (expenses) => expenses.date.getFullYear() == year
  );

 
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filteChnageHandler} selected={year} />
        <ExpensesChart expenses={filteredExpenses}/>

        <ExpensesList iteams = {filteredExpenses}/>

      </Card>
    </div>
  );
}

export default Expenses;
