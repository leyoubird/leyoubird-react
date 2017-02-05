import React from 'react';
const {Component, PropTypes} = React;
import { connect } from 'react-redux';
import actions from '../actions/actions.js';
import {Link} from 'react-router';

import Loading from '../../../widgets/loading/index';
import Header from '../components/header/index';
import PhotoScroller from '../components/photoScroller/index';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      name
    } = this.props;

    return (
      <div>
        <Header />
        <PhotoScroller />
        <div>{name}</div>
        <Loading />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state; 
}

export default connect(mapStateToProps, actions)(Home)