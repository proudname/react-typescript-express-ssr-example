import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

import { AppState, reducer } from '../features/reducers';
import { config } from '@core/config/config';

export function configureStore(initialState?: AppState): Store<AppState> {
  let middleware = applyMiddleware(thunk);

  if (config.isDev) {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(reducer, initialState!, middleware);

  if (module.hot) {
    module.hot.accept('../features/reducers', () => {
      const { reducer: neextReducer } = require('../features/reducers');
      store.replaceReducer(neextReducer);
    });
  }

  return store as Store<AppState>;
}
