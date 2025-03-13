import React, { use, useState } from "react";
import Balance from "./Components/Balance";
import Transactions from "./Components/Transactions";
import AddTransactions from "./Components/AddTransactions";
import history from "./history";
import HistoryList from "./Components/HistoryList";
import "./app.css";

const App = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  function addTransaction(newTransaction) {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
  }

  const transactionHistory = transactions.map((item) => (
    <HistoryList type={item.type} text={item.text} amount={item.amount} />
  ));

  return (
    <>
      <h1>Expense Tracker</h1>
      <Balance transactions={transactions} />
      <Transactions transactions={transactions} />
      <AddTransactions addTransaction={addTransaction} />

      {transactions.length > 0 && (
        <>
          <h3>Transaction History</h3>
          <hr />
          <div className="history-list">{transactionHistory}</div>
        </>
      )}
    </>
  );
};

export default App;
