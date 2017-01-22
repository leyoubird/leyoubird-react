import React from 'react';
const {Component, PropTypes} = React;

import './index.scss'

class Hello extends Component {
  render() {
    
    const {
      increase,
      exampleName,
      count
    } = this.props;

    return (
      <div className="hello-panel">
        <h1>{exampleName}</h1>
        <div className="img-panel"></div>
        <div>
          <p>
            目前已经有{count}人点赞啦~
            <button onClick={increase}>点赞</button>
          </p>
        </div>
      </div>
    )
  }
}

export default Hello;