import { Injectable } from '@angular/core';
import { Question, QuestionAnswer } from './models/question';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Question1Service {
  questionCount: number = 0;
  points: number = 0;
  endpoint: number;
 private questions: Question[] = [
  {
    title: ' Qual forma de armazenamento de dados utilizado por DS e Adm?',
    description:'DS e Adm ambas mexem com armazenamentos de dados.',
    answers: [
      {description: 'Só salvo, porém num aplicativo ou site que os dados são compartilhados.', isRight: false},
      {description: 'No Banco de Dados, cujo os dados são particulares.', isRight: true},
      {description: 'Sites particulares, que os dados serão armazenados sem perigo algum.', isRight: false},
      {description: 'Nenhuma das alternativas', isRight: false},
    ]
},
{
    title: 'Porque os sites e os Bancos de dados são importantes na administração?',
    description:'',
    answers: [
      {description: 'Pois é uma forma de pesquisarmos sobre os temas diversos e armazenar  os dados.', isRight: true},
      {description: 'São usados mas não são importantes.', isRight: false},
      {description: 'Não sao usados nem são importantes', isRight: false},
      {description: 'Apenas utilizamos sites, os Bancos de dados não estão envolvidos', isRight: false},
    ]
},
{
    title: 'Quais apps são utilizados na administração com relação aos Bancos de dados?',
    description:'',
    answers: [
      {description: 'apenas access', isRight: false},
      {description: 'apenas excel', isRight: false},
      {description: 'excel e word', isRight: false},
      {description: 'excel e access', isRight: true},
    ]
},
{
    title: 'Qual a importância do Excel e access na administração para os Bancos de dados?',
    description:'',
    answers: [
      {description: 'O Banco de dados e administração não tem ligação alguma.', isRight: false},
      {description: 'São importantes para armazenar os dados em tabelas ou planilhas envolvendo o Banco de dados.', isRight: true},
      {description: 'Os apps não salvam os dados e assim eles são perdidos.', isRight: false},
      {description: ' Nenhuma das alternativas anteriores.', isRight: false},
    ]
},
{
    title: 'Que tipo (s) de administração tem em DS?',
    description:'',
    answers: [
      {description: 'Administração de Banco de Dados, Scrum Master e Administração de redes', isRight: true},
      {description: 'Administração de Banco de Dados e Administração de redes', isRight: false},
      {description: 'Apenas administração de redes', isRight: false},
      {description: 'nao tem', isRight: false},
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
      title: ' Qual forma de armazenamento de dados utilizado por DS e Adm?',
      description:'DS e Adm ambas mexem com armazenamentos de dados.',
      answers: [
        {description: 'Só salvo, porém num aplicativo ou site que os dados são compartilhados.', isRight: false},
        {description: 'No Banco de Dados, cujo os dados são particulares.', isRight: true},
        {description: 'Sites particulares, que os dados serão armazenados sem perigo algum.', isRight: false},
        {description: 'Nenhuma das alternativas', isRight: false},
      ]
  },
  {
      title: 'Porque os sites e os Bancos de dados são importantes na administração?',
      description:'',
      answers: [
        {description: 'Pois é uma forma de pesquisarmos sobre os temas diversos e armazenar  os dados.', isRight: true},
        {description: 'São usados mas não são importantes.', isRight: false},
        {description: 'Não sao usados nem são importantes', isRight: false},
        {description: 'Apenas utilizamos sites, os Bancos de dados não estão envolvidos', isRight: false},
      ]
  },
  {
      title: 'Quais apps são utilizados na administração com relação aos Bancos de dados?',
      description:'',
      answers: [
        {description: 'apenas access', isRight: false},
        {description: 'apenas excel', isRight: false},
        {description: 'excel e word', isRight: false},
        {description: 'excel e access', isRight: true},
      ]
  },
  {
      title: 'Qual a importância do Excel e access na administração para os Bancos de dados?',
      description:'',
      answers: [
        {description: 'O Banco de dados e administração não tem ligação alguma.', isRight: false},
        {description: 'São importantes para armazenar os dados em tabelas ou planilhas envolvendo o Banco de dados.', isRight: true},
        {description: 'Os apps não salvam os dados e assim eles são perdidos.', isRight: false},
        {description: ' Nenhuma das alternativas anteriores.', isRight: false},
      ]
  },
  {
      title: 'Que tipo (s) de administração tem em DS?',
      description:'',
      answers: [
        {description: 'Administração de Banco de Dados, Scrum Master e Administração de redes', isRight: true},
        {description: 'Administração de Banco de Dados e Administração de redes', isRight: false},
        {description: 'Apenas administração de redes', isRight: false},
        {description: 'nao tem', isRight: false},
      ]
  }
     ];
   this.questions = backup;
   this.endpoint = 0;
   this.questionCount = 0;
   this.endpoint = this.points;
   this.points=0;
   this.router.navigate(['End']);
 }

 }
}
