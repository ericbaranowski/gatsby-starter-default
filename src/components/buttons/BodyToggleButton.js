import React, { Component } from 'react';

export default class BodyToggleButton extends Component {

    toggleClass = () => {
        document.body.classList.toggle('js-menu-open');
    }

    render() {
        const { buttonClass, ariaLabel, children } = this.props;

        return (
            <button
                onClick={ this.toggleClass }
                aria-label={ariaLabel}
                className={ buttonClass }>
                { children }
            </button>
        );
    }
}
