import { hot } from 'react-hot-loader/root';
import * as React from 'react';

import { appRoutes } from './common/routes';
import { renderRouting } from './common/routing';

import './assets/styles/global.scss';

export const App = hot(() => {
  return <div title="React Typescript App">{renderRouting(appRoutes)}</div>;
});
