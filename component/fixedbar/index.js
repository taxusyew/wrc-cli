import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import './style.less';

export default class FixedBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    static contextTypes = {
        'parent': React.PropTypes.any
    }

    componentWillMount() {
        this.parent= this.context['parent'];
        console.log(this.parent);
    }

    componentDidMount() {
        this.onevent(['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'], this.recomputeState);
        this.recomputeState();
    }

    componentWillReceiveProps() {
        this.recomputeState();
    }
    
    componentWillUnmount() {
        this.offevent(['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'], this.recomputeState);
        this.recomputeState();
    }
    
    onevent(events, callback) {
        events.forEach((evt) => {
            window.addEventListener(evt, callback);
        });
    }

    offevent(events, callback) {
        events.forEach((evt) => {
            window.removeEventListener(evt, callback);
        });
    }

    getXOffset() {
        return this.refs.placeholder.getBoundingClientRect().left;
    }

    getWidth() {
        return this.refs.placeholder.getBoundingClientRect().width;
    }

    getHeight() {
        return ReactDOM.findDOMNode(this.refs.children).getBoundingClientRect().height;
    }

    getDistanceFromTop() {
        return this.refs.placeholder.getBoundingClientRect().top;
    }

    getDistanceFromBottom() {
        if (!this.parent) return 0;
        /*         console.log(ReactDOM.findDOMNode(this.parent).getBoundingClientRect().bottom); */
        return ReactDOM.findDOMNode(this.parent).getBoundingClientRect().bottom;
    }

    isFixed () {
        const fromTop = this.getDistanceFromTop();
        return fromTop <= 0 ? true : false;
    }

    recomputeState = () =>  {
        const isFixed = this.isFixed();
        const height = this.getHeight();
        const width = this.getWidth();
        const xOffset = this.getXOffset();
        const containerBottom2Top = this.getDistanceFromBottom();

        this.setState({ isFixed, height, width, xOffset, containerBottom2Top});

    }
    
    render () {
        const {children , className } = this.props;

        const cls = classNames({
            ['wrc-fixedbar'] : true,
            ['wrc-fixedbar-fixed'] : this.state.isFixed,
        });

        let showStyle = Object.assign({}, { transform: 'translateZ(0)' }, this.props.style);
        let placeholderStyle = { paddingBottom: 0 };

        
        if (this.state.isFixed) {
            const fixedStyle = {
                position: 'fixed',
                top: 0,
                left: this.state.xOffset,
                width: this.state.width
            };

            const diffHeight =  this.state.containerBottom2Top - this.state.height 
            if ( diffHeight <= 0 ) {
                fixedStyle.top = diffHeight ;
            }

            placeholderStyle.paddingBottom = this.state.height;

            showStyle = Object.assign({}, showStyle, fixedStyle, this.props.stickyStyle);
        }

        return (
            <div>
                <div ref="placeholder" className="wrc-fixedbar-placeholder" style={placeholderStyle} ></div>
                <div className={cls} ref="children" style={showStyle}>{children}</div>
            </div>
            
        );

    }
}

FixedBar.propTypes = {
    className: React.PropTypes.string,
    style: React.PropTypes.object,
    stickyClassName: React.PropTypes.string,
    stickyStyle: React.PropTypes.object,
    topOffset: React.PropTypes.number,
    bottomOffset: React.PropTypes.number,
};

FixedBar.defaultProps = {
    className: '',
    style: {},
    stickyClassName: 'sticky',
    stickyStyle: {},
    topOffset: 0,
    bottomOffset: 0,
};
