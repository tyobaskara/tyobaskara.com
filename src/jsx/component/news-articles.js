import React from 'react';
import Masonry from 'react-masonry-component';
import {NewsItem} from './news-item';
import { LoadingRequest, FailedRequest } from './fetch-status-return';
import equalheight from '../util/equal-height';

export class Articles extends React.Component {
    state = {
        articles: [],
        loadingRequest: false,
        failedRequest: false
    }

    componentDidMount() {
        this.getNewsJson();
    }

    getNewsJson() {
        // new york times api
        //let topstories = new URL("https://api.nytimes.com/svc/topstories/v2/home.json");
        // let params = {
        //     'api-key': "7c73b2ded34e4fcfabcf7222f78b6577"
        // };
        //Object.keys(params).forEach(key => topstories.searchParams.append(key, params[key]))

        // newsapi.org key 1878c21cdaa74709a6db87229692a5e7
        // https://newsapi.org/s/bloomberg-api
        let articles = new URL("https://newsapi.org/v2/everything?sources=bloomberg&apiKey=1878c21cdaa74709a6db87229692a5e7");

        this.setState({loadingRequest: true});// show loading

        fetch(articles).then(response => {
            if (response.ok) {
                return response.json();
            }
            this.setState({failedRequest: true, loadingRequest: false});
            throw new Error('Request failed!');
        }, networkError => {
            this.setState({failedRequest: true, loadingRequest: false});
            console.log(networkError.message);
        }
        ).then(jsonResponse => {
            if(jsonResponse != null) {
                this.setState({ articles: jsonResponse.articles, loadingRequest: false}, () => {
                    if(screen.width > 767) {
                        equalheight('.news-wrap .eq-col');
                    }
                });
            }
        });
    }

    render() {
        const masonryOptions = {
            transitionDuration: 250
        };

        const article = this.state.articles.map((value, index) => {
                            return (
                                <NewsItem key={index} data={value} />
                            )
                        });

        return (
            <div className="news news--articles" style={{minHeight: '50vh'}}>
                <h2 className="orgTitle">Article News</h2>
                
                <Masonry
                    className={'nts-list'}
                    elementType={'ul'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                    { article }
                </Masonry>

                { this.state.failedRequest && <FailedRequest /> }
                { this.state.loadingRequest && <LoadingRequest /> }

            </div>
        )
    }
}