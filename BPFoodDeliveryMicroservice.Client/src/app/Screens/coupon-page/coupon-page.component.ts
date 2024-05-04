import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { CouponStore } from '../../Store/Coupon/coupon.store';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@Component({
  selector: 'app-coupon-page',
  standalone: true,
  imports: [NgIf,NgFor,JsonPipe,MatProgressSpinnerModule],
  templateUrl: './coupon-page.component.html',
  styleUrl: './coupon-page.component.scss',
  providers:[CouponStore],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class CouponPageComponent implements OnInit {
  ngOnInit(): void {
   this.store.getAll("");   
  }
  store  = inject(CouponStore);


}
