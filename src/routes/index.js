import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from './profile';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/" component={() => (<div>Home</div>)} />
      </Switch>
    );
  }
}

App.propTypes = {
};

App.defaultProps = {
};

export default App;
