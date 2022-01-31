import { Component, Input, OnInit } from '@angular/core';
import { appValues } from '../app.component';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
  @Input() appValues!: appValues;

  constructor() {}

  ngOnInit(): void {}
}
