import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const titleChangeHandler = (e) => {
    setEnterTitle(e.target.value);
  };

  const [enterAmount, setEnterAmount] = useState("");
  const amountChangeHandler = (e) => {
    setEnterAmount(e.target.value);
  };

  const [enterDate, SetEnterDate] = useState("");
  const dateChangeHandler = (e) => {
    SetEnterDate(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      title: enterTitle,
      price: enterAmount,
      date: new Date(enterDate),
    };

    props.onSaveExpenseData(data);

    setEnterAmount("");
    setEnterTitle("");
    SetEnterDate("");
  };

  return (
    <form onSubmit={formSubmitHandler} >
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enterAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enterDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
