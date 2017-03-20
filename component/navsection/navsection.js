import React from 'react';
import classNames from 'classnames';
import './style.less';

export default class NavSection extends React.Component {

    render () {
        
		const {children , className, ...others} = this.props;

		const cls = classNames({
	        ['wrc-navsection'] : true,
	        [className]: className,
	    });

		return (
	            <div className={cls} {...others}>{children}</div>
	    );

    }
}

NavSection.defaultProps = {
    disabled: false,
    type: 'default',
};

NavSection.propTypes = {
    disabled: React.PropTypes.bool,
    type: React.PropTypes.string,
};
