import React from 'react';
const {Component, PropTypes} = React;
import { connect } from 'react-redux';
import actions from '../actions/actions.js';

class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      notFound
    } = this.props;

    return (
      <div className="not-found-panel">{notFound}</div>
    )
  }
}

function mapStateToProps(state) {
  return state; 
}

export default connect(mapStateToProps, actions)(NotFound)