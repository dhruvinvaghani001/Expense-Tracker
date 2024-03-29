import "./ExpenseIteam.css";
import React from "react";

import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";





function ExpenseIteam(props) {
 return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
     

    </Card>
  );
}

export default ExpenseIteam;
