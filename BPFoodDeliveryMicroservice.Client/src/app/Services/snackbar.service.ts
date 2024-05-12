import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from '../Components/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  alert(data:string,className:string):void{
    this._snackBar.openFromComponent(AlertComponent,{
      data,
       panelClass:['panel-success']
    });
  }
}
