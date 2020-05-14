import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink,Switch} from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";
import Topic from "../components/Topic";

export default class Router3 extends React.Component {
  render() {
    return (
      <Router>
        <div>router3</div>
        <div className="width">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <NavLink to="/about">About</NavLink>
          </div>
          <div>
            <Link to="/user">User</Link>
          </div>
          <div>
            <Link to='/topic'>topic</Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topic">
            <Topic />
          </Route>
        </Switch>
      </Router>
    );
  }
}
