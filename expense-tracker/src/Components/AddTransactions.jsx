import React, { useState } from "react";

const AddTransactions = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim() || !amount) {
      alert("Please enter valid text and amount.");
      return;
    }
    const newTransaction = {
      text,
      amount: Number(amount),
      type,
    };

    addTransaction(newTransaction);

    setText("");
    setAmount("");
  }

  return (
    <>
      <h3 className="add-transaction-text">Add new Transactions</h3>
      <hr />
      <form onSubmit={handleSubmit} className="transaction-form">
        <label>Text</label>
        <input
          type="text"
          name="text"
          placeholder="Rent"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <label>Amount</label>
        <input
          type="number"
          name="amount"
          placeholder="$1000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="transaction-type">
          <button
            type="button"
            onClick={() => setType("income")}
            className={type === "income" ? "income-btn selected" : "income-btn"}
          >
            Income
          </button>
          <button
            type="button"
            onClick={() => setType("expense")}
            className={
              type === "expense" ? "expense-btn selected" : "expense-btn"
            }
          >
            Expense
          </button>
        </div>

        <button type="submit" className="submit-btn">
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default AddTransactions;
