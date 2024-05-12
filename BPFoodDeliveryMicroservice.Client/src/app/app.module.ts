import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { bPInterceptor } from './Services/bpinterceptor.interceptor';
import { ServerErrorHanlderService } from './Services/server-error-hanlder.service';
import {MatSnackBarModule} from '@angular/material/snack-bar'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule
    
  ],
  providers: [
    provideAnimationsAsync(),
  
    provideHttpClient(withInterceptors([bPInterceptor])),
    {
      provide:ErrorHandler,
      useClass:ServerErrorHanlderService,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
