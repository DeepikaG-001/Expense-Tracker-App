import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  const saveExpenseDataHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };
    props.onSaveExpense(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={saveExpenseDataHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            max="20000"
            min="1"
            onChange={amountHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="01-01-2019"
            max="31-12-2024"
            onChange={dateHandler}
            value={date}
          />
        </div>
      </div>
      <div>
        <button type="button">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
