import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, effect, inject, viewChild } from '@angular/core';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { CouponStore } from '../../Store/Coupon/coupon.store';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { TCouponResponseItem } from './coupon.model';
import { computed } from '@angular/core';
@Component({
  selector: 'app-coupon-page',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    JsonPipe,
    MatProgressSpinnerModule,
    MatTableModule, MatPaginatorModule,
  ],
  templateUrl: './coupon-page.component.html',
  styleUrl: './coupon-page.component.scss',
  providers: [CouponStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CouponPageComponent implements OnInit  {


  paginator = viewChild.required(MatPaginator);
  ngOnInit(): void {
    this.store.getAll("");
  }
  store = inject(CouponStore);
  dataSource = computed(() => {
    return new MatTableDataSource<TCouponResponseItem>(this.store.data());
  });

  displayedColumns: Array<keyof TCouponResponseItem> = ['id', 'code', 'discount', 'minAmount']
  constructor() {
    effect(()=>{
      this.dataSource().paginator = this.paginator() ?? null;
    })
  }
   

}
