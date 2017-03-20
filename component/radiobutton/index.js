import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import RadioButton from './radiobutton.js'
import './style.less'

export default class RadioGroup extends Component {

    render () {
        
        // 后期根据不同平台得到不同的 DOM 元素
		const {type ,disabled, children , onClick, className} = this.props;

		const cls = classNames({
	        ['wrc-btn'] : true,
	        ['wrc-btn-default']: type === 'default',
	        ['wrc-btn-info']: type === 'info',
	        ['wrc-btn-danger']: type === 'danger',
	        ['wrc-btn-warn']: type === 'warn',
	        ['wrc-btn-disabled']: disabled,
	        [className]: className,
	    });

		return (

			<div>
				<RadioButton id="lala" name="haha" label="吃菜"/>
				<RadioButton id="wawa" name="haha" label="吃肉"/>
			</div>
        
	    );

    }
}

RadioGroup.defaultProps = {
    disabled: false,
    type: 'default',
};

RadioGroup.propTypes = {
    disabled: PropTypes.bool,
    type: PropTypes.string,
};