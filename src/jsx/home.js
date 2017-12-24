import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';
import { AboutInro } from './component/about-intro';
import { HeroBanner } from './component/herobanner';

class Home extends React.Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount() {
        document.getElementsByClassName("nav")[0].setAttribute('class', 'nav');
        document.addEventListener('scroll', this.scroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scroll);
    }

    scroll(event) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementsByClassName("nav")[0].className = "nav nav--active";
        } else {
            document.getElementsByClassName("nav")[0].className = "nav";
        }
    };

    render() {
        return (
            <div>
                <Helmet>
                    <title>Home - Prasetya Aji Baskara</title>
                    <meta name="title" content="Tyobaskara.rocks : Front End Developer from Zero to Zoro" />
                    <meta name="description" content="I became really passionate as a Front End Developer and kept creating since then. It absolutely has its ups and downs, but if you love what you do and are able to provide value to people, the outcomes are far more rewarding!" />
                </Helmet>

                <Navigation active="Home"/>

                <div className="container-fluid">
                    <HeroBanner />
                    <AboutInro />
                </div>
            </div>
        )
    }
};

export default Home;