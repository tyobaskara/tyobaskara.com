import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';
import { Footer } from './component/footer';

class Contact extends React.Component {
    constructor(props){
        super(props);
    }

    render = () => (
        <div>
            <Helmet>
                <title>Contact - Prasetya Aji Baskara</title>
                <meta name="title" content="Tyobaskara.rocks : Contact" />
                <meta name="description" content="Don't hestitate to contacting me, lets make our live surrounded by happiness" />
            </Helmet>

            <Navigation active="Contact"/>

            <div className="container-fluid">
                <div className="container">
                    <div className="skills">
                        <h1>Don't hestitate to contact me</h1>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;