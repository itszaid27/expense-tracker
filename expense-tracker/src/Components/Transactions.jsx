import React from "react";

const Transactions = ({ transactions }) => {
  const calculateTotal = (type) =>
    transactions
      .filter((t) => t.type === type)
      .reduce((total, t) => total + t.amount, 0);

  return (
    <div className="transaction">
      <div className="income">
        <p>Income</p>
        <p>${calculateTotal("income")}</p>
      </div>
      <div className="expenses">
        <p>Expense</p>
        <p>${calculateTotal("expense")}</p>
      </div>
    </div>
  );
};

export default Transactions;
