import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div>
                Hello, {this.props.firstName}!
            </div>
        );
    }
}

export default Profile;
