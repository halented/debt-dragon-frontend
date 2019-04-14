import React, { Component } from 'react';

class Profile extends Component {
    render() {
      console.log("PRPS", this.props)
        return (
            <div>
                Hello, {this.props.firstName}!

            </div>
        );
    }
}

export default Profile;
