import React from 'react';
const {Component, PropTypes} = React;
import className from 'classnames';

import './index.less';

export default class Loading extends Component {
  constructor(props) {
    super(props);
  };

  static propTypes = {
    show: PropTypes.bool, // 是否显示
    point: PropTypes.number, // 显示几个点
    isShowMask: PropTypes.bool // 是否显示遮罩层
  };

  static defaultProps = {
    show: false,
    point: 6,
    isShowMask: true
  };

  render() {
    const {
      show,
      point,
      isShowMask
    } = this.props;

    let pts = [];
    const count = (point > 10 && point < 0 ? 6 : point); // 最多10个点
    for (let i = 0; i < count; i++) {
      pts.push(<div className="point" key={i}><div className="inner"></div></div>);
    }

    const cls = className('loading', {
      hidden: !show
    });

    return (
      <div className={cls}>
        <div className="loading-mask"></div>
        <div className="loading-panel">
          {pts}
        </div>
      </div>
    )
  }
}