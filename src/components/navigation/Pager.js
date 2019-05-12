import React, { Component } from 'react';

export default class Pager extends Component {
    render() {
        return (
            <ul className="pager">
                <li className="pager__item"><a href="" className="pager__link"></a></li>
                <li className="pager__item"><a href="" className="pager__link pager__link--active"></a></li>
                <li className="pager__item"><a href="" className="pager__link"></a></li>
                <li className="pager__item"><a href="" className="pager__link"></a></li>
            </ul>
        );
    }
}
