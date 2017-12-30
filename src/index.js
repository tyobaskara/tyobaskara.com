import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

import Home from './jsx/home';
import About from './jsx/about';
import Blog from './jsx/blog';

class App extends React.Component{
    componentWillMount(){
        document.body.setAttribute('class', 'opOn');
    }
    componentDidMount(){
        setTimeout(function(){
            document.body.setAttribute('class', 'opOff');
        },250);
    }

    render(){
        return(
            <Router history={browserHistory}>
                <div>
                    <Route exact path={'/'} component={Home}></Route>
                    <Route path={'/About'} component={About}></Route>
                    <Route path={'/Blog'} component={Blog}></Route>
                </div>
            </Router>
        );
    }
};


ReactDOM.render(<App/>, root);