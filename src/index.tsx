import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Counter3 from './components/Counter3';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
  <>
      <Counter3 title="计数器" />
  </>
  </Provider>,
  document.getElementById('root')
);
