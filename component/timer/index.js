import React, {Component, PropTypes}  from 'react';
import './style.less';

import Button from '../button/index.js';

// 两个参数，外部传入单位为秒

export default class Timer extends Component {
    
    constructor(props) {
        super(props);

        let {interval, loopTime, onClick} = this.props;

        this.interval = interval * 1000 || 1000;
        this.initLoopTime = loopTime * 1000 || 60*1000;
        this.loopTime = this.initLoopTime;
        
        console.log(this.interval);
        console.log(this.initLoopTime);
        this.state = {
            loopTime : this.initLoopTime
        };

    };
    
    countDown = () => {
        this.loopTime -= this.interval;
        this.setState({loopTime: this.loopTime});
    }

    startCount = () => {
        this.timer = setInterval(this.countDown, this.interval);
    }

    handleClick = () => {
        this.props.onClick && this.props.onClick();
        this.loopTime = this.initLoopTime;
        this.countDown();
        this.startCount();
    }

    render() {
        let button = '';
        let cls = this.props.className || '';

        // 如果当前剩余时间小于初始化时间，就还是倒计时，不能点击
        if ((this.state.loopTime < this.initLoopTime) && this.state.loopTime > 0) {
            button = (<Button disabled>{this.state.loopTime / 1000}s 后重新发送</Button>);
        } else {
            // 如果剩余时间等于初始化时间，或者小于0，那么就可以点击
            button = (<Button onClick={this.handleClick}>点击发送验证码</Button>);
            clearInterval(this.timer);
        }
        return (
            <div className={cls}>
            {button}
            </div>
            
        );
    }
}

Timer.protoTypes = {
    interval: React.PropTypes.number.isRequired,
    loopTime: React.PropTypes.number.isRequired
}
