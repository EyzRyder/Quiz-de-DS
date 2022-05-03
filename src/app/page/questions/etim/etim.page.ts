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
 curNumber: number = 1;
 points: number = 0;
constructor(
  private questionService: QuestionService,
  private router: Router
){}


  ngOnInit(): void {
    this.curQuesion = this.questionService.nextQuestion();
  }

doAnswer(answer: QuestionAnswer){
  if(answer.isRight && this.curNumber<6){
  this.curNumber++;
  this.points++;
  this.curQuesion = this.questionService.nextQuestion();
  }else{
    this.curQuesion = this.questionService.nextQuestion();
    this.curNumber++;
}

if(this.curNumber===6){
  this.router.navigate(['about']);
  return;
}
}

}
