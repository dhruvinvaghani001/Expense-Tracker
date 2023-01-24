import "./App.css";
import ExpenseDate from "./components/Expense/ExpenseDate";
import ExpenseIteam from "./components/Expense/ExpenseIteam";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React,{useState} from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "car expense",
    date: new Date(2021, 2, 25),
    price: 225,
  },
  {
    id: "e2",
    title: "mobile expense",
    date: new Date(2021, 2, 25),
    price: 347,
  },
  {
    id: "e3",
    title: "laptop expense",
    date: new Date(2021, 2, 25),
    price: 448,
  },
  {
    id: "e4",
    title: "tv expense",
    date: new Date(2021, 2, 25),
    price: 448,
  },
];

function App() {
  const [expenses , setExpenses ]= useState(DUMMY_EXPENSES)
  const addExpenseHandler = (expense) =>{
    setExpenses(prevExpenses => {
      return [expense , ...prevExpenses];
    })
    
    
  }


  return (
    <div>
      <NewExpense onAddExpense ={addExpenseHandler}/>
      <Expenses iteams={expenses}/>
      
    </div>
  );
}

export default App;
