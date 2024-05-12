import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, effect, inject, viewChild } from '@angular/core';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { CouponStore } from '../../Store/Coupon/coupon.store';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { TCouponResponseItem } from './coupon.model';
import { computed } from '@angular/core';
import { BpFoodHeaderComponent } from '../../Components/bp-food-header/bp-food-header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../Components/confirm-dialog/confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { DialogFormComponent } from '../../Components/dialog-form/dialog-form.component';
import { BPTextboxField } from '../../Models/bptextbox-field';
@Component({
  selector: 'app-coupon-page',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    JsonPipe,
    MatProgressSpinnerModule,
    MatTableModule, MatPaginatorModule,
    BpFoodHeaderComponent,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './coupon-page.component.html',
  styleUrl: './coupon-page.component.scss',
  providers: [CouponStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CouponPageComponent implements OnInit {
  paginator = viewChild.required(MatPaginator);
  sort = viewChild.required(MatSort);
  store = inject(CouponStore);
  dataSource = computed(() => {
    return new MatTableDataSource<TCouponResponseItem>(this.store.data());
  });

  displayedColumns: Array<keyof TCouponResponseItem | 'actions'> = ['id', 'code', 'discount', 'minAmount', 'actions']

  constructor(public dialog: MatDialog) {
    effect(() => {
      this.dataSource().paginator = this.paginator();
      this.dataSource().sort = this.sort()
    })
  }

  ngOnInit(): void {
    this.store.getAll("");
  }
  deleteRow(item: TCouponResponseItem): void {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: { name: item.code },
      height: '200px',
      width: '270px',

    });
    ref.afterClosed().subscribe((data) => {
      if (data) {
        this.store.delete(item.id);
      }
    });
  }
  createCoupon():void {
    const ref = this.dialog.open(DialogFormComponent, {
      data:    [
        new BPTextboxField(
          { value: '', key: 'Code', label: 'Coupon Code', order: 1, required: true, type: 'text' }
        ),
        new BPTextboxField(
          { value: '', key: 'Discount', label: 'Discount', order: 1, required: true, type: 'text' }
        ),
    
        new BPTextboxField(
          { value: '', key: 'MinAmount', label: 'Minimum Amount', order: 1, required: true, type: 'text' }
        ),
      ],
    
      width: '50vh',

    });
    // ref.updatePosition({right:'0',top:'0'})
    ref.afterClosed().subscribe((data:{ Code: string; MinAmount: number; Discount: number; }) => {
      if (data) {
        this.store.createCoupon(data);
      }
    });
  }
  editRow(element:TCouponResponseItem):void {
    const ref = this.dialog.open(DialogFormComponent, {
      data:    [
        new BPTextboxField(
          { value: element.code, key: 'Code', label: 'Coupon Code', order: 1, required: true, type: 'text' }
        ),
        new BPTextboxField<number>(
          { value: element.discount, key: 'Discount', label: 'Discount', order: 1, required: true, type: 'text' }
        ),
    
        new BPTextboxField<number>(
          { value: element.minAmount, key: 'MinAmount', label: 'Minimum Amount', order: 1, required: true, type: 'text' }
        ),
      ],
    
      width: '50vh',

    });
    // ref.updatePosition({right:'0',top:'0'})
    ref.afterClosed().subscribe((data:{ Code: string; MinAmount: number; Discount: number; }) => {
      if (data) {
        this.store.editCoupon({...data,Id:element.id});
      }
    });
  }
}
