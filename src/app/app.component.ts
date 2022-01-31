import { Component, OnInit } from '@angular/core';
import answersValue from './utils/answers.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'decideApp';

  ngOnInit() {
    console.log(answersValue.answers);
  }
}
