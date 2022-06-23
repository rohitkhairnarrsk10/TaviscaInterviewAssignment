
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const LayoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../modules/booking/booking.module').then((m) => m.BookingModule),
      },
    ]
  }
];


