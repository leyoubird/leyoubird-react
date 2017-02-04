import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './containers/app';
import Home from './containers/home';
import NotFound from './containers/notFound';
import reducer from './reducers/reducer.js';

import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

const store = createStore(reducer);

ReactDom.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="notFound" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
