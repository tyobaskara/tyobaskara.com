import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

import Home from './jsx/home';
import About from './jsx/about';
import Ajax from './jsx/ajax';
import Redux from './jsx/redux';

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
                    <Route path={'/Ajax'} component={Ajax}></Route>
                    <Route path={'/Redux'} component={Redux}></Route>
                </div>
            </Router>
        );
    }
};


ReactDOM.render(<App/>, root);