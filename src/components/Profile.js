import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div>
                Hello, {this.props.state.firstName}!
                
            </div>
        );
    }
}

export default Profile;
