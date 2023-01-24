import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) =>{
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString,
      }
      props.onAddExpense(expenseData);
      setIsEditing(false);
  }
  
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = ()=>{
    setIsEditing(true);
  }

  const stopEditingHandler = ()=>{
    setIsEditing(false);
  }
  
  return (
    <div className="new-expense">
      

      {isEditing ? <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {stopEditingHandler}/>:  <button onClick={startEditingHandler}>Add New Expenses</button>}
     
    </div>
  );
};

export default NewExpense;
