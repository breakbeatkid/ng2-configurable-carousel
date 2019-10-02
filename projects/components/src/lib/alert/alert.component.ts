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
  @Input() icon: string;
  @Input() message: string;
  @Input() tooltipMessage: string;
  @Input() colour: string;
  @Input() tooltip: boolean;
  @Input() messageSize: string;
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
    if (this.icon == null || this.icon === '') {
      this.icon = 'report';
    }

    if (this.message == null || this.message === '') {
      this.message = 'N/A';
    }

    if (this.tooltipMessage == null || this.tooltipMessage === '') {
      this.tooltipMessage = 'Insufficient data to render';
    }

    if (this.colour == null || this.colour === '') {
      this.colour = 'orange';
    }

    if (this.tooltip == null) {
      this.tooltip = true;
    }

    if (this.messageSize == null || this.messageSize === '') {
      this.messageSize = '1.5rem';
    }
  }
}
