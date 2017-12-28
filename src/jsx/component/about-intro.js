import React from 'react';
import { SliderAbout } from './slider-about';

export const AboutInro = (props) => (
    <div className="aboutIntro">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <SliderAbout />
                </div>
                <div className="col-sm-6">
                    <div className="aboutIntro__description">
                        <h3>Who am i ?</h3>
                        <p>As time goes by, I’m really grateful that I’m able to make a living through it and made my passion my work. I became really passionate as a Front End Developer and kept creating since then. It absolutely has its ups and downs but if you love what you do and are able to provide value to people, the outcomes are far more rewarding!</p>
                        <a href="/About" className="btn btn-brown">Find Out More!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);