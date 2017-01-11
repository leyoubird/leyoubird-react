import { React } from 'base';
import { connect } from 'react-redux';
import actions from '../actions';

const {Component, PropTypes} = React;

class Container extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>HelloWorld!</h1>
        <h2>this is Leyoubird Scaffolding</h2>
        <hr />
      </div>
    )
  }
}

export default Container;