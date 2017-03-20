import React from 'react';
import classNames from 'classnames';
import './style.less';
import Tab from './tab.js';
import TabContent from './tabcontent.js';

class Tabs extends React.Component {

    constructor ( props ) {
        super(props);
        this.state = {
            indicator: {
                top: '0px',
                left: '0px',
                width: '0px'
            }
        };

    };

    componentDidMount() {
        this.updateIndicator(this.props.index);
    };

    componentWillReceiveProps (props) {
        this.updateIndicator(props.index);
    }

    parseChildren (children) {
        let headers = [];
        let contents = [];

        children.map(x=> {
            // 如果传入的元素类型为 Tab
            if (x.type === Tab) {
                headers.push(x);

                if ( x.props.children ) {
                    contents.push(<TabContent >{x.props.children}</TabContent>);
                }
            } else if (item.type === TabContent) {
                // 或者类型类 TabContent
                contents.push(item);
            }
        });

        return { headers, contents};
    };

    handleHeaderClick = (event) => {
        const idx = parseInt(event.currentTarget.id);
        if (this.props.onClick) this.props.onClick(idx);
    };

    renderHeader(headers) {

        return headers.map((x, index) => {
            return (<Tab 
                id={index}
                label={x.props.label} 
                onClick={x=> this.handleHeaderClick(x) }/>)
        });
    };

    renderContent(contents){

        // return contents.map(x=> {
        //     return (<TabContent children={x.props.children} />)
        // });

        let _parseContent = contents.map((x, index)=> {
            return (<TabContent id={index} children={x.props.children} />)
        });

        return _parseContent.filter((item, idx) => (idx === this.props.index));
    };

    updateIndicator (index) {
        const start = this.refs.tabs.getBoundingClientRect().left;
        const nav = this.refs.navigation.children[index].getBoundingClientRect();

        this.setState({
            indicator: {
                top: `${this.refs.navigation.getBoundingClientRect().height}px`,
                left: `${nav.left - start}px`,
                width: `${nav.width}px`
            }
        });
    }

    render () {
        const {show , className, children, index, onClick} = this.props;
        
        const clsTabs = classNames({
            ['wrc-tabs'] : true,
        });
        
        const { headers, contents} = this.parseChildren(children);

        return (
            <div className={clsTabs} ref="tabs">
                <div className="wrc-tabs-header-wrap" ref="navigation">
                    {this.renderHeader(headers)}
                </div>
                <span className="wrc-tabs-indicator" style={this.state.indicator}/>
                <div className="wrc-tabs-content-wrap">
                    {this.renderContent(contents)}
                </div>
            </div>
        );

    }
}

Tabs.propTypes = {
    show: React.PropTypes.bool,
    hide: React.PropTypes.bool,
    index: React.PropTypes.number,
};

Tabs.defaultProps = {
    show: false,
    hide: false,
    index: 1,
};

export { Tabs, Tab }
