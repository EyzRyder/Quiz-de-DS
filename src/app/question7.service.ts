import { Injectable } from '@angular/core';
import { Question, QuestionAnswer } from './models/question';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Question7Service {
  questionCount: number = 0;
  points: number = 0;
  endpoint: number;
 private questions: Question[] = [
   {
     title: 'No ponto de vista da navegação da internet, o que o endereço de IP externo representa para o usuário como um dado?',
     description:'Ds e infonet ambos construem websites',
     answers: [
       {description: ' A classificação de endereço de IP externo não existe, só a de endereço de IP', isRight: false},
       {description: 'O endereço de IP externo não é considerado como dado do usuário', isRight: false},
       {description: 'O endereço IP externo é o identificador único e exclusivo do usuário da rede', isRight: true},
       {description: 'O endereço IP externo apenas representa a individualidade do usuário, mas não é usado como um dado', isRight: false},
     ]
   },
   {
     title: 'Qual destas linguagens de programação ou marcação é utilizada para o layout do site?',
     description:'Ds e infonet ambos construem websites',
     answers: [
       {description: 'HTML', isRight: true},
       {description: 'Java', isRight: false},
       {description: 'Angular', isRight: false},
       {description: 'C', isRight: false},
     ]
   },
   {
     title: 'O que é cookie na web?',
     description:'Ds e Infonet ambas trabalha com cookie.',
     answers: [
       {description: 'É biscoito em inglês', isRight: false},
       {description: 'É um dado do site que é armazenado no servidor local (do usuário)', isRight: true},
       {description: ' É um dado que o site armazena no servidor local até que o usuário saia do site', isRight: false},
       {description: 'É um dado irrelevante que só serve para deixar a internet mais lenta', isRight: false},
     ]
   },
   {
     title: 'Em qual dessas partes da estrutura HTML se conecta a linguagem ao CSS?',
     description:'',
     answers: [
       {description: 'head', isRight: true},
       {description: 'header', isRight: false},
       {description: 'script', isRight: false},
       {description: 'body', isRight: false},
     ]
   },
   {
     title: 'Assinale a escolha mais antiética a se fazer na internet.',
     description:'',
     answers: [
       {description: 'Não praticar o cyberbullying', isRight: false},
       {description: 'Contribuir com a disseminação de informações verdadeiras', isRight: false},
       {description: 'Fazer ações de proteção da fauna e flora nas redes sociais', isRight: false},
       {description: ' Praticar o Doxx (Vazamento de Dados)', isRight: true},
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
       title: 'No ponto de vista da navegação da internet, o que o endereço de IP externo representa para o usuário como um dado?',
       description:'Ds e infonet ambos construem websites',
       answers: [
         {description: ' A classificação de endereço de IP externo não existe, só a de endereço de IP', isRight: false},
         {description: 'O endereço de IP externo não é considerado como dado do usuário', isRight: false},
         {description: 'O endereço IP externo é o identificador único e exclusivo do usuário da rede', isRight: true},
         {description: 'O endereço IP externo apenas representa a individualidade do usuário, mas não é usado como um dado', isRight: false},
       ]
     },
     {
       title: 'Qual destas linguagens de programação ou marcação é utilizada para o layout do site?',
       description:'Ds e infonet ambos construem websites',
       answers: [
         {description: 'HTML', isRight: true},
         {description: 'Java', isRight: false},
         {description: 'Angular', isRight: false},
         {description: 'C', isRight: false},
       ]
     },
     {
       title: 'O que é cookie na web?',
       description:'Ds e Infonet ambas trabalha com cookie.',
       answers: [
         {description: 'É biscoito em inglês', isRight: false},
         {description: 'É um dado do site que é armazenado no servidor local (do usuário)', isRight: true},
         {description: ' É um dado que o site armazena no servidor local até que o usuário saia do site', isRight: false},
         {description: 'É um dado irrelevante que só serve para deixar a internet mais lenta', isRight: false},
       ]
     },
     {
       title: 'Em qual dessas partes da estrutura HTML se conecta a linguagem ao CSS?',
       description:'',
       answers: [
         {description: 'head', isRight: true},
         {description: 'header', isRight: false},
         {description: 'script', isRight: false},
         {description: 'body', isRight: false},
       ]
     },
     {
       title: 'Assinale a escolha mais antiética a se fazer na internet.',
       description:'',
       answers: [
         {description: 'Não praticar o cyberbullying', isRight: false},
         {description: 'Contribuir com a disseminação de informações verdadeiras', isRight: false},
         {description: 'Fazer ações de proteção da fauna e flora nas redes sociais', isRight: false},
         {description: ' Praticar o Doxx (Vazamento de Dados)', isRight: true},
       ]
     }
     ];
   this.questions = backup;
   this.endpoint = 0;
   this.questionCount = 0;
   this.endpoint = this.points;
   this.points=0;
   this.router.navigate(['end7']);
 }

 }
}
