import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'portal',
    loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule),
  },
  { path: '', redirectTo: '/portal', pathMatch: 'full' },
  { path: '**', redirectTo: '/portal' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
