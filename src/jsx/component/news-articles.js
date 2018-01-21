import React from 'react';
import Masonry from 'react-masonry-component';
import {NewsItem} from './news-item';

export class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
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

        fetch(articles).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => {
            console.log(networkError.message);
        }
        ).then(jsonResponse => {
            if(jsonResponse != null) {
                this.setState({ articles: jsonResponse.articles})
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
            <div className="news-articles">
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
            </div>
        )
    }
}