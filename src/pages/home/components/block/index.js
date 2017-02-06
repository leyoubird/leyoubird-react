import React from 'react';
const {Component, PropTypes} = React;

import './index.scss';

export default class Block extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="section">
        {this.props.children}
      </section>
    )
  }
}