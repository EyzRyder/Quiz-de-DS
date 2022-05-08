import { Injectable } from '@angular/core';
import { Question, QuestionAnswer } from './models/question';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Question6Service {
  questionCount: number = 0;
  points: number = 0;
  endpoint: number;
 private questions: Question[] = [
  {
    title: 'Qual sistema do nosso corpo humano pode ser comparado às partes do computador: HD e Memória RAM?',
    description:' O computador é como um corpo humano artificial <br> HD: Armazenamento das informações. <br> Ram: Usa as informações para ajir',
    answers: [
      {description: 'Sistema Nervoso', isRight: true},
      {description: 'Sistema Cardiovascular', isRight: false},
      {description: 'Sistema Endócrino', isRight: false},
      {description: 'Sistema Digestivo', isRight: false},
    ]
},
{
    title: 'Qual a principal diferença entre o raciocínio de nosso cérebro em comparação com o de um computador e outros hardwares?',
    description:'Hardware: é parte que é palpável, concreto',
    answers: [
      {description: 'Cérebro humano: raciocínio limitado apenas entre SIM e NÃO. Computador: infinitas possibilidades de escolhas.', isRight: false},
      {description: 'O raciocínio dos dois são os mesmos.', isRight: false},
      {description: 'Não há como compará-los', isRight: false},
      {description: 'Cérebro humano: raciocínio com infinitas possibilidades(ele pode criar mais de duas opções); Computador: raciocínio limitado entre SIM e NÃO.', isRight: true},
    ]
},
{
    title: 'Assinale a alternativa mais viável para se realizar o descarte de lixo eletrônico:',
    description:'Desenvolvedores de Sistemas utilizam frequentemente PCs para realizar seu trabalho. Porém a vida de seu hardware não é tão longa e o descarte incorreto pode acarretar em sérios impactos ambientais',
    answers: [
      {description: 'Leve ao ponto de coleta de lixo eletrônico mais próximo de sua residência', isRight: true},
      {description: 'Separe o lixo eletrônico em uma sacola de lixo para, então, ser devidamente tratada pelos lixeiros', isRight: false},
      {description: 'Desmonte-o e misture-o com o lixo comum', isRight: false},
      {description: 'Descarte o hardware em um terreno baldio e deixe a natureza fazer sua decomposição', isRight: false},
    ]
},
{
    title: 'Quais desses possíveis dados um satélite com a função de monitorar crises ambientais pode utilizar?',
    description:'Pode-se afirmar que todos os satélites são conectados com algum tipo de sistema, que por sua vez é vinculado a um Banco de Dados',
    answers: [
      {description: 'Imagens detalhadamente captadas de vários locais do mundo, visando na utilização do GPS', isRight: false},
      {description: 'Ondas eletromagnéticas vindas das torres de sua emissora de TV', isRight: false},
      {description: 'Imagens quadro a quadro de alta resolução de uma região de hotspot', isRight: true},
      {description: 'O calor do Sol e sua luz solar', isRight: false},
    ]
},
{
    title: 'Mesmo sendo ciências muito distintas entre si, Desenvolvimento de Sistemas e a matéria de Biológicas possuem muitas conexões. Aponte uma conexão.',
    description:'',
    answers: [
      {description: 'Máquinas a vapor e a saúde do trabalhador', isRight: false},
      {description: 'O trator e a agricultura', isRight: false},
      {description: 'O comércio de hardwares e o setor primário (extrativista)', isRight: false},
      {description: 'Sistemas de Planejamento Dosimétrico e radioterapia', isRight: true},
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
      title: 'Qual sistema do nosso corpo humano pode ser comparado às partes do computador: HD e Memória RAM?',
      description:' O computador é como um corpo humano artificial <br> HD: Armazenamento das informações. <br> Ram: Usa as informações para ajir',
      answers: [
        {description: 'Sistema Nervoso', isRight: true},
        {description: 'Sistema Cardiovascular', isRight: false},
        {description: 'Sistema Endócrino', isRight: false},
        {description: 'Sistema Digestivo', isRight: false},
      ]
  },
  {
      title: 'Qual a principal diferença entre o raciocínio de nosso cérebro em comparação com o de um computador e outros hardwares?',
      description:'Hardware: é parte que é palpável, concreto',
      answers: [
        {description: 'Cérebro humano: raciocínio limitado apenas entre SIM e NÃO. Computador: infinitas possibilidades de escolhas.', isRight: false},
        {description: 'O raciocínio dos dois são os mesmos.', isRight: false},
        {description: 'Não há como compará-los', isRight: false},
        {description: 'Cérebro humano: raciocínio com infinitas possibilidades(ele pode criar mais de duas opções); Computador: raciocínio limitado entre SIM e NÃO.', isRight: true},
      ]
  },
  {
      title: 'Assinale a alternativa mais viável para se realizar o descarte de lixo eletrônico:',
      description:'Desenvolvedores de Sistemas utilizam frequentemente PCs para realizar seu trabalho. Porém a vida de seu hardware não é tão longa e o descarte incorreto pode acarretar em sérios impactos ambientais',
      answers: [
        {description: 'Leve ao ponto de coleta de lixo eletrônico mais próximo de sua residência', isRight: true},
        {description: 'Separe o lixo eletrônico em uma sacola de lixo para, então, ser devidamente tratada pelos lixeiros', isRight: false},
        {description: 'Desmonte-o e misture-o com o lixo comum', isRight: false},
        {description: 'Descarte o hardware em um terreno baldio e deixe a natureza fazer sua decomposição', isRight: false},
      ]
  },
  {
      title: 'Quais desses possíveis dados um satélite com a função de monitorar crises ambientais pode utilizar?',
      description:'Pode-se afirmar que todos os satélites são conectados com algum tipo de sistema, que por sua vez é vinculado a um Banco de Dados',
      answers: [
        {description: 'Imagens detalhadamente captadas de vários locais do mundo, visando na utilização do GPS', isRight: false},
        {description: 'Ondas eletromagnéticas vindas das torres de sua emissora de TV', isRight: false},
        {description: 'Imagens quadro a quadro de alta resolução de uma região de hotspot', isRight: true},
        {description: 'O calor do Sol e sua luz solar', isRight: false},
      ]
  },
  {
      title: 'Mesmo sendo ciências muito distintas entre si, Desenvolvimento de Sistemas e a matéria de Biológicas possuem muitas conexões. Aponte uma conexão.',
      description:'',
      answers: [
        {description: 'Máquinas a vapor e a saúde do trabalhador', isRight: false},
        {description: 'O trator e a agricultura', isRight: false},
        {description: 'O comércio de hardwares e o setor primário (extrativista)', isRight: false},
        {description: 'Sistemas de Planejamento Dosimétrico e radioterapia', isRight: true},
      ]
  }
     ];
   this.questions = backup;
   this.endpoint = 0;
   this.questionCount = 0;
   this.endpoint = this.points;
   this.points=0;
   this.router.navigate(['end6']);
 }

 }
}
