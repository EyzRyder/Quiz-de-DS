import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../../question.service';
import { Question1Service } from '../../question1.service';
import { Question2Service } from '../../question2.service';
import { Question3Service } from '../../question3.service';
import { Question4Service } from '../../question4.service';
import { Question5Service } from '../../question5.service';
import { Question6Service } from '../../question6.service';
import { Question7Service } from '../../question7.service';
import { Question8Service } from '../../question8.service';
import { Question9Service } from '../../question9.service';



@Component({
  selector: 'app-end',
  templateUrl: './end.page.html',
  styleUrls: ['./end.page.scss'],
})
export class EndPage implements OnInit {
  score: number;
  constructor( private router: Router,
    private questionService: QuestionService,
    private questionService1: Question1Service,
    private questionService2: Question2Service,
    private questionService3: Question3Service,
    private questionService4: Question4Service,
    private questionService5: Question5Service,
    private questionService6: Question6Service,
    private questionService7: Question7Service,
    private questionService8: Question8Service,
    private questionService9: Question9Service)
    {
      this.score = this.questionService.endpoint;
      this.score = this.questionService1.endpoint;
      this.score = this.questionService2.endpoint;
      this.score = this.questionService3.endpoint;
      this.score = this.questionService4.endpoint;
      this.score = this.questionService5.endpoint;
      this.score = this.questionService6.endpoint;
      this.score = this.questionService7.endpoint;
      this.score = this.questionService8.endpoint;
      this.score = this.questionService9.endpoint;}

  ngOnInit() {
  }

}
