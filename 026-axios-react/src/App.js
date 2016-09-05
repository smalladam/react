import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Card from 'material-ui/Card';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import UserInfo from './UserInfo';


import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarUrl: "https://avatars1.githubusercontent.com/u/72467?v=3&s=460" 
    };
  }
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  _handleSubmit(e) {
    e.preventDefault();
    const account = this.refs.account.getValue();
    console.log(account);
    axios.get(`https://api.github.com/users/${account}`)
         .then((res) => {
            this.setState({user: res.data});
            console.log(res);
          });
  }
  render () {
    let GitHubInfo;

    if(!isEmpty(this.state.user)) {
      GitHubInfo = (
        <UserInfo userInfo={this.state.user} />
      );
    }
    let styles = {
      padding: '10px'
    }
    return(
      <div style={styles}>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <TextField hintText="Your Github Account"
                     ref="account"/>
          <FlatButton label="Search Github"
                      type="submit"
                      primary={true}/>
        </form>
        <h1>UserInfo</h1>
        { GitHubInfo }
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
