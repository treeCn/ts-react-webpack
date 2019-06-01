import * as types from './../action-types';

export interface incrementAction {
  type: typeof types.INCREMENT2;
}

export interface decrementAction {
  type: typeof types.DECREMENT2;
}
// 定义当前action的数据类型
export type Action2 = incrementAction | decrementAction;

export default {
  increment(): incrementAction {
    return { type: types.INCREMENT2 };
  },
  decrement(): decrementAction {
    return { type: types.DECREMENT2 };
  }
};
