import { Injectable } from '@angular/core';
import { Question, QuestionAnswer } from './models/question';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Question4Service {
  questionCount: number = 0;
  points: number = 0;
  endpoint: number;
 private questions: Question[] = [
  {
    title: 'Quais programa(s) vocês mais utilizam em eventos?',
    description:'',
    answers: [
      {description: 'Canva', isRight: false},
      {description: 'Power point', isRight: false},
      {description: 'Canva e Power point', isRight: true},
      {description: 'Word e Excel', isRight: false},
    ]
},
{
    title: 'Quais projetos feitos em eventos que envolvem o Canva e o Power point?',
    description:'',
    answers: [
      {description: 'Pré-evento', isRight: true},
      {description: 'Confecção de convites', isRight: false},
      {description: 'Sites', isRight: false},
      {description: 'Todas as alternativas estão corretas.', isRight: false},
    ]
},
{
    title: 'Qual o papel dos sites programados que vocês utilizam em eventos?',
    description:'',
    answers: [
      {description: 'Divulgação e Marketing', isRight: true},
      {description: 'Divulgar os produtos de supermercado.', isRight: false},
      {description: 'Ensinar como programar', isRight: false},
      {description: 'Nenhuma das alternativas anteriores.', isRight: false},
    ]
},
{
    title: 'Quando um evento vai acontecer, é correto afirmar que sites, plataformas e diversas redes sociais são utilizados para na divulgação?',
    description:'',
    answers: [
      {description: 'Não, essas três formas de divulgação não são eficientes.', isRight: false},
      {description: 'Sim, mas as redes sociais não se inclui.', isRight: false},
      {description: 'Sim, nós utilizamos sites, plataformas e diversas redes sociais como o Instagram para divulgação', isRight: true},
      {description: 'Nenhuma das anteriores.', isRight: false},
    ]
},
{
    title: 'Se não existisse programador e as redes sociais não fossem criadas, dificultaria a divulgação de um evento?',
    description:'',
    answers: [
      {description: 'Não, seria divulgado da mesma forma.', isRight: false},
      {description: 'Sim, o processo seria muito mais lento e atrairia bem menos pessoas para o evento.', isRight: true},
      {description: 'Sim, mas só seria um pouco pior.', isRight: false},
      {description: 'Todas estão corretas.', isRight: false},
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
      title: 'Quais programa(s) vocês mais utilizam em eventos?',
      description:'',
      answers: [
        {description: 'Canva', isRight: false},
        {description: 'Power point', isRight: false},
        {description: 'Canva e Power point', isRight: true},
        {description: 'Word e Excel', isRight: false},
      ]
  },
  {
      title: 'Quais projetos feitos em eventos que envolvem o Canva e o Power point?',
      description:'',
      answers: [
        {description: 'Pré-evento', isRight: true},
        {description: 'Confecção de convites', isRight: false},
        {description: 'Sites', isRight: false},
        {description: 'Todas as alternativas estão corretas.', isRight: false},
      ]
  },
  {
      title: 'Qual o papel dos sites programados que vocês utilizam em eventos?',
      description:'',
      answers: [
        {description: 'Divulgação e Marketing', isRight: true},
        {description: 'Divulgar os produtos de supermercado.', isRight: false},
        {description: 'Ensinar como programar', isRight: false},
        {description: 'Nenhuma das alternativas anteriores.', isRight: false},
      ]
  },
  {
      title: 'Quando um evento vai acontecer, é correto afirmar que sites, plataformas e diversas redes sociais são utilizados para na divulgação?',
      description:'',
      answers: [
        {description: 'Não, essas três formas de divulgação não são eficientes.', isRight: false},
        {description: 'Sim, mas as redes sociais não se inclui.', isRight: false},
        {description: 'Sim, nós utilizamos sites, plataformas e diversas redes sociais como o Instagram para divulgação', isRight: true},
        {description: 'Nenhuma das anteriores.', isRight: false},
      ]
  },
  {
      title: 'Se não existisse programador e as redes sociais não fossem criadas, dificultaria a divulgação de um evento?',
      description:'',
      answers: [
        {description: 'Não, seria divulgado da mesma forma.', isRight: false},
        {description: 'Sim, o processo seria muito mais lento e atrairia bem menos pessoas para o evento.', isRight: true},
        {description: 'Sim, mas só seria um pouco pior.', isRight: false},
        {description: 'Todas estão corretas.', isRight: false},
      ]
  }
     ];
   this.questions = backup;
   this.endpoint = 0;
   this.questionCount = 0;
   this.endpoint = this.points;
   this.points=0;
   this.router.navigate(['end4']);
 }

 }
}

