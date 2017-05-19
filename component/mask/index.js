import React, {Component, PropTypes}  from 'react';
import classNames from 'classnames';
import './style.less'

export default class Mask extends Component {

    handleClick (e) {
        e.stopPropagation();
        e.preventDefault();
        // TODO 如何自动隐藏比较好
        if ( this.props.onClick ) {
            this.props.onClick();
        }
    };

    render () {
        const {isShow ,type, children , hide, className, onClick} = this.props;
        const cls = classNames({
            ['wrc-mask'] : true,
            ['wrc-mask-show']:isShow,
            [className]: className,
        });

        return (
            <div className={cls} onClick={this.handleClick.bind(this)} onTouchMove={(e)=>e.preventDefault()}>
                {children}
            </div>
        );

    }
}

Mask.propTypes = {
    show: React.PropTypes.bool,
    type: React.PropTypes.string,
    onClick: React.PropTypes.func,
};

Mask.defaultProps = {
    show: false,
    hide: false,
};