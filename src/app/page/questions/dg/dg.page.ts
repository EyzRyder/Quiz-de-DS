import { QuestionService } from './../../../question.service';
import { Question, QuestionAnswer } from './../../../models/question';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dg',
  templateUrl: './dg.page.html',
  styleUrls: ['./dg.page.scss'],
})
export class DgPage implements OnInit {
  curQuesion: Question;
  constructor(
    private questionService: QuestionService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.curQuesion = this.questionService.nextQuestionDg();
  }

  doAnswer(answer: QuestionAnswer) {
    if (answer.isRight) {
      this.questionService.points++;
      this.curQuesion = this.questionService.nextQuestionDg();
    } else {
      this.curQuesion = this.questionService.nextQuestionDg();
    }
  }
}
