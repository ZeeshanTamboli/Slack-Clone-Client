import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Signup } from './components/auth/SignUp';
import { Login } from './components/auth/Login';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);

export default App;
