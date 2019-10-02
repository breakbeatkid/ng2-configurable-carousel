import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-example',
  templateUrl: './alert-example.component.html',
  styleUrls: ['./alert-example.component.scss']
})
export class AlertExampleComponent implements OnInit {
  iconEnabled = true;
  icon: string;
  colour: string;

  message: string;
  messageSize: string;

  tooltip = true;
  tooltipMessage: string;

  constructor() { }

  ngOnInit() {
  }
}
