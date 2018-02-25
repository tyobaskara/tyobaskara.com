import React from 'react';
import Masonry from 'react-masonry-component';
import {NewsItem} from './news-item';
import { LoadingRequest, FailedRequest } from './fetch-status-return';
import equalheight from '../util/equal-height';
import Slider from 'react-slick';

export class HeadLines extends React.Component {
    state = {
        headlines: [],
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
        let topHeadlines = new URL("https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=1878c21cdaa74709a6db87229692a5e7");

        this.setState({loadingRequest: true});// show loading

        fetch(topHeadlines).then(response => {
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
                this.setState({ headlines: jsonResponse.articles, loadingRequest: false}, () => {
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

        const headline = this.state.headlines.map(
            (value, index) => {
                return (
                    <div key={index}>
                        <NewsItem data={value} />
                    </div>
                )}
        );

        const settings = {
            responsive: [
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                  breakpoint: 767,
                  settings: {        
                    dots: true,
                    infinite: true,
                    arrows: false,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    lazyload: true,
                  }
                }
            ]
        };

        return (
            <div className="news news--headlines" style={{minHeight: '50vh'}}>
                <h2 className="orgTitle">Top Headlines</h2>
                
                <div className="">
                    <Slider {...settings}>
                        { headline }
                    </Slider>
                </div>

                { this.state.failedRequest && <FailedRequest /> }
                { this.state.loadingRequest && <LoadingRequest /> }

            </div>
        )
    }
}