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
      income: 0,
      selectedPlan: null,
      numberOfDebts: 1,
      user_id: 0
    }
    this.addNewDebt = this.addNewDebt.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    console.log(tempArr)
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
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/signup" render={(props) => (
                  <SignUp {...props} debts={this.state.debts} addNewDebt={this.addNewDebt} handleSubmit={this.handleSubmit} numberOfDebts={this.state.numberOfDebts} />
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
