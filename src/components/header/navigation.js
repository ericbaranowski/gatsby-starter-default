import React from 'react';
import Link from 'gatsby-link';
import closeIcon from '../../svg/close.svg';
import SocialIconLinks from '../icons/SocialIconLinks';


const Navigation = ({ categories }) => (
    <nav className="o-navigation">
        {/* <button className="btn-icon main-menu__btn-close" role="button" id="close-menu" aria-label="Close menu">
            <img src={closeIcon} />
        </button> */}
        <div className="o-navigation__main">

            <ul className="m-nav-primary" itemScope="" itemType="http://schema.org/SiteNavigationElement">
                {categories.map((category, i) => {
                    return (
                        <li className="m-nav-primary__item" key={i}>
                            <Link
                                to={category.node.frontmatter.path}
                                className="a-nav-primary-link">
                                    {category.node.frontmatter.linkText}
                            </Link>
                        </li>
                    )
                })}
                <li className="m-nav-primary__item">
                    <a href="http://shop.activ-business.co.uk/" className="a-nav-primary-link">
                        Product Shop
                    </a>
                </li>
                <li className="m-nav-primary__item">
                    <a href="http://activ-promotional.prod-cat.com/" className="a-nav-primary-link">
                        Promotional
                    </a>
                </li>
            </ul>
        </div>
        <div className="o-navigation__footer">
            <SocialIconLinks />
        </div>
    </nav>
);

export default Navigation;
