import React from 'react';
import classNames from 'classnames';
import './style.less';

export default class NavItem extends React.Component {

    render () {
        
		const {children , className, ...others} = this.props;

		const cls = classNames({
	        ['wrc-navitem'] : true,
	        [className]: className,
	    });

		return (
	            <div className={cls} {...others}>{children}</div>
	    );

    }
}

NavItem.defaultProps = {
    disabled: false,
    type: 'default',
};

NavItem.propTypes = {
    disabled: React.PropTypes.bool,
    type: React.PropTypes.string,
};
