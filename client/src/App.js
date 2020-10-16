import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {PrivateRoute} from './components/PrivateRoute'

import Login from "./components/Login";
import "./styles.scss";
import {BubblePage} from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path='/protected' component={BubblePage}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
