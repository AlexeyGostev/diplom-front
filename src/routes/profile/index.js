import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SelfProfile from './self-profile';

class Profile extends Component {
  render() {
    return (
      <Switch>
        Prfile
        <Route path="/me" component={SelfProfile} />
      </Switch>
    );
  }
}


export default Profile;
