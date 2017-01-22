import { handleActions } from 'redux-actions';
import * as types from '../constants/ActionTypes';
import defaultState from '../constants/DefaultState';

export default handleActions({
  [types.EXAMPLE_CLICK_ACTION] (state, action) {
    let {
      count
    } = state;
    return Object.assign({}, state, {
      count: ++count
    });
  }
}, defaultState);