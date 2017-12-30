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

            <div className="container-fluid">
                <BlogList />
            </div>
            
            <Footer />
        </div>
    )

};

export default Blog;