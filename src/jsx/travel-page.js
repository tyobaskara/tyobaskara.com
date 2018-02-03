import React from 'react';
import { Helmet } from 'react-helmet';
import { HeroBanner } from './component/herobanner';
import _ from 'lodash';

class TravelPage extends React.Component {
    componentDidMount() {
        document.getElementsByClassName("nav")[0].setAttribute('class', 'nav');
        window.scrollTo(0,0);

        var array = [1];
        var other = _.concat(array, 2, [3], [[4]]);
        
        console.log(other);
    }

    render() {
        const metaTitle = "Tyobaskara.rocks : Travel - Reservasi booking tiket pesawat hotel murah terjangkau";
        const metaDesc = "Cari tiket booking pesawat reservasi hotel harga murah, terjangkau, dan aman";

        return (
            <div>
                <Helmet>
                    <title>Travel - Reservasi booking tiket pesawat hotel murah terjangkau</title>
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

                <div className="container-fluid">
                    <HeroBanner 
                        title={<h1 className="title">Going somewhere ?</h1>}
                        subtitle={<h2 className="subtitle">Let me help you find it!</h2>}
                        images="./assets/images/herobanner-2.jpg" 
                        altImages="tyobaskara" 
                    />
                    <div className="container container--wrap" style={{minHeight: '35vh'}}>

                    </div>
                </div>
            </div>
        )
    }
};

export default TravelPage;