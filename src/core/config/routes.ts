import Home from '@core/pages';
import Page2 from '@core/pages/page2';
import { AppRoute } from '@core/common/routes';

const routes: AppRoute[] = [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: Page2,
    path: '/page2'
  }
];

export default routes;
