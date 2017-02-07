import React from 'react';
const {Component, PropTypes} = React;
import { connect } from 'react-redux';
import actions from '../actions/actions.js';
import {Link} from 'react-router';

import Loading from '../../../widgets/loading/index';
import Header from '../components/header/index';
import PhotoScroller from '../components/photoScroller/index';
import Block from '../components/block/index';
import Title from '../components/title/index';
import PhotoList from '../components/photoList/index';

import TextField from 'material-ui/TextField';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      name,
      bigImageList,
      cateList1
    } = this.props;

    return (
      <div className="leyoubird-home">
        <Header />
        <PhotoScroller list={bigImageList} />
        <Block>
          <Title title="热门推荐" />
          <PhotoList list={cateList1} />
        </Block>
        <Loading />
        <TextField hintText="Hint Text" />

        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state; 
}

export default connect(mapStateToProps, actions)(Home)