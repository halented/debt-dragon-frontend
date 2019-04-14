import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: ""
    }
  }


  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return (
      <div>
        <form onChange={(event) => this.onChange(event)} onSubmit={(event) => {this.props.onLogIn(event, this.state.username)}}>
          <label>Username: </label>
          <input name="username" value={this.state.username} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
