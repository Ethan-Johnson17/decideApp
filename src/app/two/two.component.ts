import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { appValues, Errors } from '../app.component';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
  @Input() appValues!: appValues;
  @Output() next = new EventEmitter<appValues>();
  @Output() hasErrors = new EventEmitter<Errors>();

  constructor() {}

  getResults() {
    if (this.validateResults()) {
      const appValuesCopy = this.appValues;
      appValuesCopy.visiblePanel = 'three';
      this.next.emit(appValuesCopy);
    } else {
      this.hasErrors.emit({
        show: true,
        message: 'You need at least two answers',
      });
    }
  }

  changeMode() {
    const appValuesCopy = this.appValues;
    appValuesCopy.mode = true;
    this.next.emit(appValuesCopy);
  }

  validateResults() {
    if (this.appValues.mode) {
      if (this.appValues.custom.length > 1) {
        return true;
      }
      return false;
    } else {
      return true;
    }
  }

  addAnswer(custom: any) {
    if (custom.value !== '') {
      const appValuesCopy = this.appValues;
      appValuesCopy.custom.push(custom.value);
      this.next.emit(appValuesCopy);
    } else {
      this.hasErrors.emit({
        show: true,
        message: 'What a terrible question. Pick something better!',
      });
    }
  }

  ngOnInit(): void {}
}
