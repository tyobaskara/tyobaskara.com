import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';

class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Skills: ['HTML5','CSS/SCSS/SASS','Javascript','Jquery','Gulp','React']
        }
    }

    render() {
        let Skills = this.state.Skills;
        Skills = Skills.map( (item,index) => {
            return (
                <li key={index}>{item}</li>
            );
        });

        return (
            <div>
                <Helmet>
                    <title>About - Prasetya Aji Baskara</title>
                    <meta name="title" content="Tyobaskara.rocks : Front End Developer from Zero to Zoro" />
                    <meta name="description" content="I became really passionate as a Front End Developer and kept creating since then. It absolutely has its ups and downs, but if you love what you do and are able to provide value to people, the outcomes are far more rewarding!" />
                </Helmet>

                <Navigation active="About"/>

                <div className="container-fluid">
                    <div className="container">
                        <div className="skills">
                            <h1>About</h1>
                            <ul>
                                {Skills}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default About;