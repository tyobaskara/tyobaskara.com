import React from 'react';

export const HeroBanner = () => {
    return (
        <div className="heroBanner">
            <div className="heroBanner__image">
                <img src="./assets/images/herobanner-1.jpg" alt="banner"/>
            </div>
            <div className="heroBanner__content">
                <div className="container">
                    <h1>Prasetya A. Baskara</h1>
                    <p>Front End Developer</p>
                </div>
            </div>
        </div>
    );
}