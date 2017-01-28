import * as types from '../constants/ActionTypes';
import {API} from '../../../mods/util';

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
    },
    getData: () => {
      API('/api/summary?category=recommend').then((data) => {
        console.log(1);
        console.log(data);
        return API('/api/summary?category=recommend');
      }).then((data) => {
        console.log(2);
        console.log(data);
      });
    }
  }
}