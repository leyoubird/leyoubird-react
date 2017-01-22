import * as types from '../constants/ActionTypes';

const action = (t, data) => {
  return {
    type: t,
    data
  }
};

export default (dispatch, o) => {
  return {
    increase: () => {
      // do something
      dispatch(action(types.EXAMPLE_CLICK_ACTION));
    }
  }
}