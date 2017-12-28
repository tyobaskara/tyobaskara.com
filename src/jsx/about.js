import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Navigation } from './component/navigation';
import { Footer } from './component/footer';
import { HeroBanner } from './component/herobanner';

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
                    <meta name="title" content="Tyobaskara.rocks : Web Developer is My Passion" />
                    <meta name="description" content="The passion to became as a Web Developer, It's started as Front End Developer in Jakarta, Indonesia" />
                </Helmet>

                <Navigation active="About"/>

                <div className="container-fluid">
                    <HeroBanner 
                        title="The Passion" 
                        subtitle={["The only way to do great work is to love what you do" , <br/>,  "-steve jobs"]}
                        images="./assets/images/about.jpg" 
                        altImages="tyobaskara" 
                    />
                    <div className="container">
                        <div className="skills">
                            <h3>About</h3>
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