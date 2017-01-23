import React from 'react';
const {Component, PropTypes} = React;
import { connect } from 'react-redux';
import actions from '../actions/actions.js';

import Hello from '../components/hello-panel/index';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('refresh');
    return (
      <div>
        <Hello {...this.props} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return state; 
}

export default connect(mapStateToProps, actions)(Container)