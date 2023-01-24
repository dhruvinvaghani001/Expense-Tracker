import "./App.css";
import ExpenseDate from "./components/Expense/ExpenseDate";
import ExpenseIteam from "./components/Expense/ExpenseIteam";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React,{useState} from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car expense",
    date: new Date(2019, 2, 29),
    price: 225,
  },
  {
    id: "e12",
    title: "Car Insurance expense",
    date: new Date(2019, 3, 5),
    price: 120,
  },
  {
    id: "e2",
    title: "Mobile expense",
    date: new Date(2020, 2, 25),
    price: 347,
  },
  {
    id: "e22",
    title: "Mobile Bill expense",
    date: new Date(2020, 6, 15),
    price: 50,
  },
  {
    id: "e3",
    title: "Laptop expense",
    date: new Date(2021, 2, 25),
    price: 448,
  },
  {
    id: "e32",
    title: "Electric Bill expense",
    date: new Date(2021, 5, 12),
    price: 80,
  },
  // {
  //   id: "e4",
  //   title: "Tracking Bag expense",
  //   date: new Date(2022, 8, 8),
  //   price: 450,
  // },
  // {
  //   id: "e5",
  //   title: "Travel expense",
  //   date: new Date(2022, 8, 26),
  //   price: 550,
  // },
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
