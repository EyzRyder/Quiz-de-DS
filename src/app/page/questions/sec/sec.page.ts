import { Question9Service } from './../../../question9.service';
import { Question, QuestionAnswer } from './../../../models/question';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sec',
  templateUrl: './sec.page.html',
  styleUrls: ['./sec.page.scss'],
})
export class SecPage implements OnInit {
  curQuesion: Question;
  constructor(
    private questionService: Question9Service,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.curQuesion = this.questionService.nextQuestion();
  }

  doAnswer(answer: QuestionAnswer) {
    if (answer.isRight) {
      this.questionService.points++;
      this.curQuesion = this.questionService.nextQuestion();
    } else {
      this.curQuesion = this.questionService.nextQuestion();
    }
  }
}
