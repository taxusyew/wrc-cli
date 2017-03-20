import React, { Component, PropTypes }  from 'react';
import './style.less';

class TripleListitem extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        };
    };

    render() {
        let cls = this.props.className || '';
        
        cls = 'stk-triplelistitem ' + cls;
        return (
            <div className={cls}>
                { this.props.children }
            </div>
        );
    }
}

TripleListitem.left = ({children}) => {
    return (<div className="stk-triplelistitem-left">{children}</div>)

}


TripleListitem.center = ({children}) => {
    return (<div className="stk-triplelistitem-center">{children}</div>)

}

TripleListitem.right = ({children}) => {
    return (<div className="stk-triplelistitem-right">{children}</div>)

}
export default TripleListitem;
