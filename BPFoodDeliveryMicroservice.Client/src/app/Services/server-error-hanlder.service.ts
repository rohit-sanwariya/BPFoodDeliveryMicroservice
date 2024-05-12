import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerErrorHanlderService extends ErrorHandler {
  override handleError(error: any): void{
    console.error(error,'global');
    
  }
}
