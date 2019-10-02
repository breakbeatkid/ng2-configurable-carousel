import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-example',
  templateUrl: './alert-example.component.html',
  styleUrls: ['./alert-example.component.scss']
})
export class AlertExampleComponent implements OnInit {
  icon: string;
  message: string;
  tooltipMessage: string;
  colour: string;
  tooltip = true;
  messageSize: string;

  constructor() { }

  ngOnInit() {
  }
}
