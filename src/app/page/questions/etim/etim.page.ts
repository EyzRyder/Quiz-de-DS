import { Question } from './../../../models/question';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-etim',
  templateUrl: './etim.page.html',
  styleUrls: ['./etim.page.scss'],
})
export class EtimPage implements OnInit {

  questions: Question[] = [
{
  title: 'What was the median income of the united states in 2022',
  answers: [
    {description: 'Resposta 1 P1', isRight: false},
    {description: 'Resposta 2 P1', isRight: true},
    {description: 'Resposta 3 P1', isRight: false},
    {description: 'Resposta 4 P1', isRight: false},
  ]
},
{
  title: 'Pergunta 2',
  answers: [
    {description: 'Resposta 1 P2', isRight: false},
    {description: 'Resposta 2 P2', isRight: true},
    {description: 'Resposta 3 P2', isRight: false},
    {description: 'Resposta 4 P2', isRight: false},
  ]
},
{
  title: 'Pergunta 3',
  answers: [
    {description: 'Resposta 1 P3', isRight: false},
    {description: 'Resposta 2 P3', isRight: true},
    {description: 'Resposta 3 P3', isRight: false},
    {description: 'Resposta 4 P3', isRight: false},
  ]
},
{
  title: 'Pergunta 4',
  answers: [
    {description: 'Resposta 1 P4', isRight: false},
    {description: 'Resposta 2 P4', isRight: true},
    {description: 'Resposta 3 P4', isRight: false},
    {description: 'Resposta 4 P4', isRight: false},
  ]
}
];

curQuesion: Question;
questionIndex: number = 0;

  ngOnInit(): void {
    this.curQuesion = this.questions[this.questionIndex];
  }

}
