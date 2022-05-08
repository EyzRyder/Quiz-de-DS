import { Injectable } from '@angular/core';
import { Question, QuestionAnswer } from './models/question';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Question8Service {
  questionCount: number = 0;
  points: number = 0;
  endpoint: number;
 private questions: Question[] = [
  {
    title: 'Segundo a teoria das cores RGB (cores aditivas ou luzes coloridas), a mistura das luzes vermelha, azul e verde resulta em qual cor?',
    description:'',
    answers: [
      {description: 'Preta', isRight: false},
      {description: 'Branca', isRight: true},
      {description: 'Marrom', isRight: false},
      {description: 'Verde-arroxeado', isRight: false},
    ]
},
{
    title: 'Sendo ambas formas diferentes de aplicar o método do Design, qual o objetivo em comum do Design Digital e do Design de Interiores?',
    description:'o Design Digital molda o layout de sites, softwares e sistemas',
    answers: [
      {description: 'Ambas visam criar imagens, desenhos ou representações que auxiliem, de alguma forma, em sua função e/ou mensagem', isRight: true},
      {description: 'As duas não tem nada em comum', isRight: false},
      {description: 'Ambas são utilizadas para a produção de um produto e seu sucesso de vendas', isRight: false},
      {description: 'Ambas são utilizadas para tornar o produto mais atraente', isRight: false},
    ]
},
{
    title: 'Qual das cores abaixo poderia ser utilizada para passar a imagem de alegria e boa recepção em um local?',
    description:'',
    answers: [
      {description: 'Vermelho', isRight: false},
      {description: 'Amarelo', isRight: true},
      {description: 'Azul', isRight: false},
      {description: 'Rosa', isRight: false},
    ]
},
{
    title: 'Porque é tão importante, sendo em um interior de um local ou em uma interface gráfica, deixar um espaço considerável entre os elementos?',
    description:'',
    answers: [
      {description: 'Para colocar mais elementos futuramente, se for preciso', isRight: false},
      {description: 'Para preencher com detalhes adicionais', isRight: false},
      {description: 'Para deixar mais bonito, pois assim estimula o cliente a comprar o produto', isRight: false},
      {description: 'Para deixar espaços de alívio visual, facilitando o raciocínio organizacional do local', isRight: true},
    ]
},
{
    title: 'Porque Design não pode ser confundido com arte?',
    description:'',
    answers: [
      {description: 'Porque o Design não visa a manifestação dos sentimentos do autor para outros e, sim, a  estimulação das sensações do receptor da obra', isRight: true},
      {description: 'Porque o Design não utiliza as cores para estimular os sentimentos do usuário da obra', isRight: false},
      {description: 'Porque, diferente do Design, o mundo das artes leva em consideração as diferentes percepções de beleza', isRight: false},
      {description: 'Porque o Design não é capaz de abordar temas variados em suas criações', isRight: false},
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
      title: 'Segundo a teoria das cores RGB (cores aditivas ou luzes coloridas), a mistura das luzes vermelha, azul e verde resulta em qual cor?',
      description:'',
      answers: [
        {description: 'Preta', isRight: false},
        {description: 'Branca', isRight: true},
        {description: 'Marrom', isRight: false},
        {description: 'Verde-arroxeado', isRight: false},
      ]
  },
  {
      title: 'Sendo ambas formas diferentes de aplicar o método do Design, qual o objetivo em comum do Design Digital e do Design de Interiores?',
      description:'o Design Digital molda o layout de sites, softwares e sistemas',
      answers: [
        {description: 'Ambas visam criar imagens, desenhos ou representações que auxiliem, de alguma forma, em sua função e/ou mensagem', isRight: true},
        {description: 'As duas não tem nada em comum', isRight: false},
        {description: 'Ambas são utilizadas para a produção de um produto e seu sucesso de vendas', isRight: false},
        {description: 'Ambas são utilizadas para tornar o produto mais atraente', isRight: false},
      ]
  },
  {
      title: 'Qual das cores abaixo poderia ser utilizada para passar a imagem de alegria e boa recepção em um local?',
      description:'',
      answers: [
        {description: 'Vermelho', isRight: false},
        {description: 'Amarelo', isRight: true},
        {description: 'Azul', isRight: false},
        {description: 'Rosa', isRight: false},
      ]
  },
  {
      title: 'Porque é tão importante, sendo em um interior de um local ou em uma interface gráfica, deixar um espaço considerável entre os elementos?',
      description:'',
      answers: [
        {description: 'Para colocar mais elementos futuramente, se for preciso', isRight: false},
        {description: 'Para preencher com detalhes adicionais', isRight: false},
        {description: 'Para deixar mais bonito, pois assim estimula o cliente a comprar o produto', isRight: false},
        {description: 'Para deixar espaços de alívio visual, facilitando o raciocínio organizacional do local', isRight: true},
      ]
  },
  {
      title: 'Porque Design não pode ser confundido com arte?',
      description:'',
      answers: [
        {description: 'Porque o Design não visa a manifestação dos sentimentos do autor para outros e, sim, a  estimulação das sensações do receptor da obra', isRight: true},
        {description: 'Porque o Design não utiliza as cores para estimular os sentimentos do usuário da obra', isRight: false},
        {description: 'Porque, diferente do Design, o mundo das artes leva em consideração as diferentes percepções de beleza', isRight: false},
        {description: 'Porque o Design não é capaz de abordar temas variados em suas criações', isRight: false},
      ]
  }
     ];
   this.questions = backup;
   this.endpoint = 0;
   this.questionCount = 0;
   this.endpoint = this.points;
   this.points=0;
   this.router.navigate(['end8']);
 }

 }
}
