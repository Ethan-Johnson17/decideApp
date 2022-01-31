import { Component, Input, OnInit } from '@angular/core';
import { appValues } from '../app.component';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
})
export class ThreeComponent implements OnInit {
  @Input() appValues!: appValues;

  constructor() {}

  ngOnInit(): void {}
}
