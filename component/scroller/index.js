import React from 'react';
import classNames from 'classnames';
import './style.less';
import {deviceWidth} from '../devices/index.js';

let startX = 0;
let startY = 0;
let lastX  = 0;
let startTime = '';
let endTime = '';

export default class Scroller extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movex : 0,
            animate: false
        }
    }

    touchStartHandler= (e)=>  {
        startX = e.changedTouches[0].pageX;
        startTime = (new Date()).getTime();
        
        console.log(startTime);
        this.setState({animate: false});
    }

    
    touchMoveHandler = (e) => {
        console.log("move lastx:"+lastX);
        let deltaX = e.changedTouches[0].pageX - startX + lastX;
        this.setState({movex:deltaX});
    }

    touchEndHandler = (e) => {
        let maxTrans =  this.props.innerWidth - deviceWidth() ;

        endTime = (new Date()).getTime();

        lastX = this.state.movex ;

        if ( lastX > 0 ) {
            this.setState({movex:0, animate: true});
            lastX = 0;
        } else if ( Math.abs(lastX) > maxTrans ) {
            this.setState({movex: -maxTrans, animate: true});
            lastX = -373;
        } else {
            
            let deltaX = e.changedTouches[0].pageX - startX;
            let deltaTime = endTime - startTime;
            let velocity = deltaX / deltaTime;
            let swipe_signle = 0.2;
            
            console.log(velocity);
            
            let gap = velocity > swipe_signle ? 10 : 0;
            
            lastX = this.state.movex;
            this.setState({movex: lastX , animate: true});
            
        }

        console.log("end lastx:"+lastX);
    }

    render () {
		const {children , type, className, ...others} = this.props;

		const cls = classNames({
	        ['wrc-scroller'] : true,
	        [className]: className,
	    });

        const clsInner = classNames({
            ['wrc-scroller-inner'] : true,
            ['wrc-scroller-animate']: this.state.animate
        });

        let style = {
            transform: `translateX(${this.state.movex}px)`
        };
        

        return (
            <div className={cls}>
                <div 
                    className={clsInner}
                    onTouchStart={this.touchStartHandler}
                    onTouchMove={this.touchMoveHandler}
                    onTouchEnd={this.touchEndHandler}
                    style={style}
                >{children}</div>
            </div>
            
        )
    }
}

Scroller.defaultProps = {
    type: 'default',
    innerWidth: 770,
};

Scroller.propTypes = {
    type: React.PropTypes.string,
    innerWidth: React.PropTypes.number,
};
