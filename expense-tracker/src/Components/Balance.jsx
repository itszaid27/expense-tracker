import React from "react";

const Balance = ({ transactions }) => {
  const calculateTotal = (type) =>
    transactions
      .filter((t) => t.type === type)
      .reduce((total, t) => total + t.amount, 0);

  const totalIncome = calculateTotal("income");
  const totalExpense = calculateTotal("expense");

  const balance = totalIncome - totalExpense;

  const styles = {
    color: balance > 0 ? "green" : balance < 0 ? "red" : "#000000",
    fontSize: "35px",
  };
  return (
    <>
      <h2>Your Balance</h2>
      <h3 style={styles}>${balance}</h3>
    </>
  );
};

export default Balance;
