import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';

class Ajax extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            posts: []
        }
    }
    render() {

        return (
            <div>
                <Helmet>
                    <meta name="description" content="Prasetya Aji Baskara who accidently in love with front end technology and decided to explore more with it" />
                    <title>Ajax - Prasetya Aji Baskara</title>
                </Helmet>

                <Navigation active="Ajax"/>

                <div className="container-fluid">
                    <div className="jumbotron">
                        <div className="container text-center">
                            <p>Ahh ajax..</p>
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
};

export default Ajax;