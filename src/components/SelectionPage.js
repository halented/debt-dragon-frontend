import React, { Component } from 'react';

class SelectionPage extends Component {
  render() {
    debugger;
    return (
      <div>
        GOOD MORNING, {this.props.state.firstName}!!!
        amount: {this.props.planOptions ? this.props.planOptions["avalanche"][0].amount : null},

      </div>
    );
  }
}

export default SelectionPage;
