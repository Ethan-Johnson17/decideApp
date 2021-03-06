import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { appValues, Errors } from '../app.component';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {
  @Input() appValues!: appValues;
  @Output() next = new EventEmitter<appValues>();
  @Output() hasErrors = new EventEmitter<Errors>();

  constructor() {}

  onAddQuestion(question: any) {
    const appValuesCopy = this.appValues;

    if (question.value !== '') {
      appValuesCopy.visiblePanel = 'two';
      appValuesCopy.question = question.value;
      this.next.emit(appValuesCopy);
    } else {
      this.hasErrors.emit({
        show: true,
        message: 'What a terrible question. Pick something better!',
      });
    }
  }

  ngOnInit() {}
}
