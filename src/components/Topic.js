import React from 'react';
import { BrowserRouter as Router, Route, Link,useParams} from "react-router-dom";

export default class Topic extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <Link to='/topic/1'>topic1</Link>
                    <Link to='/topic/2'>topic2</Link>
                    <Route path='/topic/:topicId'>
                        <TopicDetail/>
                    </Route>
                </Router>
            </div>
        )
    }
}

function TopicDetail(){
    let {topicId}=useParams()
    return <div>{topicId}</div>
}