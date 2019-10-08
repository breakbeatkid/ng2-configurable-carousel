import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-example',
  templateUrl: './carousel-example.component.html',
  styleUrls: ['./carousel-example.component.scss']
})
export class CarouselExampleComponent {
  componentWidth = '100';
  numberOfItems = 15;
  items: any[];

  dynamicDisplaySize = true;
  itemsDisplayed: number;
  infiniteScroll = true;

  constructor() {
    this.buildList();
  }

  private buildList() {
    this.items = [];
    for (let i = 1; i <= this.numberOfItems; i++) {
      this.items.push({ title: `Item ${i}` });
    }
    this.itemsDisplayed = 5;
  }
}
