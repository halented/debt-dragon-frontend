import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, NavLink, withRouter} from 'react-router-dom';

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
                <SignUp {...props} addNewDebt={this.addNewDebt} handleSubmit={this.handleSubmit}/>
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
