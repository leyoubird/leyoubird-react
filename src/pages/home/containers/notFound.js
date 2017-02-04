import React from 'react';
const {Component, PropTypes} = React;
import { connect } from 'react-redux';
import actions from '../actions/actions.js';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="not-found-panel">您查找的资源不存在</div>
    )
  }
}

function mapStateToProps(state) {
  return state; 
}

export default connect(mapStateToProps, actions)(NotFound)