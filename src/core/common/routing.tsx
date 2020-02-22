import * as React from 'react';
import { Route, Switch } from 'react-router';

import { AppRoute } from './routes';

export function renderRouting(routes?: AppRoute[]) {
  if (!routes) return null;

  return <Switch>{routes.map(props => props.path && <Route {...props} key={props.path.toString()} />)}</Switch>;
}
