import React from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from './component/footer';
import { HeroBanner } from './component/herobanner';
import { InstagramGallery } from './component/instagram-gallery';

class About extends React.Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount() {
        document.getElementsByClassName("nav")[0].setAttribute('class', 'nav');
        document.addEventListener('scroll', this.scroll);
        window.scrollTo(0,0);
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
        const metaTitle = "Tyobaskara.rocks : To be Web Developer is My Passion";
        const metaDesc = "The passion to became as a Web Developer, Was started a career as Front End Developer in Jakarta, Indonesia. and it's an amazing journey.";
        
        return (
            <div>
                <Helmet>
                    <title>About - Prasetya Aji Baskara</title>
                    <meta name="title" content={metaTitle} />
                    <meta name="description" content={metaDesc} />
                    <meta property="og:site_name" content="tyobaskara.rocks" />
                    <meta property="og:url" content="http://www.tyobaskara.rocks" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={metaTitle} />
                    <meta property="og:description" content={metaDesc} />
                    <meta property="og:image" content="http://www.tyobaskara.rocks/assets/images/logo.png" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@tyobaskara" />
                    <meta name="twitter:creator" content="@tyobaskara" />
                    <meta name="twitter:title" content={metaTitle} />
                    <meta name="twitter:description" content={metaDesc} />
                    <meta name="twitter:image" content="http://www.tyobaskara.rocks/assets/images/logo.png" />
                </Helmet>

                <div className="container-fluid">
                    <HeroBanner 
                        title={<h1 className="title">The Passion</h1>}
                        subtitle={<h2 className="subtitle">The only way to do great work is to love what you do<br/>-steve jobs</h2>}
                        images="./assets/images/about.jpg" 
                        altImages="tyobaskara" 
                    />
                    <div className="container container--wrap">
                        <InstagramGallery />
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
};

export default About;