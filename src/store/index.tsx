import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import history from './history';
// 使用redux本地存储
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// 使用路由中间件
let router = routerMiddleware(history);

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

let store = applyMiddleware(logger, router)(createStore)(persistedReducer);
let persistor = persistStore(store)
export {
  store,
  persistor
};
