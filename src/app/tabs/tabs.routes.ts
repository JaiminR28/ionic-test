import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'onsite-inductee',
        loadComponent: () =>
          import('../onsite-inductee/onsite-inductee.page').then((m) => m.OnsiteInducteePage),
      },
      {
        path: '',
        redirectTo: '/tabs/onsite-inductee',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/onsite-inductee',
    pathMatch: 'full',
  },
];
