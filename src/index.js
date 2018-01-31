import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Switch, Redirect } from 'react-router-dom';
import { Navigation } from './jsx/component/navigation';
import { Footer } from './jsx/component/footer';

import Home from './jsx/home-page';
import About from './jsx/about-page';
import Blog from './jsx/blog-page';
import BlogDetail from './jsx/blog-detail-page';
import NewsPage from './jsx/news-page';
import { Page404 } from './jsx/component/page404';


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
                        <Route component={Page404}/>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
};


ReactDOM.render(<App/>, root);