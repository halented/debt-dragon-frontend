import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import SignUp from './components/SignUp'
import Login from './components/Login'

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
            <Route path="/signup" component={SignUp}/>


          </Router>
        </>
      </div>
    );
  }
}

export default App;
