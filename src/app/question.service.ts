import { Injectable } from '@angular/core';
import { Question, QuestionAnswer } from './models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionCount: number = 0;
  private questions: Question[] = [
    {
      title: 'What was the median income of the united states in 2022',
      description:'The median means thes 50% makes above the number and 50%makes below it.',
      answers: [
        {description: 'Resposta 1 P1', isRight: false},
        {description: 'Resposta 2 P1', isRight: true},
        {description: 'Resposta 3 P1', isRight: false},
        {description: 'Resposta 4 P1', isRight: false},
      ]
    },
    {
      title: 'Pergunta 2',
      description:'testrfdgerfged',
      answers: [
        {description: 'Resposta 1 P2', isRight: false},
        {description: 'Resposta 2 P2', isRight: true},
        {description: 'Resposta 3 P2', isRight: false},
        {description: 'Resposta 4 P2', isRight: false},
      ]
    },
    {
      title: 'Pergunta 3',
      description:'testergerg',
      answers: [
        {description: 'Resposta 1 P3', isRight: false},
        {description: 'Resposta 2 P3', isRight: true},
        {description: 'Resposta 3 P3', isRight: false},
        {description: 'Resposta 4 P3', isRight: false},
      ]
    },
    {
      title: 'Pergunta 4',
      description:'testfddgfgr',
      answers: [
        {description: 'Resposta 1 P4', isRight: false},
        {description: 'Resposta 2 P4', isRight: true},
        {description: 'Resposta 3 P4', isRight: false},
        {description: 'Resposta 4 P4', isRight: false},
      ]
    }
    ];
  constructor() {
    this.questions.sort((a,b) => 0.5 - Math.random());
  }

  nextQuestion(): Question{
    const randomIndex: number = Math.floor(Math.random()*this.questions.length);
    this.questionCount++;
    return this.questions.splice(randomIndex, 1)[0];
  }
}
