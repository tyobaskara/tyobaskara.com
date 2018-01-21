import React from 'react';

export const NewsItem = (props) => {
    return (
        <li>
            <a className="nts-item" href={props.data.url} target="_blank">
                <div className="nts-item__image">
                    <img src={props.data.urlToImage}/>
                </div>
                <div className="nts-item__front">
                    <h3 className="nts-item__title">{props.data.title}</h3>
                    <span className="nts-item__date">published on {props.data.publishedAt.split('T')[0]}</span>
                </div>
            </a>
        </li>
    )
}