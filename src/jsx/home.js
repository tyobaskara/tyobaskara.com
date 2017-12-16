import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';
import { HomeAbout } from './component/home-about';
import { SliderMe } from './component/sliderme';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.testAlert = this.testAlert.bind(this);
    }

    testAlert(event) {
        console.log(event);
        alert('this button text is: ' + event.target.textContent + '\n' + 'this button class is: ' + event.currentTarget.className);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta name="description" content="Prasetya Aji Baskara who accidently in love with front end technology and decided to explore more with it" />
                    <title>Home - Prasetya Aji Baskara</title>
                </Helmet>

                <Navigation active="Home"/>

                <div className="container-fluid">
                    <div className="homeAbout">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <SliderMe />
                                </div>
                                <div className="col-sm-6">
                                    <HomeAbout/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div>
                            <button type="button" className="btn btn-danger" onClick={this.testAlert}>button</button>
                        </div>

                        <p>Envelope icon: <span className="glyphicon glyphicon-envelope"></span></p> 
                        <p>Search icon: <span className="glyphicon glyphicon-search"></span></p>
                        <p>Print icon: <span className="glyphicon glyphicon-print"></span></p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;