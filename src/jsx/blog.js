import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';
import { Footer } from './component/footer';
import { BlogList } from './component/blog-list';

class Blog extends React.Component {
    render = () => (
        <div>
            <Helmet>
                <title>Blog - Prasetya Aji Baskara</title>
                <meta name="title" content="Tyobaskara.rocks : Blog" />
                <meta name="description" content="Will Share anything regarding about my Skill, Love Live, or Anyting that could help the world better :D" />
            </Helmet>

            <Navigation active="Blog"/>


            <div className="blogWrap" style={{minHeight: '100vh'}}>
                <div className="container">
                    <div className="text-center">
                        <h1 className="orgTitle" style={{marginTop: '20px'}}>What you see is what you get</h1>
                    </div>
                    <BlogList />
                </div>
            </div>
            
            <Footer />
        </div>
    )

};

export default Blog;