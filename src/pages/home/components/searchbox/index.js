import React from 'react';
const {Component, PropTypes} = React;

import './index.scss';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="search-box-panel">
        <div className="search-bg"></div>
        <div className="search-main">
          <input className="search-input" />
          <div className="search-btn" />
        </div>
      </section>
    )
  }
}