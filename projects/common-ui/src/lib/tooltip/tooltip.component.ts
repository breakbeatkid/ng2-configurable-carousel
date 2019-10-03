import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'crowder-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit, OnChanges {
  @Input() mainTextColour: string;
  @Input() mainTextSize: string;
  @Input() tooltipBackgroundColour: string;
  @Input() tooltipTextColour: string;
  @Input() tooltipTextSize: string;

  constructor() { }

  ngOnInit() {
    this.setDefaults();
  }

  ngOnChanges() {
    this.setDefaults();
  }

  private setDefaults() {
    if (this.mainTextColour == null || this.mainTextColour === '') {
      this.mainTextColour = 'inherit';
    }

    if (this.mainTextSize == null || this.mainTextSize === '') {
      this.mainTextSize = 'inherit';
    }

    if (this.tooltipBackgroundColour == null || this.tooltipBackgroundColour === '') {
      this.tooltipBackgroundColour = 'inherit';
    }

    if (this.tooltipTextColour == null || this.tooltipTextColour === '') {
      this.tooltipTextColour = 'inherit';
    }

    if (this.tooltipTextSize == null || this.tooltipTextSize === '') {
      this.tooltipTextSize = 'small';
    }
  }
}
