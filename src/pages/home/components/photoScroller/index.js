import React from 'react';
const {Component, PropTypes} = React;
import className from 'classnames';

import './index.scss';

export default class PhotoScroller extends Component {
  constructor(props) {
    super(props);
    this.duration = 8000;
    this.state = {
      index: 0
    }
  }
  static propTypes = {
    list: PropTypes.array // 是否显示
  };
  static defaultProps = {
    list: []
  };

  getNext() {
    const count = this.props.list.length;
    if (!count) {
      return;
    }

    let index = this.state.index + 1;
    if (index >= count) {
      index = 0;
    }

    this.setState({
      index: index
    });
  }

  componentDidMount() {
    this.getNext();
    setInterval(this.getNext.bind(this), this.duration)
  }

  render() {
    const {
      list
    } = this.props;

    let imgList = [];
    const i = this.state.index;
    list.map((item, index) => {
      const cls = className('photo-item', {
        current: (index === i)
      });
      imgList.push(
        <div className={cls} key={index}>
          <img width="100%" height="100%" className="photo-img" src={item} />
        </div>
      )
    });

    return (
      <div className="photo-scroller-panel">
        {imgList}
      </div>
    )
  }
}