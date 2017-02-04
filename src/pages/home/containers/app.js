import React from 'react';
export default class App extends React.Component {
  render() {
    return (
      <div className="leyoubird-panel">
        {this.props.children}
      </div>
    )
  }
}