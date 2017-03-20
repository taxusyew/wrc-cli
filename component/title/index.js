import React from 'react';
import classNames from 'classnames';
import './style.less';

export default class Title extends React.Component {

    render () {
        
        const {type , disabled, children , className, ...others} = this.props;
        
		const cls = classNames({
	        ['wrc-title'] : true,
	        ['wrc-title-sub1'] : type == 'sub1',
	        ['wrc-title-sub2'] : type == 'sub2',
	        [className]: className
	    });

		return (
	        <div className={cls} >{children}</div>
	    );

    }
}
