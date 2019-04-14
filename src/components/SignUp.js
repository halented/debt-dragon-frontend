import React, { Component } from 'react';
import DebtForm from './DebtForm'

class SignUp extends Component {
  constructor(props){
    super(props)

    this.state= {
      rent: "",
      utilities: "",
      foodEntertainment: "",
      other: ""
    }

    this.updateExpenses = this.updateExpenses.bind(this)
  }

  updateExpenses(ev){
    console.log("Updating expenses")
  }

  renderDebtForms(number){
    let temp = []
    for(let i=0; i<number; i++){
      temp.push("ha")
    };
    return(
      temp.map((ha, index) => {
        return <DebtForm key={index} usable={index}/>}
    ))
  }

  onExpensesChange(ev) {

    let key = ev.target.name;
    let value = ev.target.value;

    let state = {}
    state[key] = value

    console.log('single controlled state', state)
    this.setState(state)
  }

  render() {
    return (
      <div>
      <br/>
        <form onSubmit={(ev) => this.props.handleSubmit(ev)}>
          <label>First Name:</label><br/>
          <input type="text" id="firstName" name="firstName" value={this.props.state.firstName} onChange={(ev) => this.props.onChange(ev)}></input><br/>
          <label>Last Name:</label><br/>
          <input type="text" id="lastName" name="lastName" value={this.props.state.lastName} onChange={(ev) => this.props.onChange(ev)}></input><br/>
          <label>User Name:</label><br/>
          <input type="text" id="username" name="username" value={this.props.state.username} onChange={(ev) => this.props.onChange(ev)}></input><br/>
          <label>Income:</label><br/>
          <input type="text" id="income" name="income" value={this.props.state.income} onChange={(ev) => this.props.onChange(ev)}></input><br/>
          <div className="monthly-expenses-box">
            <label>Rent:</label><br/>
            <input type="text" id="rent" name="rent" value={this.state.rent} onChange={(ev) => this.onExpensesChange(ev)} onSubmit={(ev) => this.updateExpenses(ev)}></input><br/>
            <label>Utilities:</label><br/>
            <input type="text" id="utilities" name="utilities" value={this.state.utilities} onChange={(ev) => this.onExpensesChange(ev)} onSubmit={(ev) => this.updateExpenses(ev)}></input><br/>
            <label>Food/Entertainment:</label><br/>
            <input type="text" id="foodEntertainment" name="foodEntertainment" value={this.state.foodEntertainment} onChange={(ev) => this.onExpensesChange(ev)} onSubmit={(ev) => this.updateExpenses(ev)}></input><br/>
            <label>Other:</label><br/>
            <input type="text" id="other" name="other" value={this.state.other} onChange={(ev) => this.onExpensesChange(ev)} onSubmit={(ev) => this.updateExpenses(ev)}></input><br/>
          </div>
          <br/><button onClick={(ev) => this.props.addNewDebt(ev)}>Add Debt</button><br/>


          {this.renderDebtForms(this.props.numberOfDebts)}

          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default SignUp;
