import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './shared/location/location.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'location' },
  { path: 'location', component: LocationComponent },
  { path: 'STV', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
  { path: 'PHX', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
