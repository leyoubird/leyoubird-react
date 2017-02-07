import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './containers/app';
import Home from './containers/home';
import NotFound from './containers/notFound';
import reducer from './reducers/reducer.js';

import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // material-ui
injectTapEventPlugin();

import './index.scss';

const store = createStore(reducer);

ReactDom.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={hashHistory}>
        <Route path="/" component={Home}>
          <Route path="notFound" component={NotFound} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
