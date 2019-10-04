import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-example',
  templateUrl: './alert-example.component.html',
  styleUrls: ['./alert-example.component.scss']
})
export class AlertExampleComponent {
  iconEnabled = true;
  iconAfterMessage = false;
  tooltipEnabled = true;

  constructor() { }
}
