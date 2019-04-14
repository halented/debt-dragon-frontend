import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: ""
    }
  }


  onChange = () => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return (
      <div>
        <form onChange={(event) => this.handleChange(event)} onSubmit={(event) => this.props.onLogIn(event, this.state)}>
          <label>Username: </label>
          <input name="username" value={this.state.username} />
          <input name="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
