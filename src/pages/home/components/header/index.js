import React from 'react';
const {Component, PropTypes} = React;

import './index.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="header">
        <div className="header-bg" />
        <div className="header-front">
          <div className="header-content">
            <div className="header-logo">乐游鸟Logo</div>
            <div className="header-ctrl-panel">
              <div className="header-btn">登录</div>
              <div className="header-btn">注册</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}