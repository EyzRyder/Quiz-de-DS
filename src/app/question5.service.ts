import { Injectable } from '@angular/core';
import { Question, QuestionAnswer } from './models/question';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Question5Service {
  questionCount: number = 0;
  points: number = 0;
  endpoint: number;
 private questions: Question[] = [
  {
      title: 'Assinale a escolha mais antiética a se fazer na internet.',
      description:'',
      answers: [
        {description: 'Não praticar o cyberbullying', isRight: false},
        {description: 'Contribuir com a disseminação de informações verdadeiras', isRight: false},
        {description: 'Fazer ações de proteção da fauna e flora nas redes sociais', isRight: false},
        {description: ' Praticar o Doxx (Vazamento de Dados)', isRight: true},
      ]
    },
  {
      title: 'Assinale a alternativa mais viável para se realizar o descarte de lixo eletrônico:',
      description:'DS utilizam frequentemente PCs para realizar seu trabalho. Porém a vida de seu hardware não é tão longa e o descarte incorreto pode acarretar em sérios impactos ambientais',
      answers: [
        {description: 'Leve ao ponto de coleta de lixo eletrônico mais próximo de sua residência', isRight: true},
        {description: 'Separe o lixo eletrônico em uma sacola de lixo para, então, ser devidamente tratada pelos lixeiros', isRight: false},
        {description: 'Desmonte-o e misture-o com o lixo comum', isRight: false},
        {description: 'Descarte o hardware em um terreno baldio e deixe a natureza fazer sua decomposição', isRight: false},
      ]
  },
 {
      title: 'Que tipo de rede utilizamos no nosso dia-a-dia feito com programacao',
      description:'',
      answers: [
        {description: 'Redes de Pesca', isRight: false},
        {description: 'Redes Sociais', isRight: true},
        {description: 'Redes Biblicos', isRight: false},
        {description: 'Redes de Descansar', isRight: false},
      ]
  },
 {
      title: 'Para um trabalhador da area de Banco de Dados tem uma regra basica de etica, qual essa regra?',
      description:'',
      answers: [
        {description: 'Ser frio de calculista', isRight: false},
        {description: 'Nao tem regra de etica', isRight: false},
        {description: 'Pode falar dos dados da empresa para quem perguntar', isRight: false},
        {description: 'Tem que manter os dados da empresa privados', isRight: true},
      ]
  },
 {
      title: 'É ético se apropriar de um Software Livre e distribuí-lo como sendo de sua autoria?',
      description:'Software Livre é e um softwera gratuito que qualquer pessoa pode usar',
      answers: [
        {description: 'Não, mesmo sendo livre o criador ainda tem os creditos de ter feito', isRight: true},
        {description: 'Sim, é gratuito', isRight: false},
        {description: 'Sim, se ta no meu pc é meu', isRight: false},
        {description: 'Não, não precisa dar creditos mas não pode tomar para si', isRight: false},
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
        title: 'Assinale a escolha mais antiética a se fazer na internet.',
        description:'',
        answers: [
          {description: 'Não praticar o cyberbullying', isRight: false},
          {description: 'Contribuir com a disseminação de informações verdadeiras', isRight: false},
          {description: 'Fazer ações de proteção da fauna e flora nas redes sociais', isRight: false},
          {description: ' Praticar o Doxx (Vazamento de Dados)', isRight: true},
        ]
      },
    {
        title: 'Assinale a alternativa mais viável para se realizar o descarte de lixo eletrônico:',
        description:'DS utilizam frequentemente PCs para realizar seu trabalho. Porém a vida de seu hardware não é tão longa e o descarte incorreto pode acarretar em sérios impactos ambientais',
        answers: [
          {description: 'Leve ao ponto de coleta de lixo eletrônico mais próximo de sua residência', isRight: true},
          {description: 'Separe o lixo eletrônico em uma sacola de lixo para, então, ser devidamente tratada pelos lixeiros', isRight: false},
          {description: 'Desmonte-o e misture-o com o lixo comum', isRight: false},
          {description: 'Descarte o hardware em um terreno baldio e deixe a natureza fazer sua decomposição', isRight: false},
        ]
    },
   {
        title: 'Que tipo de rede utilizamos no nosso dia-a-dia feito com programacao',
        description:'',
        answers: [
          {description: 'Redes de Pesca', isRight: false},
          {description: 'Redes Sociais', isRight: true},
          {description: 'Redes Biblicos', isRight: false},
          {description: 'Redes de Descansar', isRight: false},
        ]
    },
   {
        title: 'Para um trabalhador da area de Banco de Dados tem uma regra basica de etica, qual essa regra?',
        description:'',
        answers: [
          {description: 'Ser frio de calculista', isRight: false},
          {description: 'Nao tem regra de etica', isRight: false},
          {description: 'Pode falar dos dados da empresa para quem perguntar', isRight: false},
          {description: 'Tem que manter os dados da empresa privados', isRight: true},
        ]
    },
   {
        title: 'É ético se apropriar de um Software Livre e distribuí-lo como sendo de sua autoria?',
        description:'Software Livre é e um softwera gratuito que qualquer pessoa pode usar',
        answers: [
          {description: 'Não, mesmo sendo livre o criador ainda tem os creditos de ter feito', isRight: true},
          {description: 'Sim, é gratuito', isRight: false},
          {description: 'Sim, se ta no meu pc é meu', isRight: false},
          {description: 'Não, não precisa dar creditos mas não pode tomar para si', isRight: false},
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
