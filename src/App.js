import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import SignUp from './components/SignUp'
import Login from './components/Login'
import Profile from './components/Profile'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userExists: false,
      firstName: "",
      lastName: "",
      username: "",
      debts: [],
      expenses: 0,
      income: "",
      selectedPlan: null,
      numberOfDebts: 1
    }
    this.addNewDebt = this.addNewDebt.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  addNewDebt(ev){
    ev.preventDefault()
    console.log("ADDING A NEW DEBT")
    this.setState({numberOfDebts: this.state.numberOfDebts + 1})
  }

  handleSubmit(ev){
    ev.preventDefault()
    let tempArr = []
    for(let i=0; i < this.state.numberOfDebts; i++){
      let obj = {}
    let typ = document.getElementById(i).children[2].value
    let amt = document.getElementById(i).children[6].value
    let int = document.getElementById(i).children[10].value
    let minpay = document.getElementById(i).children[14].value
      obj['type'] = typ
      obj['amount'] = amt
      obj['interest'] = int
      obj['minimumPayment'] = minpay
      tempArr.push(obj)
    }

    let rent = document.getElementById('rent')
    let utilities = document.getElementById('utilities')
    let foodEntertainment = document.getElementById('foodEntertainment')
    let other = document.getElementById('other')

    let total = (parseInt(rent.value) + parseInt(utilities.value) + parseInt(foodEntertainment.value) + parseInt(other.value))

    let firstName = document.getElementById('firstName')
    let lastName = document.getElementById('lastName')
    let username = document.getElementById('username')
    let income = document.getElementById('income')


    this.setState({
      debts: tempArr,
      firstName: firstName.value,
      lastName: lastName.value,
      username: username.value,
      income: income,
      expenses: total,
      });

  }

  onChange(ev) {

    let key = ev.target.name;
    let value = ev.target.value;

    let state = {}
    state[key] = value

    console.log('single controlled state', state)
    this.setState(state)
  }

  render() {
    return (
      <div className="App">
        WELCOME TO DEBT-DRAGON!
        <>
          <Router>
            <div>
              {this.state.userExists ?
              <NavLink to="/profile">Profile</NavLink>
              :
              <>
              <NavLink to="/signup">SignUp</NavLink>
              <NavLink to="/login">Login</NavLink>
              </>
              }
              <div>
              <Route path="/login" component={Login}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/signup" render={(props) => (
                <SignUp {...props} onChange={this.onChange} state={this.state} debts={this.state.debts} addNewDebt={this.addNewDebt} handleSubmit={this.handleSubmit} numberOfDebts={this.state.numberOfDebts}/>
              )} />
              </div>
            </div>
          </Router>
        </>
      </div>
    );
  }
}

export default App;
