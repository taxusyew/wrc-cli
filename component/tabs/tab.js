import React from 'react';
import classNames from 'classnames';
import './style.less'

export default class Tab extends React.Component {

    handleClick = (event) => {
        if (!this.props.disabled && this.props.onClick) {
          this.props.onClick(event);
        }
    };

    render () {
        const {show , className, children, label, ...others} = this.props;
        
        const clsTab = classNames({
            ['wrc-tab'] : true,
        });

        return (
            <label {...others} className={clsTab} onClick={this.handleClick}>
                {label}
            </label>
        );

    }
}

Tab.propTypes = {
    show: React.PropTypes.bool,
    label: React.PropTypes.string,
};

Tab.defaultProps = {
    show: false,
    label: 'tab'
};