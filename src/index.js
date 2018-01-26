import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Switch, Redirect } from 'react-router-dom';
import { Navigation } from './jsx/component/navigation';

import Home from './jsx/home';
import About from './jsx/about';
import Blog from './jsx/blog';
import BlogDetail from './jsx/blog-detail';
import NewsPage from './jsx/news-page';

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
                <div>
                    <Navigation/>
                    <Switch>
                        <Route exact path={'/'} render={props => <Home {...props} />} />
                        <Route exact path={'/about'} render={props => <About {...props} />} />
                        <Route exact path={'/blog'} render={props => <Blog {...props} />} />
                        <Route exact path={'/blog/:id/:title'} render={props => <BlogDetail {...props} />} />
                        <Route exact path={'/news'} render={props => <NewsPage {...props} />} />
                    </Switch>
                </div>
            </Router>
        );
    }
};


ReactDOM.render(<App/>, root);