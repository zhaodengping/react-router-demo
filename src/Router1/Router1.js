import React from 'react'
import { BrowserRouter as Router, Route, Link,Switch,NavLink } from "react-router-dom";
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'

//router第一种方式
class Router1 extends React.Component{
  render(){
    return(
      <Router>
          <div className="width">
              <div><Link to='/'>Home</Link></div>
              <div><NavLink to='/about'>About</NavLink></div>
              <div><Link to='/user'>User</Link></div>
          </div>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/user'>
              <User/>
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
            
          </Switch>
      </Router>
    )
  }
}

export default Router1