import React, { Component, PropTypes }  from 'react';
import './style.less';


class CInput extends Component {
    
    constructor(props) {
        super(props);

        let { verify, normalize } = this.props;
        this.verify = verify || [];
        this.normalize = normalize || [];

        this.state = {
            text: ''
        };
    };
    
    handleChange = (t) => {
        this.props.onChange && this.props.onChange(t.target.value);

        let value = t.target.value;
        let isValidate = true;
        
        this.normalize.map(x=>{value = x(value);});
        this.setState({text: value});

        this.verify.map(x=> isValidate =  isValidate && x(isValidate));
    }

    clearAll = () => {
        this.setState({text: ''});
        this.props.onChange && this.props.onChange('');
    }

    showInfo = () => {
        this.props.showInfo && this.props.showInfo();
    }
    render() {
            
        let cls = this.props.className || '';
        cls = 'wrc-cinput-wrap '+cls;
        
        let type = this.props.type || 'text';
        let clear = this.state.text.length > 0 ? (<img alt="" className="wrc-cinput-clear" onClick={this.clearAll} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAm5JREFUSA29lr9v2kAYhm0DAwIWEAiVqVPnVorUDlGn7JHaKX9Lxv4tmVqpe6cqQyNVamemTkkRyDAhBn7lfSzOOl/Prk1oT0J3Pr/3Pv4+vrMvDEq06XT6crvdXoZheL7f70fqn7FM4weN79Xf1mq1z4PB4Off7MIigUDvBfogzYsinXVvLPC1wB+tuczQC5xMJs+lutGTv86oS14o6jtJr4bD4S93yR/A2Wz2drPZfJKw54orXsf1ev1dv9//aq/LAIEphV8UWcMWHTtWpGul+MKGpkDSKNB3mT81Mvf5YoHPTHoj6+7NP4BhTwB4Jy0BUo2+AtF/EHQ6nUBPaPS5PRq0rHEb3jCYT4CH0nd1QbPZDFqtVtDtdguhwNCgZY2vGUZ42NQ/fCJj1Gg0gvV6HcznczZ7RlpGYxaogF5FIl+aCbfHHAgwoG6kVWB4w4q06NwF2dd50KowPGHVZTiyAb6xgRIhkfZ6vSS1RanO8RkRYfIi9gnsOQPVWyipxKowvGDZ+9D2zx0DNo20Vmz7SAYPZRZhblJKEZlI3UIq8hLrNym9LxJxz4VRuXEc51Zvnh8sIrzNE+TBSCu/oi3j84QV8aX23SyCGT3QxWJROlJY0eFYMDYmdt9ut5NtkPeWQbvb7TJQ1uS0MaykSkW+9olWq1WwXC69rzRbD5T0omWNrxlGWtf6Hn5Tio46UvgA9pyK5U7fwzfM2fvwStexLTzRGE+8k5YC+SJzBtHTrM3Np/Z44Wm+9vilQC44eyjXFxqeItIYL/s8AyMDZAKBnuxMP456RzXW4uHCMEuLxuf83w7CLvxwKjjJUf8RO2p4Y/b+jLMAAAAASUVORK5CYII="/>) : this.props.needinfo ? <img alt="" className="wrc-cinput-info" onClick={this.showInfo} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAA9dJREFUWAntWM9rE0EUTtKkUsil9qC0WCoE4lVBqAeRHLzESi16kuAp/YUInm1BWvwHPDVt46FQPESl2toc9FCkBwuCnlNoC0VrpbQFL60kTfy+zQzdrNmZiemPyw7Mvtl5b7735c3szJv4fF7xIuBFwIuAF4HTjID/KJyn0+nLhULhDrCuo7aVSqVW4vr9/g2IH6iLwWDwbTKZ/Mb+ekpdhFOp1D2QewYCUTsJEC3xHTonfg664YGBgdd2+1raTkCjsZOTkxcR0Zcw7uQAkFiGmEHNNjY2ruXz+c3m5mb/7u7u+UAgECkWi10g34PaARuWJUT8fm9v71r51fxZM+GJiYkbBwcHb+CiBURXIIf6+/szMqpurkE2gBl5AP0o6gXU7YaGhrt9fX2f3MZU66+JMMkiWh/hPASC0+3t7cl4PP6nGrBbXyaTCe/s7EwDoxsYeczAzVpIGxMWy+ALiDCyo1iHT91I6fpB1j8+Pv4c8hFst7E8rpouj4AOXOrFmiXZ6XrIEg8YJSyjx5BzeG0R2NKVUhoR5m4AlE44WOEyUCJCiaUzz6qyA1YxHA4nYLOJ2il8qIZYOiPCmDpuXdymnpiuWdhaW5uKQSKR+A3iIwLb8qGyp067hnkoYJv6CuBlTOMlSC0RnVO7fmFhIZjL5b7j950LhUJXdIeLNsLiBKOPmaMmS9BYLFaAmGXb5ouvVYuWMEbxuGXJloX+yfWLXeC93rJsgUBIbOnLdWjQVXOoaGMTm/zqYZe6hemNqy0qtdiLV7G/s9PyVamtfNNGGM5buRQikQi/5mMpIMskiR+1lTSpnGgJy8FbW1vGtnKMqWxqarKwTb4RLQmAbOCXW4mMKYFa7fb392Vkf+rGagkDgPmsj1mXDux/9VgSEtvypcIxIbxIAIB2qYDq0WEGJbblS4WlJcybAgEAynxWa69yVk2XzWbPoN8iLH1Vs5N9WgLi5MmBbIfIZ+XYI5Hr6+sPAdSCmtOdcnSoJUwjfHjDlCijzGfLTeVzHmPkYeBqODU1RaJDNLD5cLW37JRam3JsbOwzXpmxvUNO0QNZV04hcogPmLkYcJcGBwev2dy5No0izNG8g0Fsw0G3SL6Nxzq9C7IvBFkm8MQ2KtpszY7iuCLNMZ9limi30bW5DPb29l6RLGbp+K5IkghJy0so+jbhdCQajaZF1iXN/pHcDcQHNgSyZ2Fw/JdQyaLKNf8XdLMgnxWJzAaPW55g4lC4BZK3YcOPjOXkrvllf+UnrzUgwptCxR8pdhtH+3T+SHGQ8J3kX1VO3967FwEvAl4EvAicbAT+Amycnnz8TJtuAAAAAElFTkSuQmCC"/> : '';
        return (
            <div className={cls}>
                <input className="wrc-cinput-text" name="" placeholder={this.props.placeholder || ''} type={type} value={this.state.text} onChange={this.handleChange}/>
                {clear}
            </div>

        );
    }
}

export default CInput;
