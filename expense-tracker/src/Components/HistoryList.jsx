import React from "react";

const HistoryList = ({ id, text, type, amount }) => {
  const styles = {
    backgroundColor: type === "income" ? "green" : "red",
    color: "white",
  };
  return (
    <>
      <div style={styles} className="history-item">
        <p>
          {text}: ${amount}
        </p>
      </div>
    </>
  );
};

export default HistoryList;
