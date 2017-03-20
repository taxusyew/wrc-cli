import React from 'react';
import ReactDOM from 'react-dom';

export default class FixedContainer extends React.Component {

  static contextTypes = {
    'parent': React.PropTypes.any
  }

  static childContextTypes = {
    'parent': React.PropTypes.any
  }

  constructor(props) {
    super(props);
  }

  getChildContext() {
    return { 'parent': this};
  }

  render() {
      return <div className="wrc-fixedbar-section" {...this.props}>
      {this.props.children}
    </div>
  }
}
