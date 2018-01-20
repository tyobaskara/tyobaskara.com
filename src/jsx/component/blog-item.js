import React from 'react';
import { NavLink } from 'react-router-dom';

export const BlogItem = (props) => {
    return (
        <li>
            <NavLink to={"/Blog/" + props.post.id + '/' + props.post.title} className="blogList__card">
                <div className="blogList__desc">
                    <div className="blogList__desc-image">
                        <img src={props.photo.thumbnailUrl} alt={props.photo.title}/>
                    </div>
                    <h2 className="blogList__desc-title">{props.post.title}</h2>
                </div>
                <div className="blogList__read">
                    <span>Read more <i className="fa fa-caret-right"></i></span>
                </div>
            </NavLink>
        </li>
    )
}