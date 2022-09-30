import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalErrorHandler } from './error/global-error-handler';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }]
})
export class CoreModule { }
