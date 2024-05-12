import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Guard/auth.guard';

const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'coupon'
  },
  {
    path:'coupon',loadComponent:()=>import('./Screens/coupon-page/coupon-page.component').then(m=>m.CouponPageComponent),
    canActivate:[authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
