import React from 'react';
const {Component, PropTypes} = React;
import { connect } from 'react-redux';
import actions from '../actions/actions.js';
import {Link} from 'react-router';

import Loading from '../../../widgets/loading/index';

class Home extends Component {
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
        <Loading show={true} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state; 
}

export default connect(mapStateToProps, actions)(Home)