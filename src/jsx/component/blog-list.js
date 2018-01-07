import React from 'react';
import Masonry from 'react-masonry-component';
import { NavLink } from 'react-router-dom';

export default class BlogList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
            post: [],
            photo: [],
            requestSent: false,
            finishLoad: false,
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
        let data = [];

        this.checkPostLength(() => {
                for(let i=startKey; i<=counter; i++) {

                    if(i > this.state.totalPostLength) {
                        console.log('reached total');
                        this.setState({requestSent: false, finishLoad: true});
                        break;
                    }

                    //console.log(i);
                    const urls = [`https://jsonplaceholder.typicode.com/posts/${i}`, `https://jsonplaceholder.typicode.com/photos/${i}`];
        
                    Promise.all(urls.map(url =>
                        fetch(url).then(response => {
                            if (response.ok) {
                                return response.json();
                            }
                            this.setState({requestSent: false, finishLoad: true});
                            throw new Error('Request failed!');
                            return false;
                        }, networkError => {
                            this.setState({requestSent: false, finishLoad: true});
                            console.log(networkError.message);
                            return false;
                        })
                    )).then(jsonResponse => {
                        if(jsonResponse[0] != null) {
                            this.setState({post: jsonResponse[0], photo: jsonResponse[1], requestSent: false}, () => {
                                let item = (
                                    <li key={this.state.post.id}>
                                        <NavLink to={"/Blog/" + this.state.post.id + '/' + this.state.post.title} className="blogList__card">
                                            <div className="blogList__desc">
                                                <div key={this.state.photo.id} className="blogList__desc-image">
                                                    <img src={this.state.photo.thumbnailUrl} alt={this.state.photo.title}/>
                                                </div>
                                                <h2 className="blogList__desc-title">{this.state.post.title}</h2>
                                            </div>
                                            <div className="blogList__read">
                                                <span>Read more <i className="fa fa-caret-right"></i></span>
                                            </div>
                                        </NavLink>
                                    </li>
                                );
        
                                this.setState({data: this.state.data.concat(item)});
                            });    
                        }
                        else {
                            console.log('Response null');
                            this.setState({requestSent: false, finishLoad: true});
                        }
                    })
                }
            }
        );
    }
  
    querySearchResult = () => {
      if (this.state.requestSent || this.state.finishLoad) {
        return;
      }
  
      // enumerate a slow query
      setTimeout(this.doQuery, 1000);
  
      this.setState({requestSent: true});
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
            transitionDuration: 0
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
                    {this.state.data}
                </Masonry>

            {(() => {
                if (this.state.requestSent) {
                return(
                    <div className="data-loading text-center" style={{color: 'white'}}>Loading...</div>
                );
                } else {
                return(
                    <div className="data-loading"></div>
                );
                }
            })()}

            </div>
        );
    }

  };