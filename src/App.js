import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import SignUp from './components/SignUp'
import Login from './components/Login'
import Debt from './components/Debt'

class App extends Component {
  constructor() {
    super();
    this.state = {
      userExists: false,
      firstName: "",
      lastName: "",
      username: "",
      debts: [],
      expenses: 0,
      income: 0,
      selectedPlan: null,
    }
  }

  addNewDebt(ev){
    ev.preventDefault()
    console.log("ADDING A NEW DEBT")
  }

  handleSubmit(ev){
    ev.preventDefault()
    console.log("inside submit")
  }


  render() {
    return (
      <div className="App">
        WELCOME TO DEBT-DRAGON!
        <>
          <Router>
            <nav>
              <NavLink to="/login">Login</NavLink>
              {" "}
              <NavLink to="/signup">SignUp</NavLink>
            </nav>

            <Route path="/login" component={Login}/>
            <Route path="/signup" render={(props) => (
              <SignUp {...props} addNewDebt={this.addNewDebt} handleSubmit={this.handleSubmit}/>
            )} />

          </Router>
        </>
      </div>
    );
  }
}

export default App;
