import { Question1Service } from './../../../question1.service';
import { Question, QuestionAnswer } from './../../../models/question';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.page.html',
  styleUrls: ['./adm.page.scss'],
})
export class AdmPage implements OnInit {
  curQuesion: Question;
  constructor(
    private questionService: Question1Service,
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
