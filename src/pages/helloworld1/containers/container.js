import React from 'react';
console.log(1111);
const {Component, PropTypes} = React;

class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>HelloWorld2!</h1>
        <h2>this is Leyoubird Scaffolding</h2>
        <hr />
      </div>
    )
  }
}

export default Container;