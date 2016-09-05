import React, { Component } from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: "hello"
    };
  }
  _handleSubmit(e) {
    e.preventDefault();
    this.setState(
      {
        hello: this.state.hello + "hello"
      }
    )
  }
  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <button type="submit">submit</button>
        </form>
        <h1>{this.state.hello}</h1>
      </div>
    );
  }
}

export default UserInfo;
