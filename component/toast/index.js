import React from 'react';
import classNames from 'classnames';
import './style.less'

export default class Toast extends React.Component {

    render () {
        const {show ,type, children , hide, className} = this.props;
        const cls = classNames({
            ['wrc-toast'] : true,
            ['wrc-toast-top'] : type === 'top',
            ['wrc-toast-middle'] : type === 'middle',
            ['wrc-toast-bottom'] : type === 'bottom',
            ['wrc-toast-hide']: hide === true,
            [className]: className,
        });

        return (
            <div className={cls}>
                <p className="wrc-toast-content">{children}</p>
            </div>
        );

    }
}

Toast.propTypes = {
    show: React.PropTypes.bool,
    type: React.PropTypes.string,
};

Toast.defaultProps = {
    show: false,
    type:'bottom',
    hide: false
};