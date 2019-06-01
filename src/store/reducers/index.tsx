import { combineReducers } from 'redux';
import counter1 from './counter1';
import counter2 from './counter2';

let combineReducersObject = {
  counter1,
  counter2
};
// 定义数据类型
export type RootState = {
  [key in keyof typeof combineReducersObject]: ReturnType<typeof combineReducersObject[key]>
};
export default combineReducers(combineReducersObject);
