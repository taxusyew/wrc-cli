import React from 'react';
import classNames from 'classnames';
import './style.less';

export default class Button extends React.Component {

    handleClick = () => {
        if (this.props.disabled) {
            return
        }
        this.props.onClick && this.props.onClick();
    }

    render () {
        
        // 后期根据不同平台得到不同的 DOM 元素
		let Component = 'Button';
		const {type ,disabled, children , onClick, className, ...others} = this.props;

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
	        <Component className={cls} onClick={this.handleClick}>{children}</Component>
	    );

    }
}

Button.defaultProps = {
    disabled: false,
    type: 'default',
};

Button.propTypes = {
    disabled: React.PropTypes.bool,
    type: React.PropTypes.string,
};
