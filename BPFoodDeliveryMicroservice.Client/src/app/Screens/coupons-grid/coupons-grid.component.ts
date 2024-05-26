import { Component, OnInit, inject } from '@angular/core';
import { CouponStore } from '../../Store/Coupon/coupon.store';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { BPTextboxField } from '../../Models/bptextbox-field';
import { TCouponResponseItem } from '../coupon-page/coupon.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../Components/confirm-dialog/confirm-dialog.component';
import { DialogFormComponent } from '../../Components/dialog-form/dialog-form.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-coupons-grid',
  standalone: true,
  imports: [
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,

  ],
  providers:[CouponStore],
  templateUrl: './coupons-grid.component.html',
  styleUrl: './coupons-grid.component.scss'
})
export default class CouponsGridComponent implements OnInit {
  ngOnInit(): void {
    this.store.getAll("");
  }
  constructor(public dialog: MatDialog){}
  store = inject(CouponStore);
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
