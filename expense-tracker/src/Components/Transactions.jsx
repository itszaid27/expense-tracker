import React from "react";
import "../app.css";

const Transactions = () => {
  return (
    <div className="transaction">
      <div className="income">
        <h2>Income</h2>
        <h3>0.00</h3>
      </div>
      <div className="separator"></div>
      <div className="expenses">
        <h2>Expense</h2>
        <h3>0.00</h3>
      </div>
    </div>
  );
};

export default Transactions;
