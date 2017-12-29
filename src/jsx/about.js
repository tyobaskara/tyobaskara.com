import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';
import { Footer } from './component/footer';
import { HeroBanner } from './component/herobanner';
import { InstagramGallery } from './component/instagram-gallery';
import { LinkedinProfile } from './component/linkedin-profile';

class About extends React.Component {
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
            document.getElementsByClassName("nav")[0].classList.add("nav--active");
        } else {
            document.getElementsByClassName("nav")[0].classList.remove("nav--active");
        }
    };

    render() {
        return (
            <div>
                <Helmet>
                    <title>About - Prasetya Aji Baskara</title>
                    <meta name="title" content="Tyobaskara.rocks : Web Developer is My Passion" />
                    <meta name="description" content="The passion to became as a Web Developer, It's started as Front End Developer in Jakarta, Indonesia" />
                </Helmet>

                <Navigation active="About"/>

                <div className="container-fluid">
                    <HeroBanner 
                        title={<h1 className="title">The Passion</h1>}
                        subtitle={<h2 className="subtitle">The only way to do great work is to love what you do<br/>-steve jobs</h2>}
                        images="./assets/images/about.jpg" 
                        altImages="tyobaskara" 
                    />
                    <div className="container">
                        <InstagramGallery />
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
};

export default About;