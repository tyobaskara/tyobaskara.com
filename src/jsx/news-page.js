import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';
import { Footer } from './component/footer';

class NewsPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.getNewsJson();
    }

    getNewsJson() {
        let url = new URL("https://api.nytimes.com/svc/topstories/v2/home.json");
        let params = {
            'method': 'GET',
            'api-key': "7c73b2ded34e4fcfabcf7222f78b6577"
        };
        
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

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
                console.log(jsonResponse);
            }
        });
    }

    render() {
        const metaTitle = "Tyobaskara.rocks : Front End Developer from Zero to Whatever :)";
        const metaDesc = "I became really passionate as a Front End Developer and kept creating since then. It absolutely has its ups and downs, but if you love what you do and are able to provide value to people, the outcomes are far more rewarding!";

        return (
            <div>
                <Helmet>
                    <title>Home - Prasetya Aji Baskara</title>
                    <meta name="title" content={metaTitle} />
                    <meta name="description" content={metaDesc} />
                    <meta property="og:site_name" content="tyobaskara.rocks" />
                    <meta property="og:url" content="http://www.tyobaskara.rocks" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={metaTitle} />
                    <meta property="og:description" content={metaDesc} />
                    <meta property="og:image" content="http://www.tyobaskara.rocks/assets/images/logo.png" />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@tyobaskara" />
                    <meta name="twitter:creator" content="@tyobaskara" />
                    <meta name="twitter:title" content={metaTitle} />
                    <meta name="twitter:description" content={metaDesc} />
                    <meta name="twitter:image" content="http://www.tyobaskara.rocks/assets/images/logo.png" />
                </Helmet>

                <Navigation active="News"/>

                <div className="container-fluid">
                    <div className="container container--wrap" style={{minHeight: '100vh'}}>

                    </div>
                </div>

                <Footer />
            </div>
        )
    }
};

export default NewsPage;