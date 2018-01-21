import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';
import { HeroBanner } from './component/herobanner';
import { HeadLines } from './component/news-headlines';
import { Articles } from './component/news-articles';
import { Footer } from './component/footer';
import ButtonToTop from './component/button-to-top';

class NewsPage extends React.Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount() {
        document.getElementsByClassName("nav")[0].setAttribute('class', 'nav');
        document.addEventListener('scroll', this.scroll);
        this.topFunction;
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scroll);
    }
    
    topFunction() {
        window.scrollTo(0,0);
    }

    scroll(event) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementsByClassName("nav")[0].classList.add("nav--active");
        } else {
            document.getElementsByClassName("nav")[0].classList.remove("nav--active");
        }
    };

    render = () => {
        const metaTitle = "Tyobaskara.rocks : Bloomberg News fetch api";
        const metaDesc = "Bloomberg News fetch api top headlines and recent articles";

        return (
            <div>
                <Helmet>
                    <title>tyobaskara.rocks - Bloomberg News</title>
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

                <Navigation active="News"/>

                <div className="container-fluid">
                    <HeroBanner 
                        title={<h1 className="title">Bloomberg News</h1>}
                        subtitle={<h2 className="subtitle">Powered by newsapi.org</h2>}
                        images="./assets/images/news.jpg" 
                        altImages="bloomberg news" 
                    />
                    
                    <div className="news">
                        <div className="container container--wrap" style={{minHeight: '100vh'}}>
                            <div className="row">
                                <div className="col-sm-4">
                                    <HeadLines />
                                </div>
                                <div className="col-sm-8">
                                    <Articles />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ButtonToTop />

                <Footer />
            </div>
        )
    }
};

export default NewsPage;