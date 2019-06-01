import * as types from './../action-types';
import { Action2 } from '../actions/counter2';

let initState = { number: 0 };
// 根据初始化数据来判断数据类型
export type Counter = typeof initState;
export default (state: Counter = initState, action: Action2): Counter => {
  switch (action.type) {
    case types.INCREMENT2:
      return { number: state.number + 1 };
    case types.DECREMENT2:
      return { number: state.number - 1 };
    default:
      return state;
  }
};
