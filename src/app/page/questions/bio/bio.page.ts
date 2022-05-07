import { Question6Service } from './../../../question6.service';
import { Question, QuestionAnswer } from './../../../models/question';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.page.html',
  styleUrls: ['./bio.page.scss'],
})
export class BioPage implements OnInit {
  curQuesion: Question;
  constructor(
    private questionService: Question6Service,
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
