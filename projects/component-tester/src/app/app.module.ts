import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MdcTypographyModule } from '@angular-mdc/web';
import { PanelModule } from '@crowder/panel';
import { AlertModule } from '@crowder/components';
import { TooltipModule } from '@crowder/components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertExampleComponent } from './alert-example/alert-example.component';
import { TooltipExampleComponent } from './tooltip-example/tooltip-example.component';
import { CarouselExampleComponent } from './carousel-example/carousel-example.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertExampleComponent,
    TooltipExampleComponent,
    CarouselExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PanelModule,
    AlertModule,
    TooltipModule,
    MdcTypographyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
