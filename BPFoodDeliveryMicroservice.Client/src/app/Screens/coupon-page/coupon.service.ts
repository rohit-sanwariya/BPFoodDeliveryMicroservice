import { Injectable } from '@angular/core';
import { HttpService } from '../../Services/http.service';
import { TGenericResponse, TCouponResponseItem } from './coupon.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.getCoupons();
  }

  getCoupons():Observable<TGenericResponse<TCouponResponseItem[]>> {
    return this.http.GET<TGenericResponse<TCouponResponseItem[]>>('/api/Coupon/all') 
  }
}
