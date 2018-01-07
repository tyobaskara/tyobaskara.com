import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';
import { Footer } from './component/footer';
import BlogList from './component/blog-list';

class Blog extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        const metaTitle = "Tyobaskara.rocks : Blog";
        const metaDesc = "Shares anything regarding about my Skill, Love Live, or Anyting that could helps. What you see is what you get.";

        return (
            <div>
                <Helmet>
                    <title>Blog - Prasetya Aji Baskara</title>
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

                <Navigation active="Blog"/>


                <div className="blogWrap" style={{minHeight: '100vh'}}>
                    <div className="container container--wrap">
                        <div className="text-center">
                            <h1 className="orgTitle">What you see is what you get</h1>
                        </div>
                        <BlogList />
                    </div>
                </div>
                
                <Footer />
            </div>
        )
    }
};

export default Blog;