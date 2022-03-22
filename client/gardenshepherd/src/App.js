import './App.css';

import React, { Component } from 'react';
import { Switch,Route,BrowserRouter as Router,withRoute, Redirect} from 'react-router-dom';
import login from './containers/login/login';
import forgot from './containers/forgotpass/forgotpass';
import register from './containers/register/register';
import dashboard from './containers/dashboard/dashboard';
import planner from './containers/planner/planner';
import aboutus from './containers/aboutus/aboutus';




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
          <Route path='/gs/dashboard' exact component={dashboard} />
          <Route path='/gs/planner' exact component={planner} />
          <Route path='/gs/about-us' exact component={aboutus} />
          {/* <Route path='/my-liquorstore/questions' exact component={Questions} /> */}
          {/* <Route path='/my-liquorstore/saved reference' exact component={UserReference} /> */}
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
