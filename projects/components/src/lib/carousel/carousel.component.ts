import {
  animate,
  AnimationBuilder,
  AnimationFactory,
  AnimationPlayer,
  style,
} from '@angular/animations';

import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  HostListener,
  QueryList,
  ViewChild,
  ViewChildren,
  Input,
} from '@angular/core';

import { CarouselItemDirective } from './carousel-item.directive';
import { CarouselItemElementDirective } from './carousel-item-element.directive';

@Component({
  selector: 'app-carousel',
  exportAs: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElementDirective, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
  @ViewChild('carousel', { static: true }) private carousel: ElementRef;

  @Input() itemsDisplayed = 11;
  @Input() timing = '200ms ease-in';

  carouselWrapperStyle = {};

  private player: AnimationPlayer;
  private itemWidth: number;
  private currentSlide = 0;
  private animating = false;

  constructor(private builder: AnimationBuilder) { }

  ngAfterViewInit() {
    this.reSizeCarousel();
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.reSizeCarousel();
  }

  next() {
    if (this.animating) {
      return;
    }

    let onComplete: () => void;
    if (this.currentSlide + this.arraySize() === this.items.length || this.noOverlap()) {
      this.animating = true;
      this.copyCarouselItemEndToEnd(true);
      onComplete = () => {
        this.dropEndCarouselItem(true);
        this.animating = false;
      };
    }
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    this.transitionCarousel(this.timing, onComplete);
  }

  prev() {
    if (this.animating) {
      return;
    }

    let onComplete: () => void;
    if (this.currentSlide === 0 || this.noOverlap()) {
      this.animating = true;
      this.copyCarouselItemEndToEnd(false);
      onComplete = () => {
        this.dropEndCarouselItem(false);
        this.animating = false;
      };
    }
    this.currentSlide = (this.currentSlide - 1 + this.items.length) % this.items.length;
    this.transitionCarousel(this.timing, onComplete);
  }

  private dropEndCarouselItem(start: boolean): void {
    // Copy carousel DOM items to array
    const arr = this.items.toArray();
    if (start) {
      // Drop item at index 0, reset DOM and shift carousel
      arr.shift();
      this.items.reset(arr);
      this.currentSlide--;
      this.transitionCarousel();
    } else {
      // Drop item at end of array and reset DOM
      arr.pop();
      this.items.reset(arr);
    }
  }

  private copyCarouselItemEndToEnd(start: boolean) {
    let arr = this.items.toArray();
    if (start) {
      // Copy item at index 0 to end of array and reset DOM
      arr = arr.concat(arr[0]);
      this.items.reset(arr);
    } else {
      // Copy item at end of array to index 0, reset DOM and shift carousel
      arr = [arr[arr.length - 1]].concat(arr);
      this.items.reset(arr);
      this.currentSlide++;
      this.transitionCarousel();
    }
  }

  private reSizeCarousel(): void {
    this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
    this.carouselWrapperStyle = {
      width: `${this.itemWidth * this.arraySize()}px`,
    };
    this.transitionCarousel(this.timing);
  }

  private transitionCarousel(time?: string, onDone?: () => void) {
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset, time);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.onDone((onDone !== undefined) ? onDone : () => null);
    this.player.play();
  }

  private arraySize(): number {
    return ((this.items.length < this.itemsDisplayed) ? this.items.length : this.itemsDisplayed);
  }

  private buildAnimation(offset: any, time: string) {
    return this.builder.build([
      animate(time !== undefined ? time : 0, style({ transform: `translateX(${-offset}px)` }))
    ]);
  }

  private noOverlap(): boolean {
    return this.items.length === this.itemsDisplayed;
  }
}
