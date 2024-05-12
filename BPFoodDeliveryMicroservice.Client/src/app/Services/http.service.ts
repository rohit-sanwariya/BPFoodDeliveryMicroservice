import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _snackbar = inject(SnackbarService);

  constructor(private http: HttpClient) {}

  GET<T>(url:string):Observable<T>{
    return this.attachErrorHandler(this.http.get<T>(url));
  }
  DELETE<T>(url:string):Observable<T>{
    return this.attachErrorHandler(this.http.delete<T>(url));
  }
  POST<T,K>(url:string,payload:K):Observable<T>{
    return this.attachErrorHandler(this.http.post<T>(url,payload));
  }
  PUT<T,K>(url:string,payload:K):Observable<T>{
    return this.attachErrorHandler(this.http.put<T>(url,payload));
  }

  attachErrorHandler<T>(ob:Observable<T>):Observable<T>{
    return ob.pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error)
        if(error.error.message){
           this._snackbar.alert(error.error.message,'red')
        }
        throw error;  
      })
    );
  }
}
