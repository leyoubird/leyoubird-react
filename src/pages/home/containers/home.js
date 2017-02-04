import React from 'react';
const {Component, PropTypes} = React;
import { connect } from 'react-redux';
import actions from '../actions/actions.js';

import {Link} from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      name
    } = this.props;

    return (
      <div>Leyoubird home
        <div>{name}</div>
        <Link to="notFound">not found</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state; 
}

export default connect(mapStateToProps, actions)(Home)