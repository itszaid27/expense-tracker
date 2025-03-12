import React from "react";

const Balance = (props) => {
  return (
    <>
      <h2>Your Balance</h2>
      <h3>${props.balance}</h3>
    </>
  );
};

export default Balance;
