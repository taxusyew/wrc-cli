import React from 'react';
import classNames from 'classnames';
import './style.less'
import Mask from '../mask/index.js';
import Button from '../button/index.js';

export default class Loading extends React.Component {

    render () {
        const {show , className, label, ismodal } = this.props;
        
        const clsLabel = classNames({
            ['wrc-loading-label'] : true,
        });

        const clsLoad = classNames({
            ['wrc-loading']: true,
            ['wrc-loading-hide'] : show == false,
        });

        const loaddom = (<div className={clsLoad}>
                    <div className='wrc-loading-spin'></div>
                    <div className={clsLabel}>
                        {label}
                    </div>
                </div>);

        let renderdom = '';

        if( ismodal ) {
            renderdom = (
                <Mask isShow={show} >
                    {loaddom}
                </Mask>
            )
        } else {
            renderdom = loaddom;
        }

        return (renderdom );
    }
}

Loading.propTypes = {
    show: React.PropTypes.bool,
    ismodal: React.PropTypes.bool,
    hide: React.PropTypes.bool,
    label: React.PropTypes.string,
};

Loading.defaultProps = {
    show: false,
    ismodal: true,
    hide: false,
    label: '正在加载...'
};