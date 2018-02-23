import React from 'react';
import { SliderAbout } from './slider-about';
import { NavLink } from 'react-router-dom';

export class AboutInro extends React.Component {
    state = {
        fakeLoading: true
    }

    componentDidMount() {
        console.log(this.state.fakeLoading);
        setTimeout(()=> {
            this.setState({fakeLoading: false}, () => {
                console.log(this.state.fakeLoading);
            });
        }, 750);
    }

    render() {
        return (
            <div className="aboutIntro">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                        <div className={this.state.fakeLoading ? "fakeLoading-show" : "fakeLoading-hide"}>
                            <div className="fakeLoading__img"><img src="/assets/images/loading-gear.gif" alt="loading"/></div>
                            <SliderAbout />
                        </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="aboutIntro__description">
                                <h3 className="orgTitle">Who am i ?</h3>
                                <p>As time goes by, I’m really grateful that I’m able to make a living through it and made my passion my work. I became really passionate as a Front End Developer and kept creating since then. It absolutely has its ups and downs but if you love what you do and are able to provide value to people, the outcomes are far more rewarding!</p>
                                <NavLink to="/about" className="btn btn-brown">Find Out More!</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};