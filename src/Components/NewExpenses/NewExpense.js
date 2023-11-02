import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpensesHandler = (expenseData) => {
    const enteredExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(enteredExpenseData);
    setIsEditing(false);
  };

  const startIsEditingHandler = () => {
    setIsEditing(true);
  };

  const stopIsEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startIsEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpense={saveExpensesHandler}
          onCancel={stopIsEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
