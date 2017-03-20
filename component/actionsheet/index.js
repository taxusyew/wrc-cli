import React from 'react';
import classNames from 'classnames';
import './style.less'
import Mask from '../mask/index.js';

export default class ActionSheet extends React.Component {

    render () {
        
        // 后期根据不同平台得到不同的 DOM 元素
		const {show, children , overlayClick, className, ...others} = this.props;

		const cls = classNames({
	        ['wrc-actionsheet'] : true,
	        ['wrc-actionsheet-show'] : show == true,
	        [className]: className,
	    });

		return (
			<div>
		        <Mask
	                isShow={show}
	                onClick={overlayClick}
	            ></Mask>
            	<div className={cls} {...others}>
                    {children}
                </div>
            </div>
	    );

    }
}

ActionSheet.defaultProps = {
	show: false,
    type: 'default',
};

ActionSheet.propTypes = {
    show: React.PropTypes.bool,
    type: React.PropTypes.string,
};