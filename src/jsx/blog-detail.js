import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';
import { AboutInro } from './component/about-intro';
import { HeroBanner } from './component/herobanner';
import { Footer } from './component/footer';
 
export default class BlogDetail extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            posts: [],
            photos: []
        }
    }

    componentDidMount(){
        window.scrollTo(0,0);
        
        const id = this.props.match.params.id;
        const urls = [`https://jsonplaceholder.typicode.com/posts/${id}`, `https://jsonplaceholder.typicode.com/photos/${id}`];

        Promise.all(urls.map(url =>
            fetch(url).then(response => {
                if (response.ok) {
                    return response.json();
                }
                list[0].innerHTML = 'Request failed!';
                throw new Error('Request failed!');
            }, networkError => {
                list[0].innerHTML = 'Request failed!';
                console.log(networkError.message);
            })
        )).then(jsonResponse => {
            if(jsonResponse != null) {
                this.setState({posts: jsonResponse[0], photos: jsonResponse[1]});

                let metaDesc = document.createElement('meta');
                    metaDesc.setAttribute('name', 'description');
                    metaDesc.setAttribute('content', this.state.posts.body.replace(/(\r\n|\n|\r)/gm,""));
                document.head.appendChild(metaDesc);
            }
        })
    }
    render() {
        let metaTitle = this.props.match.params.title;

        return (
            <div>
                <Helmet>
                    <title>Blogs - {metaTitle}</title>
                    <meta name="title" content={metaTitle} />
                </Helmet>

                <Navigation/>

                <div className="container-fluid">
                    <HeroBanner 
                        title={<h1 className="title">{metaTitle}</h1>}
                        images={this.state.photos.url} 
                        altImages={metaTitle} 
                    />

                    <div className="container container--wrap">
                        <div className="blog-detail" style={{minHeight: '300px'}}>
                            <p>{this.state.posts.body}</p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
};