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
    
    componentDidMount() {
        document.getElementsByClassName("nav")[0].setAttribute('class', 'nav');
        document.addEventListener('scroll', this.scroll); //mobile
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scroll); //mobile
    }

    scroll(event) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementsByClassName("nav")[0].classList.add("nav--active");
        } else {
            document.getElementsByClassName("nav")[0].classList.remove("nav--active");
        }
    };

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
                    <div className="container" style={{height: '50vh'}}>
                        <div className="skills">
                            <h3>About</h3>
                            <ul>
                                {Skills}
                            </ul>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
};

export default About;