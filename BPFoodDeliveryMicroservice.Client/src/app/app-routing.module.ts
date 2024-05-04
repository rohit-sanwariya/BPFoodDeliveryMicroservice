import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'coupon'
  },
  {
    path:'coupon',loadComponent:()=>import('./Screens/coupon-page/coupon-page.component').then(m=>m.CouponPageComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
