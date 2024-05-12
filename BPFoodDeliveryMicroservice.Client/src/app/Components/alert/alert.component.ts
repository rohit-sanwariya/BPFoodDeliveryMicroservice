import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA, MatSnackBarConfig, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  snackBarRef = inject(MatSnackBarRef);
  data:{message:string,class:string} = inject(MAT_SNACK_BAR_DATA);
 
}
