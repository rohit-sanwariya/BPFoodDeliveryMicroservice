import { Injectable } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { TGenericResponse, TCouponResponseItem } from './coupon.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getCoupons();
  }

  getCoupons(): Observable<TGenericResponse<TCouponResponseItem[]>> {
    return this.http.GET<TGenericResponse<TCouponResponseItem[]>>('/api/Coupon/all')
  }
  deleteCoupon(id: number): Observable<TGenericResponse<TCouponResponseItem[]>> {
    return this.http.DELETE<TGenericResponse<TCouponResponseItem[]>>(`/api/Coupon/${id}`)
  }
  createCoupon(payload: { Code: string; MinAmount: number; Discount: number; }) {
    return this.http.POST<TGenericResponse<TCouponResponseItem>, { Code: string; MinAmount: number; Discount: number; }>(`/api/Coupon`, payload)
  }
  editCoupon(payload: {Id:number, Code: string; MinAmount: number; Discount: number; }) {
    return this.http.PUT<TGenericResponse<TCouponResponseItem>, { Id:number,Code: string; MinAmount: number; Discount: number; }>(`/api/Coupon`, payload)
  }
}
