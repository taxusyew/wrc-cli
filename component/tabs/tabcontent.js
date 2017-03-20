import React from 'react';
import classNames from 'classnames';
import './style.less'

export default class TabContent extends React.Component {

    render () {
        const { className, children} = this.props;
        
        const clsTab = classNames({
            ['wrc-tabcontent'] : true,
        });

        return (
            <span className={clsTab}>
                {children}
            </span>
        );

    }
}

TabContent.propTypes = {
    show: React.PropTypes.bool,
};

TabContent.defaultProps = {
    show: false,
};