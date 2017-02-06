import React from 'react';
const {Component, PropTypes} = React;

import './index.scss';

export default class PhotoList extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    list: PropTypes.array // 是否显示
  };
  static defaultProps = {
    /**
     * [{url:'', name:'北京'}]
     * @type {Array}
     */
    list: []
  };

  render() {
    const {
      list
    } = this.props;

    let imgList = [];
    list.map((item, index) => {
      imgList.push(
        <div className="photo-item" key={index}>
          <div className="photo-name">{item.name}</div>
          <div className="photo-mask"></div>
          <div className="photo-wrap" style={{backgroundImage:'url(' + item.url + ')'}}></div>
        </div>
      )
    });

    return (
      <div className="photo-list">
        {imgList}
      </div>
    )
  }
}