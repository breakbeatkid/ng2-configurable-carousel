import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MdcTypographyModule, MdcSliderModule, MdcElevationModule   } from '@angular-mdc/web';
import { PanelModule } from '@crowder/panel';

import { AlertModule } from '@crowder/common-ui';
import { TooltipModule } from '@crowder/common-ui';
import { CarouselModule } from '@crowder/common-ui';

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
    CarouselModule,
    MdcElevationModule,
    MdcTypographyModule,
    MdcSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
