import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';
import { Footer } from './component/footer';

class Blog extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            posts: []
        }
    }
    
    componentDidMount(){
        const _this = this;
        const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
        const block = document.getElementsByClassName('list-ajax')[0];
        const list = block.getElementsByTagName('li');
    
        fetch(url).then(response => {
            if (response.ok) {
                return response.json();
            }
            list[0].innerHTML = 'Request failed!';
            throw new Error('Request failed!');
        }, networkError => {
            list[0].innerHTML = 'Request failed!';
            console.log(networkError.message);
        }
        ).then(jsonResponse => {
            if(jsonResponse != null) {
                setTimeout(function(){
                    block.removeChild(list[0]);
                    _this.setState({posts: jsonResponse});
                },1000);
            }
        });
    }

    render = () => (
        <div>
            <Helmet>
                <title>Blog - Prasetya Aji Baskara</title>
                <meta name="title" content="Tyobaskara.rocks : Blog" />
                <meta name="description" content="Will Share anything regarding about my Skill, Love Live, or Anyting that could help the world better :D" />
            </Helmet>

            <Navigation active="Blog"/>

            <div className="container-fluid">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h1>Blog</h1>
                    </div>
                </div>
                <div className="container">
                    <ul className="list-ajax">
                        <li>Loading...</li>
                        {
                            this.state.posts.map(post =>
                            <li key={post.id}>
                                <div>name: {post.name}</div>
                                <div>email: {post.email}</div>
                                <div>comment: {post.body.replace(/\n/g, ' ')}</div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )

};

export default Blog;