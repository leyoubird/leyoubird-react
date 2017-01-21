import React from 'react';
const {Component, PropTypes} = React;

import Hello from '../components/hello-panel/index';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Hello />
      </div>
    )
  }
}

export default Container;