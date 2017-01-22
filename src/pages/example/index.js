import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Container from './containers/container';
import reducer from './reducers/reducer.js';

const store = createStore(reducer);

ReactDom.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('app')
)
