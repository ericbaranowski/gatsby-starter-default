import React from 'react'
import Link from 'gatsby-link'
import Navigation from './navigation';
import logo from '../../svg/logo.svg';
import BurgerMenu from '../buttons/BurgerMenu';
import BodyToggleButton from '../buttons/BodyToggleButton';


const Header = ({ siteTitle, categories }) => {

    return (
        <header className="o-header">
            <Link to="/" className="o-header__logo">
                <img src={logo} alt="Activ Business Solutions Logo" />
            </Link>
            <BodyToggleButton toggleClass="js-menu-open" ariaLabel="Close menu" buttonClass="o-header__menu-btn menu-btn">
                <BurgerMenu />
            </BodyToggleButton>
            <div className="o-header__nav-container">
                <Navigation categories={categories} />
            </div>
        </header>
    );
};

export default Header;
