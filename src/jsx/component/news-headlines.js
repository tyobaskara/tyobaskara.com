import React from 'react';
import Masonry from 'react-masonry-component';
import {NewsItem} from './news-item';

export class HeadLines extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headlines: [],
            requestFailed: false
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
        let topHeadlines = new URL("https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=1878c21cdaa74709a6db87229692a5e7");

        fetch(topHeadlines).then(response => {
            if (response.ok) {
                return response.json();
            }
            this.setState({requestFailed: true});
            throw new Error('Request failed!');
        }, networkError => {
            this.setState({requestFailed: true});
            console.log(networkError.message);
        }
        ).then(jsonResponse => {
            if(jsonResponse != null) {
                this.setState({ headlines: jsonResponse.articles});
            }
        });
    }

    render() {
        const masonryOptions = {
            transitionDuration: 250
        };

        const headline = this.state.headlines.map((value, index) => {
                            return (
                                <NewsItem key={index} data={value} />
                            )
                        });

        return (
            <div className="news-headlines" style={{minHeight: '50vh'}}>
                <h2 className="orgTitle">Top Headlines</h2>
                
                <Masonry
                    className={'nts-list'}
                    elementType={'ul'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                    { headline }
                </Masonry>

                { this.state.requestFailed ?
                    <div className="data-loading text-center" style={{color: 'white'}}>Try again later..</div> 
                    :
                    <div className="data-loading text-center" style={{color: 'white'}}>Loading...</div>
                }
            </div>
        )
    }
}