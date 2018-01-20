import React from 'react';
import PropTypes from 'prop-types';

export const HeroBanner = (props) => {
    return (
        <div className="heroBanner">
            <div className="heroBanner__image">
                <img src={props.images} alt={props.altImages} />
            </div>
            <div className="heroBanner__content">
                <div className="container">
                    {props.title ? props.title : ''}
                    {props.subtitle ? props.subtitle : ''}
                </div>
            </div>
        </div>
    )
}

HeroBanner.propTypes = {
    images: PropTypes.string,
    altImages: PropTypes.string,
    title: PropTypes.object,
    subtitle: PropTypes.object
}