import React from 'react';

export class HeroBanner extends React.Component {
    render() {
        return (
            <div className="heroBanner">
                <div className="heroBanner__image">
                    <img src={this.props.images} alt={this.props.altImages} />
                </div>
                <div className="heroBanner__content">
                    <div className="container">
                        {this.props.title ? this.props.title : ''}
                        {this.props.subtitle ? this.props.subtitle : ''}
                    </div>
                </div>
            </div>
        )
    };  
} 