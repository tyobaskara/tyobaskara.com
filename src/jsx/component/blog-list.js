import React from 'react';
import Masonry from 'react-masonry-component';
import {BlogItem} from './blog-item';

export default class BlogList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
            post: [],
            photo: [],
            requestSent: false,
            finishLoad: false,
            requestFailed: false,
            totalPostLength: 0,
            blogPagination: 10
        }
    }
  
    componentDidMount() {
      window.addEventListener('scroll', this.handleOnScroll);
  
      this.initFirstData();
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleOnScroll);
    }
  
    initFirstData = () => {
        this.getContentJson(1, this.state.blogPagination);
    }

    checkPostLength = (callback) => {
        const url = 'https://jsonplaceholder.typicode.com/posts/';

        fetch(url).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => {
            console.log(networkError.message);
        }
        ).then(jsonResponse => {
            if(jsonResponse != null) {
                this.setState({totalPostLength: jsonResponse.length}, callback);
            }
        });
    }
  
    getContentJson = (startKey, counter) => {
        this.setState({ requestSent: true }); //show Loading...
        let data = [];

        this.checkPostLength(() => {
            for(let i=startKey; i<=counter; i++) {

                if(i > this.state.totalPostLength) {
                    console.log('reached total');
                    this.setState({ requestSent: false, finishLoad: true });
                    break;
                }

                //console.log(i);
                const urls = [`https://jsonplaceholder.typicode.com/posts/${i}`, `https://jsonplaceholder.typicode.com/photos/${i}`];
    
                Promise.all(urls.map(url =>
                    fetch(url).then(response => {
                        if (response.ok) {
                            return response.json();
                        }
                        this.setState({requestSent: false, finishLoad: true, requestFailed: true});
                        throw new Error('Request failed!');
                        return false;
                    }, networkError => {
                        this.setState({requestSent: false, finishLoad: true, requestFailed: true});
                        console.log(networkError.message);
                        return false;
                    })
                )).then(jsonResponse => {
                    if(jsonResponse[0] != null) {
                        this.setState({post: jsonResponse[0], photo: jsonResponse[1], requestSent: false}, () => {
                            let item = (
                                <BlogItem key={this.state.post.id} post={this.state.post} photo={this.state.photo} />
                            );
    
                            this.setState({
                                data: this.state.data.concat(item)
                                .sort((a, b) => a.props.post.id < b.props.post.id ? -1 : a.props.post.id > b.props.post.id ? 1 : 0) 
                            })
                        }) 
                    }
                })
            }
        });
    }
  
    querySearchResult = () => {
      if (this.state.requestSent || this.state.finishLoad) {
        return;
      }
  
      // enumerate a slow query
      setTimeout(this.doQuery, 500);
  
      this.setState({requestSent: true}); //show Loading...
    }
  
    doQuery = () => {
        let previousCount = this.state.blogPagination + 1;
        let NextCount = this.state.blogPagination + 15;
        this.setState({blogPagination: NextCount});

        this.getContentJson(previousCount, NextCount);
    }  
  
    handleOnScroll = () => {
      // http://stackoverflow.com/questions/9439725/javascript-how-to-detect-if-browser-window-is-scrolled-to-bottom
      let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      let scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
      let clientHeight = document.documentElement.clientHeight || window.innerHeight;
      let scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
  
      if (scrolledToBottom) {
        this.querySearchResult();
      }
    }
  
    render() {
        const masonryOptions = {
            transitionDuration: 250
        };
        
        return (
            <div>
                <Masonry
                    className={'blogList'} // default ''
                    elementType={'ul'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                    { this.state.data }
                </Masonry>

            { this.state.requestSent ?
                <div className="data-loading text-center" style={{color: 'white'}}>Loading...</div> 
                : this.state.requestFailed &&
                <div className="data-loading text-center" style={{color: 'white'}}>Try again later..</div> 
            }

            </div>
        );
    }

  };