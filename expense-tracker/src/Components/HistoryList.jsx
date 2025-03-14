import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const HistoryList = ({ id, text, type, amount, deleteTransaction }) => {
  const styles = {
    backgroundColor: type === "income" ? "#3b7c3b" : "#e02b2b",
    color: "white",
  };

  function handleDelete() {
    deleteTransaction(id);
  }

  return (
    <div style={styles} className="history-item">
      <p>
        {text}: ${amount}
      </p>
      <button onClick={handleDelete}>del</button>
    </div>
  );
};

export default HistoryList;
