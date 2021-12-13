import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home"
import About from "./screens/About"
import {obj as o} from "./screens/Home"



function App() {
  console.log(o);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        {/* <About /> */}
        {/* </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
