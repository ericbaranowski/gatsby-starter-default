import React from 'react';
import Link from 'gatsby-link';
import placeholder from '../../images/placeholder.jpg';

const CardHover = ({children, title}) => (
    <Link to="/" className="card-hover">
        {/* <a href="" className="card-hover__media-link card-hover__media-link--"> */}
            <img src={placeholder} className="card-hover__img" />
        {/* </a> */}
        <h3 className="card-hover__title">{title}</h3>
    </Link>
);

export default CardHover;
