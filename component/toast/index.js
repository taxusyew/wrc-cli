import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import './style.less'
import IconFresh from './image/icon_refresh.png';

export default class Toast extends Component {

    constructor(props) {
        super(props);
        // TODO ÿ��show����ˢ��һ�μ�ʱ��������������ʾ��ͻ�����µڶ���ʱ�䲻��
        const {show ,position, children , hide, type} = this.props;

        this.state = {
            'position': position || 'middle',
            'type': type || 'normal',
            'hide': true,
            'text': children || ''
        };
    };
    
    componentWillReceiveProps = (nextProps) => {
        this.setState(this.parseProps(nextProps));
    }

    parseProps = (nextProps) => {
        return {
            'hide': nextProps.hide,
            'text': nextProps.children || '',
            'type': nextProps.type || 'normal'
        }
    }

    render () {
        const defaultShowTime = 1500;


        const cls = classNames({
            ['wrc-toast'] : true,
            ['wrc-toast-top'] : this.state.position === 'top',
            ['wrc-toast-middle'] : this.state.position === 'middle',
            ['wrc-toast-bottom'] : this.state.position === 'bottom',
            ['wrc-toast-hide']: this.state.hide === true,
            // [className]: this.props.className || '',
        });

        let loading = (this.state.type == 'loading') ? (<img src={IconFresh} className="wrc-toast-loading"/>) : '';
        return (
            <div className={cls}>
                {loading}
                <span className="wrc-toast-content">{this.state.text}</span>
            </div>
        );

    }
}

Toast.propTypes = {
    show: React.PropTypes.bool,
    position: React.PropTypes.string,
};

Toast.defaultProps = {
    show: false,
    position:'bottom',
    hide: false
};