import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-example',
  templateUrl: './alert-example.component.html',
  styleUrls: ['./alert-example.component.scss']
})
export class AlertExampleComponent implements OnInit {
  iconEnabled = true;
  iconType: string;
  iconColour: string;
  iconAfterMessage = false;

  message: string;
  messageSize: string;

  tooltipEnabled = true;
  tooltipMessage: string;

  constructor() { }

  ngOnInit() {
  }
}
