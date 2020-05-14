import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {routes} from './routers' 

//router第四种方式
class Router2 extends React.Component{
    
  render(){
    let route=routes.map((item,index)=>{
        return <Route exact path={item.path} component={item.component} key={index}></Route>
    })
    return(
      <Router>
          <div className='route2'>router2</div>
          <div className="width">
              <div><Link to='/'>Home</Link></div>
              <div><Link to='/about'>About</Link></div>
              <div><Link to='/user'>User</Link></div>
          </div>
          {route}
      </Router>
    )
  }
}

export default Router2