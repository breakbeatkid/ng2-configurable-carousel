import {
  animate,
  AnimationBuilder,
  AnimationPlayer,
  style,
} from '@angular/animations';

import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { CarouselItemDirective } from './carousel-item.directive';
import { CarouselItemElementDirective } from './carousel-item-element.directive';

@Component({
  selector: 'crowder-carousel',
  exportAs: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit, OnChanges {
  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElementDirective, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
  @ViewChild('carousel', { static: true }) private carousel: ElementRef;

  @Input() itemsDisplayed: number;
  @Input() infiniteScroll = true;
  @Input() animationDuration = '200';
  @Input() animationType = 'ease-in';

  public carouselWrapperStyle = {};

  private parent: any;
  private player: AnimationPlayer;
  private itemWidth: number;
  private currentSlide = 0;
  private animating = false;
  private timing: string;
  private noAnimationDuration = 0;
  private carouselPadding = 20;
  private initialised = false;

  constructor(private builder: AnimationBuilder, private elementRef: ElementRef) {
    this.parent = this.elementRef.nativeElement.parentElement;
  }

  ngAfterViewInit(): void {
    this.timing = `${this.animationDuration}ms ${this.animationType}`;
    this.reSizeCarousel();
    this.initialised = true;
  }

  @HostListener('window:resize', ['$event']) onResize(event: any): void {
    this.reSizeCarousel();
  }

  ngOnChanges() {
    console.log('Changes');
    if (this.initialised) {
      this.reSizeCarousel();
    }
  }

  next(): void {
    if (this.infiniteScroll != null && this.infiniteScroll === true) {
      this.infiniteNext();
    } else {
      this.nonInfiniteNext();
    }
  }

  private infiniteNext(): void {
    if (this.animating) {
      return;
    }

    let onComplete: () => void;
    if (this.shuffleLeftRequired()) {
      this.animating = true;
      this.copyStartItemToEnd();
      onComplete = () => {
        this.dropStartItem();
        this.animating = false;
      };
    }
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    this.transitionCarousel(this.timing, onComplete);
  }

  private nonInfiniteNext(): void {
    if (this.currentSlide + this.carouselItemCount() < this.items.length) {
      this.currentSlide++;
      this.transitionCarousel(this.timing);
    }
  }

  prev(): void {
    if (this.infiniteScroll) {
      this.infinitePrev();
    } else {
      this.nonInfinitePrev();
    }
  }

  private infinitePrev(): void {
    if (this.animating) {
      return;
    }

    let onComplete: () => void;
    if (this.shuffleRightRequired()) {
      this.animating = true;
      this.copyEndItemToStart();
      onComplete = () => {
        this.dropEndItem();
        this.animating = false;
      };
    }
    this.currentSlide = (this.currentSlide - 1 + this.items.length) % this.items.length;
    this.transitionCarousel(this.timing, onComplete);
  }

  private nonInfinitePrev(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.transitionCarousel(this.timing);
    }
  }

  private copyStartItemToEnd(): void {
    let arr = this.items.toArray();
    arr = arr.concat(arr[0]);
    this.items.reset(arr);
  }

  private copyEndItemToStart(): void {
    let arr = this.items.toArray();
    arr = [arr[arr.length - 1]].concat(arr);
    this.items.reset(arr);
    this.currentSlide++;
    this.transitionCarousel();
  }

  private dropStartItem(): void {
    const arr = this.items.toArray();
    arr.shift();
    this.items.reset(arr);
    this.currentSlide--;
    this.transitionCarousel();
  }

  private dropEndItem(): void {
    const arr = this.items.toArray();
    arr.pop();
    this.items.reset(arr);
  }

  private reSizeCarousel(): void {
    this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
    this.carouselWrapperStyle = {
      width: `${this.itemWidth * this.carouselItemCount()}px`,
    };
    this.transitionCarousel();
  }

  private carouselItemCount(): number {
    let displayed = this.itemsDisplayed;
    if (displayed == null) {
      const carouselWidth = this.parent.getBoundingClientRect().width;
      displayed = Math.floor((carouselWidth - this.carouselPadding) / this.itemWidth);
    }
    return ((this.items.length < displayed) ? this.items.length : displayed);
  }

  private transitionCarousel(time?: string, onDone?: () => void): void {
    const t = (time != null) ? time : this.noAnimationDuration;
    const offset = this.currentSlide * this.itemWidth;

    this.player = this.builder.build([
      animate(t, style({ transform: `translateX(${-offset}px)` }))
    ]).create(this.carousel.nativeElement);
    this.player.onDone((onDone !== undefined) ? onDone : () => null);

    this.player.play();
  }

  private shuffleLeftRequired(): boolean {
    return this.currentSlide + this.carouselItemCount() === this.items.length || this.noOverlap();
  }

  private shuffleRightRequired(): boolean {
    return this.currentSlide === 0 || this.noOverlap();
  }

  private noOverlap(): boolean {
    return this.items.length === this.itemsDisplayed;
  }
}
