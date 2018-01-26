import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, browserHistory, Switch, Redirect } from 'react-router-dom';
import { Navigation } from './jsx/component/navigation';
import { Footer } from './jsx/component/footer';

import Home from './jsx/home';
import About from './jsx/about';
import Blog from './jsx/blog';
import BlogDetail from './jsx/blog-detail';
import NewsPage from './jsx/news-page';

const Page404 = () => (
    <div style={{height: '100vh', background: 'peachpuff', color: 'white', position: 'relative'}}>
        <div style={{display: 'inline-block',position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center'}}>
            <h1>404!</h1>
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
                <h2 style={{marginBottom: '5px'}}>Sorry you are lost..</h2>
                <p>Let's go back to home</p>
            </div>
            <NavLink to="/"><img src="/assets/images/logo.png" alt="tyobaskara"/></NavLink>
        </div>
    </div>
)

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