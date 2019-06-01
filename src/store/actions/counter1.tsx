import * as types from '../action-types';

export interface incrementAction {
  type: typeof types.INCREMENT1;
}

export interface decrementAction {
  type: typeof types.DECREMENT1;
}
// 定义当前action的数据类型
export type Action1 = incrementAction | decrementAction;

export default {
  increment(): incrementAction {
    return { type: types.INCREMENT1 };
  },
  decrement(): decrementAction {
    return { type: types.DECREMENT1 };
  }
};
