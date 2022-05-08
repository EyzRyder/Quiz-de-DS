import { Injectable } from '@angular/core';
import { Question, QuestionAnswer } from './models/question';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Question9Service {
  questionCount: number = 0;
  points: number = 0;
  endpoint: number;
 private questions: Question[] = [
  {
    title: 'Se por acaso o seu superior pedir para apresentar um relatório de forma online, qual desses softwares será mais viável para o secretário apresentá-lo?',
    description:'',
    answers: [
      {description: 'Word', isRight: false},
      {description: 'PowerPoint', isRight: true},
      {description: 'Excel', isRight: false},
      {description: 'MS-DOS', isRight: false},
    ]
},
{
    title: 'Qual das alternativas abaixo indica um bom planejamento do secretariado com/para a área de T.I.?',
    description:'',
    answers: [
      {description: 'Criar perfis individuais para cada cliente da empresa', isRight: true},
      {description: 'Diminuir a proposta de salário do analista de dados', isRight: false},
      {description: 'Pedir os dados pessoais dos clientes', isRight: false},
      {description: 'Poupar gastos para implementar novas tecnologias na área de T.I.', isRight: false},
    ]
},
{
    title: 'Como o Banco de Dados pode facilitar o trabalho de um secretário em uma instituição?',
    description:'',
    answers: [
      {description: 'O secretário pode analisar o desenvolvimento da instituição, mas ele não utiliza os dados presentes de forma prática.', isRight: false},
      {description: 'O secretário é capaz de analisar a produtividade do seu funcionário pelos dados que o sistema capta de sua vida pública', isRight: false},
      {description: 'O secretário utiliza esses dados, do sistema da instituição em que trabalha, para tomar decisões que ajudem no progresso da mesma', isRight: true},
      {description: 'Ele não necessita do Banco de Dados para seu trabalho, já que ele consulta todas as informações que obtêm de sua agenda', isRight: false},
    ]
},
{
    title:'Como peça fundamental de uma instituição para desenvolvimento de seus variados setores, qual deles o secretariado deve consultar mais se ele quiser informatizar um outro setor?',
    description:'',
    answers: [
      {description: 'Financeiro', isRight: false},
      {description: 'logística', isRight: false},
      {description: 'Compras', isRight: false},
      {description: 'T.I.', isRight: true},
    ]
},
{
    title: 'Para poder auxiliar o secretário no monitoramento dos variados setores de sua instituição, qual das possíveis soluções é a mais viável?',
    description:'',
    answers: [
      {description: 'Criar tabelas de dados de cada setor que se relacionam na Base de Dados', isRight: true},
      {description: 'Arrumar uma semana de seu trabalho para entender o setor', isRight: false},
      {description: 'Aplicar tarefas hipotéticas a cada setor e aprender na tentativa e erro', isRight: false},
      {description: 'Simplesmente, não fazer nada', isRight: false},
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
      title: 'Se por acaso o seu superior pedir para apresentar um relatório de forma online, qual desses softwares será mais viável para o secretário apresentá-lo?',
      description:'',
      answers: [
        {description: 'Word', isRight: false},
        {description: 'PowerPoint', isRight: true},
        {description: 'Excel', isRight: false},
        {description: 'MS-DOS', isRight: false},
      ]
  },
  {
      title: 'Qual das alternativas abaixo indica um bom planejamento do secretariado com/para a área de T.I.?',
      description:'',
      answers: [
        {description: 'Criar perfis individuais para cada cliente da empresa', isRight: true},
        {description: 'Diminuir a proposta de salário do analista de dados', isRight: false},
        {description: 'Pedir os dados pessoais dos clientes', isRight: false},
        {description: 'Poupar gastos para implementar novas tecnologias na área de T.I.', isRight: false},
      ]
  },
  {
      title: 'Como o Banco de Dados pode facilitar o trabalho de um secretário em uma instituição?',
      description:'',
      answers: [
        {description: 'O secretário pode analisar o desenvolvimento da instituição, mas ele não utiliza os dados presentes de forma prática.', isRight: false},
        {description: 'O secretário é capaz de analisar a produtividade do seu funcionário pelos dados que o sistema capta de sua vida pública', isRight: false},
        {description: 'O secretário utiliza esses dados, do sistema da instituição em que trabalha, para tomar decisões que ajudem no progresso da mesma', isRight: true},
        {description: 'Ele não necessita do Banco de Dados para seu trabalho, já que ele consulta todas as informações que obtêm de sua agenda', isRight: false},
      ]
  },
  {
      title:'Como peça fundamental de uma instituição para desenvolvimento de seus variados setores, qual deles o secretariado deve consultar mais se ele quiser informatizar um outro setor?',
      description:'',
      answers: [
        {description: 'Financeiro', isRight: false},
        {description: 'logística', isRight: false},
        {description: 'Compras', isRight: false},
        {description: 'T.I.', isRight: true},
      ]
  },
  {
      title: 'Para poder auxiliar o secretário no monitoramento dos variados setores de sua instituição, qual das possíveis soluções é a mais viável?',
      description:'',
      answers: [
        {description: 'Criar tabelas de dados de cada setor que se relacionam na Base de Dados', isRight: true},
        {description: 'Arrumar uma semana de seu trabalho para entender o setor', isRight: false},
        {description: 'Aplicar tarefas hipotéticas a cada setor e aprender na tentativa e erro', isRight: false},
        {description: 'Simplesmente, não fazer nada', isRight: false},
      ]
  }
     ];
   this.questions = backup;
   this.endpoint = 0;
   this.questionCount = 0;
   this.endpoint = this.points;
   this.points=0;
   this.router.navigate(['end9']);
 }

 }
}
