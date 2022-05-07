import { Question3Service } from './../../../question3.service';
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
    private questionService: Question3Service,
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
