import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import history from './history';
// 使用路由中间件
let router = routerMiddleware(history);

let store = applyMiddleware(logger, router)(createStore)(reducers);
export default store;
