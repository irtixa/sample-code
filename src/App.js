import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home"
import About from "./screens/About"
import User from "./screens/User";
import {obj} from "./screens/Home"



<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
function App() {
 
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/User" component={User} />
        {/* <About /> */}
        {/* </Route> */}
        <User/>
      </Switch>
    </Router>
  );
}

export default App;
  