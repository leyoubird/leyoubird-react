import React from 'react';
const {Component, PropTypes} = React;

import './index.scss'

class Hello extends Component {
  render() {
    return (
      <div className="hello-panel">
        <h1>This is Hello Panel1</h1>
        <div className="img-panel"></div>
        <div className="img2"></div>
      </div>
    )
  }
}

export default Hello;