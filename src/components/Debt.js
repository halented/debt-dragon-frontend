import React from 'react';

function AddNewDebt (props) {
    return (
      <div className="new-debt-box">
        <label>Type:</label><br/>
        <select>
          <option value="studentLoan">Student Loan</option>
          <option value="personalLoan">Personal Loan</option>
          <option value="mortgage">Mortgage</option>
          <option value="carPayment">Car Payment</option>
          <option value="other">Other</option>
        </select><br/>
        <label>Amount:</label><br/>
        <input type="text"></input><br/>
        <label>Interest Rate:</label><br/>
        <input type="text"></input><br/>
        <label>Minimum Monthly Payment:</label><br/>
        <input type="text"></input><br/>
      </div>
    );
}

export default AddNewDebt;
