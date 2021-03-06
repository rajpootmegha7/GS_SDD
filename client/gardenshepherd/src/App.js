import './App.css';

import React, { Component } from 'react';
import { Switch,Route,BrowserRouter as Router,withRoute, Redirect} from 'react-router-dom';
import login from './containers/login/login';
import forgot from './containers/forgotpass/forgotpass';
import register from './containers/register/register';
import dashboard from './containers/dashboard/dashboard';
import aboutus from './containers/aboutus/aboutus';
import Planner from './containers/planner/planner';
import Logout from './containers/Logout/Logout';
import ProtectedRoute from './components/ProtectedRoute';



function App() {
  return (
    <div className="App">
      <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>
          <Route path="/Login" exact component={login} />
          <Route path="/Forgot-Password" exact component={forgot} />
          <Route path="/Register" exact component={register} />
          <ProtectedRoute path='/gs/Dashboard' exact component={dashboard} />
          <ProtectedRoute path='/gs/Planner' exact component={Planner} />
          <Route path='/gs/About-us' exact component={aboutus} />
          <Route path='/gs/Logout' exact component={Logout} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
