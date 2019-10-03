import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-example',
  templateUrl: './tooltip-example.component.html',
  styleUrls: ['./tooltip-example.component.scss']
})
export class TooltipExampleComponent implements OnInit {
  content = 'Main content';
  mainTextColour: string;
  mainTextSize: string;
  tooltiptext = 'Tooltip content';
  tooltipBackgroundColour: string;
  tooltipTextColour: string;
  tooltipTextSize: string;

  constructor() { }

  ngOnInit() {
  }

}
