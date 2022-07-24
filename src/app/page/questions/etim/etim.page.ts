import { QuestionService } from './../../../question.service';
import { Question, QuestionAnswer } from './../../../models/question';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-etim',
  templateUrl: './etim.page.html',
  styleUrls: ['./etim.page.scss'],
})
export class EtimPage implements OnInit {
  curQuesion: Question;
constructor( private questionService: QuestionService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.curQuesion = this.questionService.nextQuestionEtim();
    this.questionService.start();
  }



  doAnswer(answer: QuestionAnswer) {
    if (answer.isRight) {
      this.questionService.points++;
      this.curQuesion = this.questionService.nextQuestionEtim();
    } else if (answer.isRight == false) {
      this.curQuesion = this.questionService.nextQuestionEtim();
    }
  }

}
