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
                    <meta name="description" content="Prasetya Aji Baskara who accidently in love with front end technology and decided to explore more with it" />
                    <title>Contact - Prasetya Aji Baskara</title>
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