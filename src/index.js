import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Switch, Redirect } from 'react-router-dom';

import Home from './jsx/home';
import About from './jsx/about';
import Blog from './jsx/blog';
import BlogDetail from './jsx/blog-detail';

class App extends React.Component{
    componentWillMount(){
        document.body.setAttribute('class', 'opOn');
    }

    componentDidMount(){
        document.body.setAttribute('class', 'opOff');
        setTimeout(function(){
            document.body.classList.remove('opOff');
        }, 2000);
    }

    render(){
        return(
            <Router history={browserHistory}>
                <Switch>
                    <Route exact path={'/'} render={props => <Home {...props} />} />
                    <Route exact path={'/About'} render={props => <About {...props} />} />
                    <Route exact path={'/Blog'} render={props => <Blog {...props} />} />
                    <Route exact path={'/Blogs/:id/:title'} render={props => <BlogDetail {...props} />} />
                </Switch>
            </Router>
        );
    }
};


ReactDOM.render(<App/>, root);