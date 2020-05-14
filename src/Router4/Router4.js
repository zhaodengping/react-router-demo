import React from "react";
import { BrowserRouter as Router, Route, Link,Switch, useHistory, useLocation} from "react-router-dom";


export default class Router4 extends React.Component {
  render() {
    return (
      <Router>
        <div>router4</div>
        <div className="width">
          <div>
            <Link to="/history">History</Link>
          </div> 
        </div>
        <Switch>
          <Route exact path="/history">
            <History />
          </Route> 
        </Switch>
      </Router>
    );
  }
}



function History(){
    let history = useHistory()
    console.log(useLocation())

    function handleClick(){
        history.push('/')
    }
    return(
        <button onClick={handleClick}>点击返回</button>
    )
}
