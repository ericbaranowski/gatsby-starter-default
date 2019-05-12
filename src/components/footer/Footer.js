import React from 'react';

import logo from '../../svg/logo-a.svg';
import SocialIconLinks from '../icons/SocialIconLinks';

const Footer = () => (
    <footer className="o-footer">
        <div className="container">
            <div className="row">
                <div className="o-footer__about">
                    <div className="m-media">
                        <a href="" className="m-media__figure" style={{'margin-right': '24px'}}>
                            <img src={logo} alt="Activ Business Solutions Logo" style={{'max-width': '100px', width: '100%'}}/>
                        </a>
                        <div className="m-media__body">
                            <h3 className="temp-underline">About Activ</h3>
                            <p>At Activ Business Solutions we specialise in supplying organisations with a single source solution for all business products. Whether purchasing office furniture, redeveloping a company website, or reviewing office stationery, our focus is delivering products and services that enable customers to do what they do best – manage and grow their business.</p>
                        </div>
                    </div>
                </div>
                <div className="o-footer__links">
                    <nav className="o-footer__nav">
                        <h3 className="temp-underline">Explore</h3>
                        <ul className="list">
                            <li className="list__item"><a href="/articles/about">About</a></li>
                            <li className="list__item"><a href="/articles/about">Find us</a></li>
                            <li className="list__item"><a href="/articles/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="o-footer__social">
                <SocialIconLinks />
            </div>
            <div className="o-footer__copyright">
                <p className="text-small text-margin-bottom-0"><small>&copy;activ.....</small></p>
            </div>
        </div>
    </footer>
);

export default Footer;
