import React from "react";
import "../app.css";
const TransactionType = () => {
  return (
    <div className="transaction-type">
      <div>
        <button className="income">Income</button>
        <button className="expense">Expense</button>
      </div>
      <button>Add Transaction</button>
    </div>
  );
};

export default TransactionType;
