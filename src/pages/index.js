import React from 'react'
import Link from 'gatsby-link'
import logo from '../svg/logo-a.svg';
import CardHover from '../components/cards/CardHover';

const sectionStyle = {
    display: 'flex',
    // 'flex-direction': 'column',
    // 'justify-content': 'center',
    height: '100vh'
};

const IndexPage = () => (
    <div>
        <div className="section" style={sectionStyle}>
            <div style={{position: 'relative', display: 'flex', 'flex-direction': 'column', height: '100vh','justify-content': 'center'}}>
                <h1>Activ Business Solutions</h1>
                <h2 className="p">Thames Valley's leading business products and services provider</h2>
                {/* <div className="section-intro__btns">
                    <div className="btn-group">
                        <a href="" className="btn btn--primary btn-group__btn">Catalogue</a>
                        <a href="" className="btn btn-group__btn">Promotional</a>
                    </div>
                </div> */}
                {/* <img src={logo} alt="Activ Business Solutions Logo" style={{position: 'absolute', 'z-index': -1, width: '100%'}}/> */}
            </div>
            {/* 1px 0 6px rgba(255,255,255,0.8) */}
            {/* <div style={{'width': '300px', display: 'flex', height: '100vh', 'align-items': 'center'}}>
                <img src={logo} alt="Activ Business Solutions Logo" style={{width: '100%'}}/>
            </div> */}
        </div>
        <div className="m-scroll-block">
            <div className="row">
                <div className="col-sm-6">
                    <h2>Our Ethos</h2>
                    <p>At Activ Business Solutions we specialise in supplying organisations with a single source solution for all business products. Whether purchasing office furniture, redeveloping a company website, or reviewing office stationery, our focus is delivering products and services that enable customers to do what they do best – manage and grow their business.</p>
                    <p>No two clients are the same and we believe they should be treated uniquely by their suppliers and that the customer comes first in everything that we do.</p>
                    <p>Our aim is to be something different within the market. Focusing on the changing landscape and investing in skills and support that will tangibly benefit our client base, specifically within digital marketing and web design, is a focus that will enable our clients to grow and reduce their cost base even further, and we are committed to invest and deliver on the developments in technology and digital solutions consistently.</p>
                </div>
                <div className="col-sm-6">

                </div>
            </div>
        </div>

        <div className="m-scroll-block">
            <div className="section-content">
                <div className="section-content__header">
                    <h2 className="section-content__heading">Our Services</h2>
                    <p className="section-content__text">To interest and engage a user, we used wow-animation — the effect of a “page freezing” continues the theme of freezing. We also don’t forget about the benefit. So we told about functions and put them into the client’s world. Main Page ends with FAQs and Freezing Encyclopedia to offer users to choose a freezer.</p>
                </div>
                <ul className="card-hover-list">
                    <li className="card-hover-list__item">
                        <CardHover title="Office Supplies" />
                    </li>
                    <li className="card-hover-list__item">
                        <CardHover title="Office Supplies" />
                    </li>
                    <li className="card-hover-list__item">
                        <CardHover title="Office Supplies" />
                    </li>
                    <li className="card-hover-list__item">
                        <CardHover title="Office Supplies" />
                    </li>
                    <li className="card-hover-list__item">
                        <CardHover title="Office Supplies" />
                    </li>
                    <li className="card-hover-list__item">
                        <CardHover title="Office Supplies" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default IndexPage
