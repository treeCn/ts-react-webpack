import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Counter4 from './components/Counter4';
import Counter5 from './components/Counter5';
import store from './store';
import history from './store/history';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Link to="/counter1">counter1</Link> <br />
        <Link to="/counter2">counter2</Link>
        <Route path="/counter1" component={Counter4} />
        <Route path="/counter2" component={Counter5} />
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
