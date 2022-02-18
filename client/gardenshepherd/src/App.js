import './App.css';

import React, { Component } from 'react';
import { Switch,Route,BrowserRouter as Router,withRoute, Redirect} from 'react-router-dom';
import login from './containers/login/login';


function App() {
  return (
    <div className="App">
      <Router>
      <div className="App">
        <Switch>
          {/* <Redirect from="/" to="/Login" exact component={Login}/> */}
          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>
          <Route path="/Login" exact component={login} />
          {/* <Route path='/my-liquorstore/dashboard' exact component={Dashboard} />
          <Route path='/my-liquorstore/questions' exact component={Questions} />
          <Route path='/my-liquorstore/saved reference' exact component={UserReference} /> */}
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
