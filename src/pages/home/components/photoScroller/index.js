import React from 'react';
const {Component, PropTypes} = React;

import './index.scss';

export default class PhotoScroller extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      list
    } = this.props;

    let imgList = [];
    return (
      <div className="photo-scroller-panel">
        <div className="photo-item">
          <img width="100%" height="100%" className="photo-img" src="//sassets1.zhubaijia.com/assets/web/home/banner-78a0385c66adf8c38f86be4e8d6495d46f9ddac6d210badc980111eacb4465e5.jpg" />
        </div>
      </div>
    )
  }
}