import React from 'react';
import Masonry from 'react-masonry-component';
 
export class BlogList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            posts: [],
            photos: []
        }
    }
    
    componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/posts/';
        const urls = ['https://jsonplaceholder.typicode.com/posts/', 'https://jsonplaceholder.typicode.com/photos'];
        const block = document.getElementsByClassName('blogList')[0];
        const list = block.getElementsByTagName('li');

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
                block.removeChild(list[0]);
                this.setState({posts: jsonResponse[0], photos: jsonResponse[1]});
            }
        })
    
        // fetch(url).then(response => {
        //     if (response.ok) {
        //         return response.json();
        //     }
        //     list[0].innerHTML = 'Request failed!';
        //     throw new Error('Request failed!');
        // }, networkError => {
        //     list[0].innerHTML = 'Request failed!';
        //     console.log(networkError.message);
        // }
        // ).then(jsonResponse => {
        //     if(jsonResponse != null) {
        //         block.removeChild(list[0]);
        //         this.setState({posts: jsonResponse});
        //         console.log(this.state.posts);
        //     }
        // });
    }

    render() {
        const masonryOptions = {
            transitionDuration: 0
        };
        
        let listElement = this.state.posts.map(post => {
            let id = post.id;

            let photosElement = this.state.photos.map(photo => {
                if(photo.id === id) {
                    return (
                        <div key={photo.id} className="blogList__desc-image">
                            <img src={photo.thumbnailUrl} alt={photo.title}/>
                        </div>
                    )
                }
            })

            if(post.id < 25) {
                return (
                    <li key={post.id}>
                        <a href="#" className="blogList__card">
                            <div className="blogList__desc">
                                {photosElement}
                                <h2 className="blogList__desc-title">{post.title}</h2>
                                {/* <span className="blogList__desc-subtitle">{post.body.replace(/\n/g, ' ')}</span> */}
                            </div>
                            <div className="blogList__read">
                                <span>Read more <i className="fa fa-caret-right"></i></span>
                            </div>
                        </a>
                    </li>
                )
            }
        });

        return (    
            <Masonry
                className={'blogList'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
                <li>Loading...</li>
                {listElement}
            </Masonry>
        )
    }

};