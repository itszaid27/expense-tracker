import React from "react";

const ExpenseForm = () => {
  return (
    <>
      <div className="expenseform">
        <h4>Add new transaction</h4>
        <hr />

        <form action="">
          <label htmlFor="">Text</label>
          <br />
          <input type="text" name="text" id="text" placeholder="Ex:Rent" />
          <br />
          <label htmlFor="">Amount</label>
          <br />
          <input type="number" name="text" id="text" placeholder="Ex:Rent" />
        </form>
      </div>
    </>
  );
};

export default ExpenseForm;
