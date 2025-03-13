import React, { useState } from "react";
import Balance from "./Components/Balance";
import Transactions from "./Components/Transactions";
import ExpenseForm from "./Components/ExpenseForm";
import TransactionType from "./Components/TransactionType";
import History from "./Components/History";

import "./app.css";
const App = () => {
  const [balance, setBalance] = useState(0);

  function increment() {
    setBalance((balance) => balance + 10);
  }
  function decrement() {
    setBalance((balance) => balance - 10);
  }

  return (
    <>
      <h1>Expense Tracker</h1>
      <Balance balance={balance} />
      <Transactions />
      <ExpenseForm />
      <TransactionType />
    </>
  );
};

export default App;
