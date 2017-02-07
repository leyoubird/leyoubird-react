import React from 'react';
const {Component, PropTypes} = React;

import './index.scss';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="footer">
        <div className="footer-content">
          <div className="footer-link-panel"></div>
          <div className="footer-copy">
            &copy; Copyright Leyoubird 2017. All rights reserved.
          </div>
        </div>
      </section>
    )
  }
}