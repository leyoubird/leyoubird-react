import React from 'react';
const {Component, PropTypes} = React;

import './index.scss';

export default class Title extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    title: PropTypes.string // 是否显示
  };
  static defaultProps = {
    title: ''
  };

  render() {
    const {
      title
    } = this.props;

    return (
      <div className="section-title">
        <span className="section-title-content">{title}</span>
      </div>
    )
  }
}