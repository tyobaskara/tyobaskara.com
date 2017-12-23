import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';

class Contact extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Contact - Prasetya Aji Baskara</title>
                    <meta name="title" content="Tyobaskara.rocks : Front End Developer from Zero to Zoro" />
                    <meta name="description" content="I became really passionate as a Front End Developer and kept creating since then. It absolutely has its ups and downs" />
                </Helmet>

                <Navigation active="Contact"/>

                <div className="container-fluid">
                    <div className="container">
                        <div className="skills">
                            <h1>Contact</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Contact;