import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';
import { SnackbarService } from './snackbar.service';

export const bPInterceptor: HttpInterceptorFn = (req, next) => {
//  const _snackbar = inject(SnackbarService);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error(error)
      if(error.error.message){
        // _snackbar.alert(error.error.message,'red')
      }
      throw error;  
    })
  );
};
