import { Injectable } from '@angular/core';
import { Quiz, Question, QuestionAnswer } from './models/question';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  quiz: any;
  questionCount: number = 0;
  points: number = 0;
  endpoint: number;
  ss: number = 0;
  mm: number = 0;
  hh: number = 0;
  ssf: number = 0;
  mmf: number = 0;
  hhf: number = 0;
  temp: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,) {

  }
  start() {
    this.temp = setInterval(() => { this.timer(); }, 1000);
  }
  timer() {
    this.ss++;
    if (this.ss == 60) {
      this.ss = 0;
      this.mm++;

      if (this.mm == 60) {
        this.mm = 0;
        this.hh++;
      }
    }
  }

  reset() {
    this.endpoint = 0;
    this.questionCount = 0;
    this.ssf = 0;
    this.mmf = 0;
    this.hhf = 0;
    this.ssf = this.ss;
    this.mmf = this.mm;
    this.hhf = this.hh;
    clearInterval(this.temp);
    this.endpoint = this.points;
    this.points = 0;
    this.ss = 0;
    this.mm = 0;
    this.hh = 0;
    this.router.navigate(['end']);
  }
  nextQuestion(): Question {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.quiz = getNav.extras.state.paramQuiz;
      }
    });
    if (this.questionCount < 5) {
      this.questionCount++;
      return this.quiz.curso[this.questionCount - 1];
    } else {
      this.reset();
    }

  }
}