import React, { useState } from "react";
import Balance from "./Components/Balance";
import Transactions from "./Components/Transactions";
import ExpenseForm from "./Components/ExpenseForm";
import TransactionType from "./Components/TransactionType";
import history from "./history";
import HistoryList from "./Components/HistoryList";

import "./app.css";
const App = () => {
  const [balance, setBalance] = useState(0);

  function increment() {
    setBalance((balance) => balance + 10);
  }
  function decrement() {
    setBalance((balance) => balance - 10);
  }

  const transactionHistory = history.map((item) => (
    <HistoryList key={item.id} type={item.type} amount={item.amount} />
  ));

  return (
    <>
      <h1>Expense Tracker</h1>
      <Balance balance={balance} />
      <Transactions />
      <ExpenseForm />
      <TransactionType />
      {transactionHistory}
    </>
  );
};

export default App;
