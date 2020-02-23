import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

import { AppState } from '../features/reducers';

export type PreloadAction<T = {}> = (pathName?: string) => ThunkAction<unknown, AppState, T, AnyAction>;

// Actions that need to be dispatched at each route (SSR)
export const preloadActions: PreloadAction[] = [];
