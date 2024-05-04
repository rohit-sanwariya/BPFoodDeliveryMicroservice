import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  GET<T>(url:string):Observable<T>{
    return this.http.get<T>(url);
  }
  DELETE<T>(url:string):Observable<T>{
    return this.http.delete<T>(url);
  }
  POST<T,K>(url:string,payload:K):Observable<T>{
    return this.http.post<T>(url,payload);
  }
  PUT<T,K>(url:string,payload:K):Observable<T>{
    return this.http.put<T>(url,payload);
  }
}
