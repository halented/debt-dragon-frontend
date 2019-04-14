import React, { Component } from 'react';
import Debt from './Debt'

class SignUp extends Component {
  constructor(props){
    super(props)

    this.state= {

    }
  }

  render() {
    return (
      <div>
      SIGN UP!!!!!!
      <br/>
      <br/>
        <form onClick={(ev) => this.props.handleSubmit(ev)}>
          <label>First Name:</label><br/>
          <input type="text"></input><br/>
          <label>Last Name:</label><br/>
          <input type="text"></input><br/>
          <label>User Name:</label><br/>
          <input type="text"></input><br/>

          <div className="monthly-expenses-box">
            <label>Rent:</label><br/>
            <input type="text"></input><br/>
            <p>(If you own a home and pay mortgage, please account for this in the "Debts" section.)</p>
            <label>Rent:</label><br/>
            <input type="text"></input><br/>
            <label>Rent:</label><br/>
            <input type="text"></input><br/>
            <label>Rent:</label><br/>
            <input type="text"></input><br/>
          </div>
          <br/><button onClick={(ev) => this.props.addNewDebt(ev)}>Add Debt</button><br/>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default SignUp;
