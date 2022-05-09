import { QuestionService } from './../../../question.service';
import { Question, QuestionAnswer } from './../../../models/question';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sj',
  templateUrl: './sj.page.html',
  styleUrls: ['./sj.page.scss'],
})
export class SjPage implements OnInit {
  curQuesion: Question;
  constructor(
    private questionService: QuestionService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.curQuesion = this.questionService.nextQuestionSj();
  }

  doAnswer(answer: QuestionAnswer) {
    if (answer.isRight) {
      this.questionService.points++;
      this.curQuesion = this.questionService.nextQuestionSj();
    } else {
      this.curQuesion = this.questionService.nextQuestionSj();
    }
  }
}
