import React from 'react';
const {Component, PropTypes} = React;
import { connect } from 'react-redux';
import actions from '../actions/actions.js';


class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>Leyoubird home</div>
    )
  }
}

function mapStateToProps(state) {
  return state; 
}

export default connect(mapStateToProps, actions)(Container)