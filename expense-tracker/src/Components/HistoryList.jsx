import React from "react";

const HistoryList = ({ type, amount }) => {
  return (
    <div className="history-item">
      <p>
        {type.toUpperCase()}: ${amount}
      </p>
    </div>
  );
};

export default HistoryList;
