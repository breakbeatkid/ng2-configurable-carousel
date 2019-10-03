import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { MdcIconModule } from '@angular-mdc/web';
import { TooltipModule } from '../tooltip/public-api';

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    MdcIconModule,
    TooltipModule
  ],
  exports: [AlertComponent]
})
export class AlertModule { }
