import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import { collection, query, orderBy, limit, getDocs, startAfter, startAt } from "firebase/firestore";
import Balance from "./Components/Balance";
import Transactions from "./Components/Transactions";
import AddTransactions from "./Components/AddTransactions";
import HistoryList from "./Components/HistoryList";
import "./app.css";
import { BsXLg } from "react-icons/bs";

const PAGE_SIZE = 10;

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSnapshots, setPageSnapshots] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const fetchTransactions = async (pageNumber, direction) => {
    setLoading(true);
    try {
      let q = query(
        collection(db, "transactions"),
        orderBy("timestamp", "desc"),
        limit(PAGE_SIZE)
      );

      
  
      if (direction === "next" && pageSnapshots[pageNumber - 2]) {
        q = query(q, startAfter(pageSnapshots[pageNumber - 2]));
      } else if (direction === "prev" && pageNumber > 1) {
        q = query(q, startAfter(pageSnapshots[pageNumber - 2]));
      }

      const snapshot = await getDocs(q);
      const fetchedTransactions = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate?.() || new Date(),
      }));
  
      setTransactions(fetchedTransactions);

      console.log("Fetching transactions for page:", pageNumber, fetchedTransactions.length); 
  
      if (snapshot.docs.length > 0) {
        const last = snapshot.docs[snapshot.docs.length - 1];
  
        setPageSnapshots(prevSnapshots => {
          const newSnapshots = [...prevSnapshots];
          newSnapshots[pageNumber - 1] = last;
          return newSnapshots;
        });
      }
  
      setHasMore(snapshot.docs.length === PAGE_SIZE);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTransactions(1, "next");
  }, []);

  const handleNextPage = () => {
    if (hasMore) {
      setPage(prev => prev + 1);
      fetchTransactions(page + 1, "next");
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
      fetchTransactions(page - 1, "prev");
    }
  };

  return (
    <>
      <h1>Expense Tracker</h1>
      <Balance transactions={transactions} />
      <Transactions transactions={transactions} />
      <AddTransactions fetchTransactions={() => fetchTransactions(1, "next")} />

      {loading ? (
        <p>Loading transactions...</p>
      ) : transactions.length > 0 ? (
        <>
          <h3>Transaction History</h3>
          <hr />
          <div className="history-list">
            {transactions.map(item => (
              <HistoryList key={item.id} {...item} />
            ))}
          </div>

          <div style={{ margin: "20px", display: "flex", justifyContent: "space-between" }}>
            <button onClick={handlePrevPage} disabled={page === 1}>
              Previous
            </button>

            <span>Page {page}</span>

            <button onClick={handleNextPage} disabled={!hasMore}>
              Next
            </button>
          </div>
        </>
      ) : (
        <p>No transactions available.</p>
      )}
    </>
  );
};

export default App;
