import * as types from './../action-types';
import { Action1 } from '../actions/counter1';

let initState = { number: 0 };
// 根据初始值来判断数据类型
export type Counter = typeof initState;
export default (state: Counter = initState, action: Action1): Counter => {
  switch (action.type) {
    case types.INCREMENT1:
      return { number: state.number + 1 };
    case types.DECREMENT1:
      return { number: state.number - 1 };
    default:
      return state;
  }
};
