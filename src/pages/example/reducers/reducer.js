import { handleActions } from 'redux-actions';
import * as types from '../constants/ActionTypes';
import defaultState from '../constants/DefaultState';

let p = 0;

export default handleActions({
  [types.EXAMPLE_CLICK_ACTION] (state, action) {
    // return Object.assign({}, state, {
    //   count: ++state.count
    // });
    return {
      ...state,
      count: state.count + 1
    }
  }
}, defaultState);