import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { appValues } from '../app.component';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
})
export class ThreeComponent implements OnInit {
  @Input() appValues!: appValues;
  @Output() next = new EventEmitter<appValues>();
  @Output() resetValues = new EventEmitter<boolean>();

  constructor() {}

  showResults() {
    const appValuesCopy = this.appValues;
    const answersArray = this.appValues.answers;
    const customArray = this.appValues.custom;
    let result: string = '';
    if (!this.appValues.mode) {
      result = answersArray[Math.floor(Math.random() * answersArray.length)];
    } else {
      result = customArray[Math.floor(Math.random() * customArray.length)];
    }

    appValuesCopy.answer = result;
    this.next.emit(appValuesCopy);
  }

  doItAgain() {
    this.showResults();
  }

  onStartOver() {
    this.resetValues.emit(true);
  }

  ngOnInit() {
    this.showResults();
  }
}
