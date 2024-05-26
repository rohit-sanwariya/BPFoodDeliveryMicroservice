import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Guard/auth.guard';

const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'coupon-grid'
  },
  {
    path:'coupon',loadComponent:()=>import('./Screens/coupon-page/coupon-page.component'),
    canActivate:[authGuard]
  },
  {
    path:'coupon-grid',loadComponent:()=>import('./Screens/coupons-grid/coupons-grid.component'),
    canActivate:[authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
