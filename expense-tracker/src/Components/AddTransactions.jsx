import React, { useState } from "react";

const AddTransactions = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  function handleSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      text,
      amount: Number(amount), // Convert string to number
      type,
    };

    addTransaction(newTransaction);

    setText("");
    setAmount("");
  }

  return (
    <>
      <h3>Add new Transactions</h3>
      <hr />
      <form className="transaction-form" onSubmit={handleSubmit}>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          placeholder="Enter description"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="button-group">
          <button
            type="button"
            className="income-btn"
            onClick={() => setType("income")}
          >
            Income
          </button>
          <button
            type="button"
            className="expense-btn"
            onClick={() => setType("expense")}
          >
            Expense
          </button>
        </div>

        <button type="submit" className="add-transaction-btn">
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default AddTransactions;
