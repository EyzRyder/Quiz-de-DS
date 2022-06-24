import { QuestionService } from './../../../question.service';
import { Question, QuestionAnswer } from './../../../models/question';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ev',
  templateUrl: './ev.page.html',
  styleUrls: ['./ev.page.scss'],
})
export class EvPage implements OnInit {
  curQuesion: Question;
constructor( private questionService: QuestionService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.curQuesion = this.questionService.nextQuestionEv();
    this.questionService.start();
  }

  doAnswer(answer: QuestionAnswer) {
    if (answer.isRight) {
      this.questionService.points++;
      this.curQuesion = this.questionService.nextQuestionEv();
    } else {
      this.curQuesion = this.questionService.nextQuestionEv();
    }
  }
}
