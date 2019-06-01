import * as types from './../action-types';

export interface incrementAction {
  type: typeof types.INCREMENT;
}

export interface decrementAction {
  type: typeof types.DECREMENT;
}
// 定义当前action的数据类型
export type Action = incrementAction | decrementAction;

export default {
  increment(): incrementAction {
    return { type: types.INCREMENT };
  },
  decrement(): decrementAction {
    return { type: types.DECREMENT };
  }
};
