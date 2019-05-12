import React from 'react';
import FacebookIcon from '../../svg/facebook.svg';
import LinkedInIcon from '../../svg/linkedin.svg';
import TwitterIcon from '../../svg/twitter.svg';

// https://simpleicons.org/
const SocialIconLinks = () => (
    <ul className="list-social">
        <li className="list-social__item">
            <a href="" className="list-social__link">
                <img src={TwitterIcon} alt="Find us on Titter" style={{width: '24px'}} className="list-social__img" />
            </a>
        </li>
        <li className="list-social__item">
            <a href="" className="list-social__link">
                <img src={FacebookIcon} alt="Find us on Facebook" style={{width: '24px'}} className="list-social__img" />
            </a>
        </li>
        <li className="list-social__item">
            <a href="" className="list-social__link">
                <img src={LinkedInIcon} alt="Find us on LinkedIn" style={{width: '24px'}} className="list-social__img" />
            </a>
        </li>
    </ul>
);

export default SocialIconLinks;
