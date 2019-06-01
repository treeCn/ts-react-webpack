import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Counter4 from './components/Counter4';
import Counter5 from './components/Counter5';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <>
      <Counter4 title="计数器1" />
      <hr />
      <Counter5 title="计数器2" />
    </>
  </Provider>,
  document.getElementById('root')
);
