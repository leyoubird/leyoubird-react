import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Container from './containers/container';
// import reducer from './src/reducers/reducers.js';

// const store = createStore(reducer);

const perDom = document.getElementById('per');

ReactDom.render(
  <Container />,
  document.getElementById('app')
)
