import React from 'react';
import classNames from 'classnames';
import './style.less';

export default class HeaderSection extends React.Component {
    render () {
		const {children , className, ...others} = this.props;

		const cls = classNames({
	        ['wrc-header-section'] : true,
	        [className]: className,
	    });

        return (
            <div className={cls} >{children}</div>
        )
    }
}

HeaderSection.defaultProps = {
    type: 'default',
};

HeaderSection.propTypes = {
    type: React.PropTypes.string,
};
