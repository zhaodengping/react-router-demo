import React from 'react';
import { useHistory } from 'react-router-dom';

export default class History extends React.Component{
    state={
        history:useHistory() 
    }
    render(){
        function handleClick(){
            this.state.history.push('/')
        }
        return(
            <button onClick={handleClick}>点击返回</button>
        )
    }
}