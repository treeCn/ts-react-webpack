import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Counter4 from './components/Counter4';
import Counter5 from './components/Counter5';
import { store, persistor } from './store';
import history from './store/history';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <>
          <Link to="/counter1">counter1</Link> <br />
          <Link to="/counter2">counter2</Link>
          <Route path="/counter1" component={Counter4} />
          <Route path="/counter2" component={Counter5} />
        </>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
