import { Injectable } from '@angular/core';
import { Question, QuestionAnswer } from './models/question';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Question2Service {
  questionCount: number = 0;
  points: number = 0;
  endpoint: number;
 private questions: Question[] = [
  {
    title: 'Qual dos sites abaixos pode ser usados para organizar documentos juridicos utilizando um banco de dados?',
    description:'organizacao, digitalizacao entre outros',
    answers: [
      {description: 'W3K DRIVING DIGITAL TRANSFORMATION', isRight: true},
      {description: 'WIKIPÉDIA', isRight: false},
      {description: 'YAPOLI', isRight: false},
      {description: 'AMAZON MANAGEMENT', isRight: false},
    ]
},
{
    title: 'Algo bem importante em qualquer area de SJ é o gerenciamento de arquivos, em qual das opções isso pode ser feito de melhor forma?',
    description:'',
    answers: [
      {description: 'Papel e Caneta', isRight: false},
      {description: 'Um Banco de Dados', isRight: true},
      {description: 'WIKIPÉDIA', isRight: false},
      {description: 'CERÉBRO', isRight: false},
    ]
},
{
    title: 'Existem alguns metodos de se fazer uma denuncia, em qual das opções abaixo uma denuncia pode ser feita?',
    description:'Denuncias de varios tipos podem ser feitas atraves da internet',
    answers: [
      {description: 'Sites e Apps para denuncia', isRight: true},
      {description: 'WIKIPÉDIA', isRight: false},
      {description: 'Site do Governo', isRight: false},
      {description: 'Brainly', isRight: false},
    ]
},
{
    title: 'Por que a digitalização de documentos e utilização de serviços de organização de dados são importantes em SJ?',
    description:'',
    answers: [
      {description: 'Facilitação ao atualizar documentos, organiza-los e acessa-los', isRight: true},
      {description: 'Deixar Bonito', isRight: false},
      {description: 'Entrar na area digital', isRight: false},
      {description: 'Estar na web', isRight: false},
    ]
},
{
    title: 'Por que a entrada de informações legais e documentos do tipo são importantes estarem de facil acesso na internet?',
    description:'',
    answers: [
      {description: 'Para que todos tenham acesso a seus dados', isRight: false},
      {description: 'Para facilitar o acesso a dados juridicos e pessoais e serem atualizados mais facilmente', isRight: true},
      {description: 'Para estarem na web', isRight: false},
      {description: 'Para serem vendidos', isRight: false},
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
      title: 'Qual dos sites abaixos pode ser usados para organizar documentos juridicos utilizando um banco de dados?',
      description:'organizacao, digitalizacao entre outros',
      answers: [
        {description: 'W3K DRIVING DIGITAL TRANSFORMATION', isRight: true},
        {description: 'WIKIPÉDIA', isRight: false},
        {description: 'YAPOLI', isRight: false},
        {description: 'AMAZON MANAGEMENT', isRight: false},
      ]
  },
  {
      title: 'Algo bem importante em qualquer area de SJ é o gerenciamento de arquivos, em qual das opções isso pode ser feito de melhor forma?',
      description:'',
      answers: [
        {description: 'Papel e Caneta', isRight: false},
        {description: 'Um Banco de Dados', isRight: true},
        {description: 'WIKIPÉDIA', isRight: false},
        {description: 'CERÉBRO', isRight: false},
      ]
  },
  {
      title: 'Existem alguns metodos de se fazer uma denuncia, em qual das opções abaixo uma denuncia pode ser feita?',
      description:'Denuncias de varios tipos podem ser feitas atraves da internet',
      answers: [
        {description: 'Sites e Apps para denuncia', isRight: true},
        {description: 'WIKIPÉDIA', isRight: false},
        {description: 'Site do Governo', isRight: false},
        {description: 'Brainly', isRight: false},
      ]
  },
  {
      title: 'Por que a digitalização de documentos e utilização de serviços de organização de dados são importantes em SJ?',
      description:'',
      answers: [
        {description: 'Facilitação ao atualizar documentos, organiza-los e acessa-los', isRight: true},
        {description: 'Deixar Bonito', isRight: false},
        {description: 'Entrar na area digital', isRight: false},
        {description: 'Estar na web', isRight: false},
      ]
  },
  {
      title: 'Por que a entrada de informações legais e documentos do tipo são importantes estarem de facil acesso na internet?',
      description:'',
      answers: [
        {description: 'Para que todos tenham acesso a seus dados', isRight: false},
        {description: 'Para facilitar o acesso a dados juridicos e pessoais e serem atualizados mais facilmente', isRight: true},
        {description: 'Para estarem na web', isRight: false},
        {description: 'Para serem vendidos', isRight: false},
      ]
  }
     ];
   this.questions = backup;
   this.endpoint = 0;
   this.questionCount = 0;
   this.endpoint = this.points;
   this.points=0;
   this.router.navigate(['end2']);
 }

 }
}

