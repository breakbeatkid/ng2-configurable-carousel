import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'crowder-alert',
  templateUrl: './alert.component.html',
  styleUrls: [
    './alert.component.scss',
    '../../assets/scss/material-icons.scss'
  ]
})
export class AlertComponent implements OnInit, OnChanges {
  @Input() iconEnabled: boolean;
  @Input() iconType: string;
  @Input() iconColour: string;
  @Input() iconAfterMessage: boolean;
  @Input() message: string;
  @Input() messageColour: string;
  @Input() messageSize: string;
  @Input() tooltipEnabled: boolean;
  @Input() tooltipMessage: string;
  @Input() tooltipBackgroundColour: string;
  @Input() tooltipTextColour: string;
  @Input() tooltipTextSize: string;

  defaultMessage = true;

  constructor() { }

  ngOnInit() {
    this.setDefaults();
    if (this.message !== 'N/A' && this.messageSize !== '1.5rem') {
      this.defaultMessage = false;
    }
  }

  ngOnChanges() {
    this.setDefaults();
  }

  private setDefaults() {
    if (this.iconEnabled == null) {
      this.iconEnabled = true;
    }

    if (this.iconType == null || this.iconType === '') {
      this.iconType = 'report';
    }

    if (this.iconColour == null || this.iconColour === '') {
      this.iconColour = 'orange';
    }

    if (this.iconAfterMessage == null) {
      this.iconAfterMessage = false;
    }

    if (this.message == null || this.message === '') {
      this.message = 'N/A';
    }

    if (this.messageSize == null || this.messageSize === '') {
      this.messageSize = '1.5rem';
    }

    if (this.messageColour == null || this.messageColour === '') {
      this.messageColour = 'gray';
    }

    if (this.tooltipEnabled == null) {
      this.tooltipEnabled = true;
    }

    if (this.tooltipMessage == null || this.tooltipMessage === '') {
      this.tooltipMessage = 'Insufficient data to render';
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
