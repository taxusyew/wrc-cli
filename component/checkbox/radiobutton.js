import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import './style.less'

export default class RadioButton extends Component {

    render () {
		const {type ,disabled, children , onClick, name, label, id, className} = this.props;

		const cls = classNames({
	        ['wrc-radio-btn'] : true,
	        [className]: className,
	    });

		return (
			<span className={cls} >
				<input type="radio" id={id} name={name} />
			    <label htmlFor={id} >{label}</label>
			    <div className="wrc-radio-check">
				    <div className="wrc-radio-inside">
				    </div>
			    </div>
		    </span>
		);

    }
}

RadioButton.defaultProps = {
    disabled: false,
    type: 'default',
};

RadioButton.propTypes = {
    disabled: PropTypes.bool,
    type: PropTypes.string,
};