import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CarouselItemDirective } from './carousel-item.directive';
import { CarouselItemElementDirective } from './carousel-item-element.directive';

@NgModule({
  declarations: [ CarouselComponent, CarouselItemDirective, CarouselItemElementDirective ],
  imports: [ BrowserModule, BrowserAnimationsModule, CommonModule, FormsModule ],
  exports: [ CarouselComponent, CarouselItemDirective, CarouselItemElementDirective ]
})
export class CarouselModule { }
