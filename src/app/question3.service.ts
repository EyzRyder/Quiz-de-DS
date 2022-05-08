import { Injectable } from '@angular/core';
import { Question, QuestionAnswer } from './models/question';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Question3Service {
  questionCount: number = 0;
  points: number = 0;
  endpoint: number;
 private questions: Question[] = [
  {
      title: 'O que é SVG e qual seu uso',
      description:'',
      answers: [
        {description: 'é um formato de arquivo usado para a criação de logotipos, ícones e elementos interativos', isRight: true},
        {description: 'é um desenho usado pra brincar com imagens', isRight: false},
        {description: 'é um formato de arquivo usado para a criação de programa', isRight: false},
        {description: 'é um Token não fungível usado no mercado do web', isRight: false},
      ]
  },
  {
      title: 'Que materia de Ds tem um grande relacao com Dg?',
      description:'',
      answers: [
        {description: 'Programacao em moblie', isRight: false},
        {description: 'Informatica', isRight: false},
        {description: 'Desenvolvimento de Sistemas', isRight: false},
        {description: 'Design Digital', isRight: true},
      ]
  },
  {
      title: 'O que um designer digital faz acessamos?',
      description:'O designer digital atua no ramo da programação visual dos meios digitais',
      answers: [
        {description: 'Brinquedos, moveis, poster fisicos, hardwrae', isRight: false},
        {description: 'Sites, aplicativos, e-books, jogos de videogame, ou uma interface digital', isRight: true},
        {description: 'Bancos, casas, lojas, bibliotecas, escolas', isRight: false},
        {description: 'Nenhuma das alternativas', isRight: false},
      ]
  },
  {
      title: 'Que outro formato que podemos comparar o SVG',
      description:'SVG proporciona altíssima qualidade de imagem, é extremamente escalável, ideal para manter a aparência dos sites em diversos tamanhos de tela.',
      answers: [
        {description: 'PH', isRight: false},
        {description: 'TS', isRight: false},
        {description: 'PNG', isRight: true},
        {description: 'PDF', isRight: false},
      ]
  },
  {
      title: 'Qual o nome do layout do site?',
      description:'',
      answers: [
        {description: 'Flowcarts', isRight: false},
        {description: 'Wareframe', isRight: true},
        {description: 'Software', isRight: false},
        {description: 'Mapamental', isRight: false},
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
        title: 'O que é SVG e qual seu uso',
        description:'',
        answers: [
          {description: 'é um formato de arquivo usado para a criação de logotipos, ícones e elementos interativos', isRight: true},
          {description: 'é um desenho usado pra brincar com imagens', isRight: false},
          {description: 'é um formato de arquivo usado para a criação de programa', isRight: false},
          {description: 'é um Token não fungível usado no mercado do web', isRight: false},
        ]
    },
    {
        title: 'Que materia de Ds tem um grande relacao com Dg?',
        description:'',
        answers: [
          {description: 'Programacao em moblie', isRight: false},
          {description: 'Informatica', isRight: false},
          {description: 'Desenvolvimento de Sistemas', isRight: false},
          {description: 'Design Digital', isRight: true},
        ]
    },
    {
        title: 'O que um designer digital faz acessamos?',
        description:'O designer digital atua no ramo da programação visual dos meios digitais',
        answers: [
          {description: 'Brinquedos, moveis, poster fisicos, hardwrae', isRight: false},
          {description: 'Sites, aplicativos, e-books, jogos de videogame, ou uma interface digital', isRight: true},
          {description: 'Bancos, casas, lojas, bibliotecas, escolas', isRight: false},
          {description: 'Nenhuma das alternativas', isRight: false},
        ]
    },
    {
        title: 'Que outro formato que podemos comparar o SVG',
        description:'SVG proporciona altíssima qualidade de imagem, é extremamente escalável, ideal para manter a aparência dos sites em diversos tamanhos de tela.',
        answers: [
          {description: 'PH', isRight: false},
          {description: 'TS', isRight: false},
          {description: 'PNG', isRight: true},
          {description: 'PDF', isRight: false},
        ]
    },
    {
        title: 'Qual o nome do layout do site?',
        description:'',
        answers: [
          {description: 'Flowcarts', isRight: false},
          {description: 'Wareframe', isRight: true},
          {description: 'Software', isRight: false},
          {description: 'Mapamental', isRight: false},
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
