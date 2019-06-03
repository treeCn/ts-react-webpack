import { combineReducers } from 'redux';
import counter1 from './counter1';
import counter2 from './counter2';
// 使用connected-react-router
import { connectRouter } from 'connected-react-router';
import history from './../history';

let combineReducersObject = {
  counter1,
  counter2,
  router: connectRouter(history),
};
// 定义数据类型
export type RootState = {
  [key in keyof typeof combineReducersObject]: ReturnType<typeof combineReducersObject[key]>
};
export default combineReducers(combineReducersObject);
