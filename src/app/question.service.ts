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
      title: 'Como hardware e software se relacionam?',
      description: '',
      answers: [
        { description: 'Eles não se relacionam.', isRight: false },
        { description: 'O hardware destina-se a executar a tarefa no nível da máquina,enquanto o software fornece instruções para o hardware.', isRight: true },
        { description: 'O software destina-se a executar a tarefa no nível da máquina, enquanto o hardware fornece instruções para o software.', isRight: false },
        { description: 'Todas as alternativas estão corretas.', isRight: false },
      ]
    },
    {
      title: 'Que tipo (s) de administração tem em DS?',
      description: '',
      answers: [
        { description: 'Administração de Banco de Dados, Scrum Master e Administração de redes', isRight: true },
        { description: 'Administração de Banco de Dados e Administração de redes', isRight: false },
        { description: 'Apenas administração de redes', isRight: false },
        { description: 'nao tem', isRight: false },
      ]
    },
    {
      title: 'Qual dos sites abaixos pode ser usados para organizar documentos juridicos utilizando um banco de dados?',
      description: 'organizacao, digitalizacao entre outros',
      answers: [
        { description: 'W3K DRIVING DIGITAL TRANSFORMATION', isRight: true },
        { description: 'WIKIPÉDIA', isRight: false },
        { description: 'YAPOLI', isRight: false },
        { description: 'AMAZON MANAGEMENT', isRight: false },
      ]
    },
    {
      title: 'Que materia de Ds tem um grande relacao com Dg?',
      description: '',
      answers: [
        { description: 'Programacao em moblie', isRight: false },
        { description: 'Informatica', isRight: false },
        { description: 'Desenvolvimento de Sistemas', isRight: false },
        { description: 'Design Digital', isRight: true },
      ]
    },
    {
      title: 'Assinale a alternativa mais viável para se realizar o descarte de lixo eletrônico:',
      description: 'DS utilizam frequentemente PCs para realizar seu trabalho. Porém a vida de seu hardware não é tão longa e o descarte incorreto pode acarretar em sérios impactos ambientais',
      answers: [
        { description: 'Leve ao ponto de coleta de lixo eletrônico mais próximo de sua residência', isRight: true },
        { description: 'Separe o lixo eletrônico em uma sacola de lixo para, então, ser devidamente tratada pelos lixeiros', isRight: false },
        { description: 'Desmonte-o e misture-o com o lixo comum', isRight: false },
        { description: 'Descarte o hardware em um terreno baldio e deixe a natureza fazer sua decomposição', isRight: false },
      ]
    },
  ];
  constructor(private router: Router) {
    this.questions.sort((a, b) => 0.5 - Math.random());
  }

  nextQuestion(): Question {
    if (this.questionCount < 5) {
      const randomIndex: number = Math.floor(Math.random() * this.questions.length);
      this.questionCount++;
      return this.questions.splice(randomIndex, 1)[0];
    } else {
      this.questions = [];
      const backup = [
        {
          title: 'Como hardware e software se relacionam?',
          description: '',
          answers: [
            { description: 'Eles não se relacionam.', isRight: false },
            { description: 'O hardware destina-se a executar a tarefa no nível da máquina,enquanto o software fornece instruções para o hardware.', isRight: true },
            { description: 'O software destina-se a executar a tarefa no nível da máquina, enquanto o hardware fornece instruções para o software.', isRight: false },
            { description: 'Todas as alternativas estão corretas.', isRight: false },
          ]
        },
        {
          title: 'Que tipo (s) de administração tem em DS?',
          description: '',
          answers: [
            { description: 'Administração de Banco de Dados, Scrum Master e Administração de redes', isRight: true },
            { description: 'Administração de Banco de Dados e Administração de redes', isRight: false },
            { description: 'Apenas administração de redes', isRight: false },
            { description: 'nao tem', isRight: false },
          ]
        },
        {
          title: 'Qual dos sites abaixos pode ser usados para organizar documentos juridicos utilizando um banco de dados?',
          description: 'organizacao, digitalizacao entre outros',
          answers: [
            { description: 'W3K DRIVING DIGITAL TRANSFORMATION', isRight: true },
            { description: 'WIKIPÉDIA', isRight: false },
            { description: 'YAPOLI', isRight: false },
            { description: 'AMAZON MANAGEMENT', isRight: false },
          ]
        },
        {
          title: 'Que materia de Ds tem um grande relacao com Dg?',
          description: '',
          answers: [
            { description: 'Programacao em moblie', isRight: false },
            { description: 'Informatica', isRight: false },
            { description: 'Desenvolvimento de Sistemas', isRight: false },
            { description: 'Design Digital', isRight: true },
          ]
        },
        {
          title: 'Assinale a alternativa mais viável para se realizar o descarte de lixo eletrônico:',
          description: 'DS utilizam frequentemente PCs para realizar seu trabalho. Porém a vida de seu hardware não é tão longa e o descarte incorreto pode acarretar em sérios impactos ambientais',
          answers: [
            { description: 'Leve ao ponto de coleta de lixo eletrônico mais próximo de sua residência', isRight: true },
            { description: 'Separe o lixo eletrônico em uma sacola de lixo para, então, ser devidamente tratada pelos lixeiros', isRight: false },
            { description: 'Desmonte-o e misture-o com o lixo comum', isRight: false },
            { description: 'Descarte o hardware em um terreno baldio e deixe a natureza fazer sua decomposição', isRight: false },
          ]
        },
      ];
      this.questions = backup;
      this.endpoint = 0;
      this.questionCount = 0;
      this.endpoint = this.points;
      this.points = 0;
      this.router.navigate(['end']);
    }
  }
}
