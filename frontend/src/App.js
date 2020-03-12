import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import SignInPage from './pages/sign-in/sign-in.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import UserDetailsPage from './pages/user-details/user-details.component';
import UpdateUserPage from './pages/update-user/update-user.component';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/user-details/:id" component={UserDetailsPage} />
        <Route path="/update-user/:id" component={UpdateUserPage} />
      </Switch>
    </div>
  );
};

export default App;
