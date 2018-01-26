import React from 'react';
import { Helmet } from 'react-helmet';
import { AboutInro } from './component/about-intro';
import { HeroBanner } from './component/herobanner';

class Home extends React.Component {
    componentDidMount() {
        document.getElementsByClassName("nav")[0].setAttribute('class', 'nav');
        window.scrollTo(0,0);
    }

    render() {
        const metaTitle = "Tyobaskara.rocks : Front End Developer from Zero to Whatever :)";
        const metaDesc = "I became really passionate as a Front End Developer and kept creating since then. It absolutely has its ups and downs, but if you love what you do and are able to provide value to people, the outcomes are far more rewarding!";

        return (
            <div>
                <Helmet>
                    <title>Home - Prasetya Aji Baskara</title>
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
                        title={<h1 className="title">Web Developer</h1>}
                        subtitle={<h2 className="subtitle">Don't be afraid to be Great</h2>}
                        images="./assets/images/herobanner-2.jpg" 
                        altImages="tyobaskara" 
                    />
                    <AboutInro />
                </div>
            </div>
        )
    }
};

export default Home;