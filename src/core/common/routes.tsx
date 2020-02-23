import * as React from 'react';
import { RouteConfig, RouteConfigComponentProps } from 'react-router-config';
import { unnest } from 'ramda';

import { PreloadAction } from '@core/config/preload';
import routes from '@core/config/routes';

export interface ExtraRouteProps {
  preloadActions?: PreloadAction | PreloadAction[];
}

export interface RouteComponentProps<T = {}> extends RouteConfigComponentProps<T> {
  routes?: AppRoute[];
}

export interface AppRoute extends RouteConfig, ExtraRouteProps {
  routes?: AppRoute[];
  component: React.ComponentType<RouteComponentProps> | React.ComponentType;
}

export const appRoutes = unnest([routes]) as AppRoute[];
