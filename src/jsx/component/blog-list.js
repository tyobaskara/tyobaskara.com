import React from 'react';
import Masonry from 'react-masonry-component';
import { NavLink } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll';

const pagination = 10;
 
export class BlogList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            posts: [],
            photos: [],
            isLoading: true,
            isLoadingMore: false,
            isMounted: false
        }
    }

    showLoader() {
        this.setState({
            isLoading: true
        });
    }

    hideLoader() {
        this.setState({
            isLoading: false
        });
    }
    
    componentDidMount(){
        this.setState({_isMounted: true});
        this.getContentJson(0, pagination, false);
    }

    getContentJson(startIndex, pagination, isLoadingMore) {
        let _isMounted = this.state.isMounted;
        let _isLoadingMore = this.state.isLoadingMore;

        for(let i=startIndex; i<=pagination; i++) {
            if (i === pagination) {
                console.log('done');
                if(_isMounted) { 
                    this.hideLoader;
                    console.log('hide');
                };

                if (_isMounted && _isLoadingMore) this.setState({ isLoadingMore: false });

                // this.loadMore(pagination);
                return false;
            }

            this.getContentData((i+1) , pagination);
        }      
    }

    getContentData(id) {
        const urls = [`https://jsonplaceholder.typicode.com/posts/${id}`, `https://jsonplaceholder.typicode.com/photos/${id}`];
        //const block = document.getElementsByClassName('blogList')[0];
        //const list = block.getElementsByTagName('li');

        Promise.all(urls.map(url =>
            fetch(url).then(response => {
                if (response.ok) {
                    return response.json();
                }
                console.log('Request failed!');
                throw new Error('Request failed!');
            }, networkError => {
                console.log('Request failed!');
                console.log(networkError.message);
            })
        )).then(jsonResponse => {
            if(jsonResponse != null) {
                this.setState({posts: this.state.posts.concat(jsonResponse[0]), photos: this.state.photos.concat(jsonResponse[1])});
            }
        })
    }

    // loadMore(pagination) {

    //     $(window).unbind('scroll');
    
    //     $(window).bind('scroll', function () {
    
    //       if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    //           let previousCount = pagination + 1;
    //           pagination = pagination + 11;
    
    //           this.setState({isLoadingMore : true}); //To show loader at the bottom
    
    //           this.getContentJson(previousCount, pagination, true);
    //       }
    //     }.bind(this));
    // }

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

            return (
                <li key={post.id}>
                    <NavLink to={"/Blog/" + post.id + '/' + post.title} className="blogList__card">
                        <div className="blogList__desc">
                            {photosElement}
                            <h2 className="blogList__desc-title">{post.title}</h2>
                        </div>
                        <div className="blogList__read">
                            <span>Read more <i className="fa fa-caret-right"></i></span>
                        </div>
                    </NavLink>
                </li>
            )
        });
        console.log(this.state);

        return (    
            <Masonry
                className={'blogList'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
                {listElement}
                <li className={this.state.isLoading ? '': 'hidden'}>
                    Loading...
                </li>
            </Masonry>
        )
    }

};