import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'crowder-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit, OnChanges {
  @Input() tooltipBackgroundColour: string;
  @Input() tooltipTextColour: string;

  constructor() { }

  ngOnInit() {
    this.setDefaults();
  }

  ngOnChanges() {
    this.setDefaults();
  }

  private setDefaults() {
    if (this.tooltipBackgroundColour == null || this.tooltipBackgroundColour === '') {
      this.tooltipBackgroundColour = 'black';
    }

    if (this.tooltipTextColour == null || this.tooltipTextColour === '') {
      this.tooltipTextColour = 'white';
    }
  }
}
