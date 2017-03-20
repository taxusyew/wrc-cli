import React from 'react';
import classNames from 'classnames';
/* import './style.less'; */

export default class CircleProgress extends React.Component {

    render () {
        
		const {children , radius, strokeWidth, className, percent,  ...others} = this.props;

        /* TODO 限制 percent */
		const cls = classNames({
	        ['wrc-circle-progress'] : true,
	        [className]: className,
	    });

        let real_percent = percent;
        
        if ( percent >= 100 ) {
            real_percent = 100;
        }

        if ( percent <= 0 ) {
            real_percent = 0;
        }

        let show_radius = radius - strokeWidth / 2;
        let show_diameter = 2 * show_radius;
        let show_percent = real_percent+'%';
        let len = Math.PI * 2 * radius;
        let strokeDashoffset = (100 - real_percent) / 100 * len;
        let fontSize = 35;
        let textY =  radius - strokeWidth  + fontSize / 2;

        let show_path = `
            M ${radius},${radius}
            m 0,-${show_radius}
            a ${show_radius},${show_radius} 0 1 1 0,${show_diameter}
            a ${show_radius},${show_radius} 0 1 1 0,-${show_diameter}
        `;
        
        let pathStyle = {
            strokeDasharray: len + 'px ' + len + 'px',
            strokeDashoffset: (100 - real_percent) / 100 * len + 'px',
            transition: 'stroke-dashoffset 0.4s ease 0s, stroke 0.4s ease'
        };


		return (
            <svg style={{width: radius*2+'px', height: radius*2+'px'}}>
                <path d={show_path} stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
                <path d={show_path}
                      strokeLinecap="round"
                      stroke="#44B549"
                      strokeWidth={strokeWidth}
                      fillOpacity="0"
                      style={pathStyle}
                      ></path>
                <text>
                    <tspan x={radius} y={textY} fontSize={fontSize} textAnchor="middle">{show_percent}</tspan>
                </text>
                
            </svg>
	    );

    }
}

CircleProgress.defaultProps = {
    disabled: false,
    type: 'default',
    percent: 0,
    radius: 50,
    strokeWidth: 2
};

CircleProgress.propTypes = {
    disabled: React.PropTypes.bool,
    type: React.PropTypes.string,
    percent: React.PropTypes.number,
    radius: React.PropTypes.number,
    strokeWidth: React.PropTypes.number,
};
