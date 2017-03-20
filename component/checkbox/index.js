import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import './style.less';
import Tappable from 'react-tappable';

/* var injectTapEventPlugin = require("react-tap-event-plugin");
   injectTapEventPlugin(); */

export default class CheckBox extends Component {


	handleToggle (event) {
      if (!this.props.disabled && this.props.onClick) {
        this.props.onClick(!this.props.checked, event);
      }
    };

    handleTapEvent(e) {
        console.log(e);
    }
    
    render () {
        
        // 后期根据不同平台得到不同的 DOM 元素
		const {type ,disabled, children , onClick, className, label, checked} = this.props;

		const cls = classNames({
	        ['wrc-check'] : true,
	        [className]: className,
	    });

		const showcls = classNames({
	        ['wrc-check-show'] : true,
	        ['wrc-check-checked'] : checked == true,
	        ['wrc-check-disabled'] : disabled == true,
	        [className]: className,
	    });

		return (

			<label className={cls}>
                <Tappable onTap={this.handleToggle.bind(this)}>

	                <input
	                    className="wrc-check-input"
	                    readOnly
	                    ref='input'
	                    type='checkbox'
	                />
	                <div className={showcls} ></div>
	                <span className="wrc-check-label">{label}</span>
                    
                </Tappable>
                
	        </label>
            
	    );

    }
}

CheckBox.defaultProps = {
    disabled: false,
    checked: false,
    type: 'default',
    label: 'click me'
};

CheckBox.propTypes = {
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    type: PropTypes.string,
    label: PropTypes.string,
};
