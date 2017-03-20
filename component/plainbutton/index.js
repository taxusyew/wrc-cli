import React, { Component, PropTypes }  from 'react';
import './style.less';
import classNames from 'classnames';
import Tappable from 'react-tappable';

class PlainButton extends Component {
    
    render() {
        let {children, className, onClick, ...others} = this.props;
        
        return (
            <Tappable classBase="wrc-plain-button" onTap={onClick} className={className}>
                { children }
            </Tappable>
        );
    }
}

export default PlainButton;
