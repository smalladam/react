import React, { Component } from 'react';

class UserInfo extends Component {
  render() {
    const avatarUrl = this.props.avatarUrl;
    return (
      <div>
        <img src={avatarUrl} />
      </div>
    );
  }
}

export default UserInfo;
