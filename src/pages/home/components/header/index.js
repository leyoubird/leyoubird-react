import React from 'react';
const {Component, PropTypes} = React;

import './index.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        Header
      </div>
    )
  }
}