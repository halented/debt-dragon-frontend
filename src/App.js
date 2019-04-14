import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

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
      planOptions: {},
      numberOfDebts: 1,
      user_id: 0
    }
    this.addNewDebt = this.addNewDebt.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  addNewDebt(ev) {
    ev.preventDefault()
    console.log("ADDING A NEW DEBT")
    this.setState({ numberOfDebts: this.state.numberOfDebts + 1 })
  }

  handleSubmit(ev) {
    ev.preventDefault()
    let tempArr = []
    for (let i = 0; i < this.state.numberOfDebts; i++) {
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
      income: income.value,
      expenses: total,
    }, () => {this.sendInfoAndPost()});
      console.log("BEFORE RENDER")
      this.renderSelectPage()
  }

  sendInfoAndPost(){
    console.log("hi")
    fetch(`//localhost:3000/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        debts: this.state.debts,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        income: this.state.income,
        expenses: this.state.expenses,
      })
    }).then(res => res.json())
    .then(json => {
      this.setState({
        user_id: json.id,
        userExists: true,
        username: json.username
      }, () => this.createDebt())}
    )
  }

  createDebt = () => {
    this.state.debts.map(debt => {
      fetch("//localhost:3000/debts", {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          debt_type: debt.type,
          amount: debt.amount,
          interest_rate: debt.interest,
          user_id: this.state.user_id,
          min_payment: debt.minimumPayment
        })
      }).then(res => res.json())
      .then(json => {
        console.log("JSON: ", json.user_id);
        this.postingPlans(json.user_id)
      })
    });
    console.log("DONE!!!")
  }

  postingPlans = (userId) => {
    fetch(`//localhost:3000/selectPlan?user_id=${userId}`, {
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({user_id: userId})
    }
    )
    .then(response => response.json())
    .then(json => {
      console.log("BITCHIN: ", json);
      this.setState({planOptions: json})
    }
    )}

  renderSelectPage(){
    console.log("fucking hell")
  }

  onChange(ev) {

    let key = ev.target.name;
    let value = ev.target.value;

    let state = {}
    state[key] = value

    console.log('single controlled state', state)
    this.setState(state)
  }

  onLogIn = (event, username) => {
    event.preventDefault(event)
    fetch(`localhost:3000/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username
      })
    })
      .then(json => {
        if (json.status === 400) {
          return
        } else {
          console.log("HERE!!!")
          this.setState({
            user_id: json.id,
            userExists: true
          })
        }
      }
      )
  }

  render() {
    return (
      <div className="App" >
        WELCOME TO DEBT- DRAGON!
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
              <Route path="/profile" render={(props) => (
                <Profile {...props} state={this.state}/>
              )} />
              <Route path="/signup" render={(props) => (
                <SignUp {...props} onChange={this.onChange} state={this.state} debts={this.state.debts} addNewDebt={this.addNewDebt} handleSubmit={this.handleSubmit} numberOfDebts={this.state.numberOfDebts}/>
              )} />
              </div>
            </div>
          </Router>
        </>
      </div >
    );
  }
}

export default App;
