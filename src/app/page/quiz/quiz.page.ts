import { QuestionService } from './../../question.service';
import { Quiz, Question, QuestionAnswer } from './../../models/question';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  curQuesion: Question;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) { }


  ngOnInit(): void {
    this.curQuesion = this.questionService.nextQuestion();
    this.questionService.start();
  }



  doAnswer(answer: QuestionAnswer) {
    if (answer.isRight) {
      this.questionService.points++;
      this.curQuesion = this.questionService.nextQuestion();
    } else if (answer.isRight == false) {
      this.curQuesion = this.questionService.nextQuestion();
    }
  }

}
