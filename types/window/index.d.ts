import { AppState } from '@core/features/reducers';

declare global {
  interface Window {
    __INITIAL_STATE__: AppState;
  }
}
