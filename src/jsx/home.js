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
                    <meta name="description" content="Prasetya Aji Baskara who accidently in love with front end technology and decided to explore more with it" />
                    <title>Home - Prasetya Aji Baskara</title>
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