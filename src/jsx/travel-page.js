import React from 'react';
import { Helmet } from 'react-helmet';
import { Tab } from 'semantic-ui-react'
import { HeroBanner } from './component/herobanner';
import FindFlightTab from './component/find-flight-tab';

class TravelPage extends React.Component {
    componentDidMount() {
        document.getElementsByClassName("nav")[0].setAttribute('class', 'nav');
        window.scrollTo(0,0);
    }

    render() {
        const metaTitle = "Tyobaskara.rocks : Travel - Reservasi booking tiket pesawat hotel murah terjangkau";
        const metaDesc = "Cari tiket booking pesawat reservasi hotel harga murah, terjangkau, dan aman";

        const panes = [
            { menuItem: 'Flight', render: () => <FindFlightTab /> },
            { menuItem: 'Hotel', render: () => <p>Hotel Find</p> },
        ]

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
                        subtitle={<h2 className="subtitle">Let me help you to find it!</h2>}
                        images="./assets/images/glasses-explore.jpg" 
                        altImages="tyobaskara" 
                    />
                    <div className="container container--wrap" style={{minHeight: '50vh'}}>
                        <Tab className="find-tab" panes={panes} />
                    </div>
                </div>
            </div>
        )
    }
};

export default TravelPage;