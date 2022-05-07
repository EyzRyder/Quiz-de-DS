import { Injectable } from '@angular/core';
import { Question, QuestionAnswer } from './models/question';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
   questionCount: number = 0;
   points: number = 0;
   endpoint: number;
  private questions: Question[] = [
    {
      title: 'Em geral, quais as relações entre eletrônica e DS?',
      description:'',
      answers: [
        {description: 'Apenas nos sites.', isRight: false},
        {description: 'Apenas nos apps.', isRight: false},
        {description: 'Sites, apps, Banco de dados, construção de PC, design e programação.', isRight: true},
        {description: 'Nenhuma das alternativas.', isRight: false},
      ]
  },
  {
      title: 'Qual linguagem de programação aprenderam e utilizam em eletrônica?',
      description:'Os apps e sites feitos em eletrônica envolvem programação.',
      answers: [
        {description: 'HTML e Java', isRight: false},
        {description: 'C# e Javascript', isRight: false},
        {description: 'Python, php e Html.', isRight: false},
        {description: 'C e HTML', isRight: true},
      ]
  },
  {
      title: 'Quais construções de eletrônica que fizeram ao decorrer do curso que utilizaram uma certa programação para funcionar.',
      description:'',
      answers: [
        {description: 'Construção do LCD (Liquid Crystal Display), Leds, além de sites e apps.', isRight: true},
        {description: 'Construção de brinquedos.', isRight: false},
        {description: 'Construção de Robôs.', isRight: false},
        {description: 'Nenhuma das alternativas.', isRight: false},
      ]
  },
  {
      title: 'Como hardware e software se relacionam?',
      description:'',
      answers: [
        {description: 'Eles não se relacionam.', isRight: false},
        {description: 'O hardware destina-se a executar a tarefa no nível da máquina, enquanto o software fornece instruções para o hardware.', isRight: true},
        {description: 'O software destina-se a executar a tarefa no nível da máquina, enquanto o hardware fornece instruções para o software.', isRight: false},
        {description: 'Todas as alternativas estão corretas.', isRight: false},
      ]
  },
  {
      title: 'DS tem relação com Eletro.',
      description:'',
      answers: [
        {description: 'Não tem relação.', isRight: false},
        {description: 'Não muito, só na parte de Programação.', isRight: false},
        {description: 'Tem uma grande relação.', isRight: true},
        {description: 'São a mesma coisa', isRight: false},
      ]
  }
    ];
  constructor(private router: Router) {
    this.questions.sort((a,b) => 0.5 - Math.random());
  }

  nextQuestion(): Question{
    if( this.questionCount < 5){
    const randomIndex: number = Math.floor(Math.random()*this.questions.length);
    this.questionCount++;
    console.log(this.questions);
    return this.questions.splice(randomIndex, 1)[0];
  }else{
    this.questions = [];
    const backup: Question[]=[
      {
        title: 'Em geral, quais as relações entre eletrônica e DS?',
        description:'',
        answers: [
          {description: 'Apenas nos sites.', isRight: false},
          {description: 'Apenas nos apps.', isRight: false},
          {description: 'Sites, apps, Banco de dados, construção de PC, design e programação.', isRight: true},
          {description: 'Nenhuma das alternativas.', isRight: false},
        ]
    },
    {
        title: 'Qual linguagem de programação aprenderam e utilizam em eletrônica?',
        description:'Os apps e sites feitos em eletrônica envolvem programação.',
        answers: [
          {description: 'HTML e Java', isRight: false},
          {description: 'C# e Javascript', isRight: false},
          {description: 'Python, php e Html.', isRight: false},
          {description: 'C e HTML', isRight: true},
        ]
    },
    {
        title: 'Quais construções de eletrônica que fizeram ao decorrer do curso que utilizaram uma certa programação para funcionar.',
        description:'',
        answers: [
          {description: 'Construção do LCD (Liquid Crystal Display), Leds, além de sites e apps.', isRight: true},
          {description: 'Construção de brinquedos.', isRight: false},
          {description: 'Construção de Robôs.', isRight: false},
          {description: 'Nenhuma das alternativas.', isRight: false},
        ]
    },
    {
        title: 'Como hardware e software se relacionam?',
        description:'',
        answers: [
          {description: 'Eles não se relacionam.', isRight: false},
          {description: 'O hardware destina-se a executar a tarefa no nível da máquina, enquanto o software fornece instruções para o hardware.', isRight: true},
          {description: 'O software destina-se a executar a tarefa no nível da máquina, enquanto o hardware fornece instruções para o software.', isRight: false},
          {description: 'Todas as alternativas estão corretas.', isRight: false},
        ]
    },
    {
        title: 'DS tem relação com Eletro.',
        description:'',
        answers: [
          {description: 'Não tem relação.', isRight: false},
          {description: 'Não muito, só na parte de Programação.', isRight: false},
          {description: 'Tem uma grande relação.', isRight: true},
          {description: 'São a mesma coisa', isRight: false},
        ]
    }
      ];
    this.questions = backup;
    this.endpoint = 0;
    this.questionCount = 0;
    this.endpoint = this.points;
    this.points=0;
    this.router.navigate(['end']);
  }

  }
}
