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
                        {this.props.title ? <h1 className="title">{this.props.title}</h1> : ''}
                        {this.props.subtitle ? <h2 className="subtitle">{this.props.subtitle}</h2> : ''}
                    </div>
                </div>
            </div>
        )
    };  
} 