import React, {Component, PropTypes}  from 'react';
import './style.less';

export default class Hint extends Component {
    
    constructor(props) {
        super(props);
    };
    
    render() {
        let cls = this.props.className || '';
        cls = 'wrc-hint '+cls;
        
        return (
            <div className={cls}>
                {this.props.children}
            </div>
        );
    }
}
