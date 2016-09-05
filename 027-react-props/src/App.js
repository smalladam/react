import React from 'react';
import UserInfo from './UserInfo';


class App extends React.Component {
  render () {
    return(
      <div>
        <UserInfo avatarUrl="https://avatars1.githubusercontent.com/u/72467?v=3&s=460" />
      </div>
    )
  }
}

export default App;
