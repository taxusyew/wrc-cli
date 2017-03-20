import React, { Component, PropTypes }  from 'react';
import './style.less';


export default class Passwd extends Component {
    
    constructor(props) {
        super(props);

        let {length} = this.props;
        this.dotArray = [];
        
        // 通过一个数组来控制真实显示的点，而非用户输入
        // 所以输入的时候要自己额外控制一下用户输入长度
        for(let i = 0; i< length; i++) {
            this.dotArray.push({});
        }

        this.state = {
            pwdLength: 0
        };
    };

    handleChange = (e) => {

        this.setState({
            pwdLength: e.target.value.length 
        });
        
        this.props.onChange && this.props.onChange(e.target.value);
    }
    
    render() {
        
        return (
            <div className="wrc-passwd">
                <input name="" type="tel" maxLength="6" className="wrc-passwd-input" onChange={this.handleChange}/>
                {this.dotArray.map((x, index)=> {

                     if ( index <= this.state.pwdLength -1) {
                         return (<span className="wrc-passwd-dot" key={index}><span className="wrc-passwd-dot-active"></span></span>)
                     } else {
                         return (<span className="wrc-passwd-dot" key={index}></span>)
                     }
                 })}
            </div>
        )
    }
}
