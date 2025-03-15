import React, { use, useState, useEffect } from "react";
import { db } from "./firebaseConfig"; 
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import Balance from "./Components/Balance";
import Transactions from "./Components/Transactions";
import AddTransactions from "./Components/AddTransactions";
import HistoryList from "./Components/HistoryList";
import "./app.css";

const App = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "transactions"),
      (snapshot) => {
        const transactionData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
  
        const sortedTransactions = transactionData.sort((a, b) => b.timestamp - a.timestamp);
  
        setTransactions(sortedTransactions);
      }
    );
  
    return () => unsubscribe();
  }, []);

  async function addTransaction(newTransaction) {
    try {
      await addDoc(collection(db, "transactions"), newTransaction);
    } catch (error) {
      console.error("Error adding transaction: ", error);
    }
  }

  async function handleDeleteTransaction(id) {
    try {
      await deleteDoc(doc(db, "transactions", id));
      console.log("Deleted transaction with id:", id);
      
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  }
  const transactionHistory = transactions.map((item) => (
    <HistoryList
      key={item.id}
      id={item.id}
      type={item.type}
      text={item.text}
      amount={item.amount}
      deleteTransaction={handleDeleteTransaction}
    />
  ));

  return (
    <>
      <h1>Expense Tracker</h1>
      <Balance transactions={transactions} />
      <Transactions transactions={transactions} />
      <AddTransactions addTransaction={addTransaction} />

      {transactions.length > 0 && (
        <>
          <h3 style={{margin:"15px"}} className="transaction-history-text">Transaction History</h3>
          <hr />
          <div className="history-list">{transactionHistory}</div>
        </>
      )}
    </>
  );
};

export default App;
