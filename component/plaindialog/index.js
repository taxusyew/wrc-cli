import React from 'react';
import classNames from 'classnames';
import './style.less';
import Mask from '../mask/index.js';
import Button from '../button/index.js';

export default class PlainDialog extends React.Component {

    render () {
        const {show , children , className, title, footer} = this.props;

        let footerDom = '';
        let cls = 'wrc-dialog '+ className;

        return (
            <Mask isShow={show} >
                <div className={cls}>
                    {this.props.children}
                </div>
            </Mask>
        );

    }
}

PlainDialog.propTypes = {
    show: React.PropTypes.bool,
    type: React.PropTypes.string
};

PlainDialog.defaultProps = {
    show: false,
    hide: false
};
