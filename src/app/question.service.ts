import { CursosService } from './cursos.service';
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
  private questionsEtim: Question[] = this.cursosService.questionsEtim;
  private questionsAdm: Question[] = this.cursosService.questionsAdm;
  private questionsSj: Question[] = this.cursosService.questionsSj;
  private questionsDg: Question[] = this.cursosService.questionsDg;
  private questionsEv: Question[] = this.cursosService.questionsEv;
  private questionsHum: Question[] = this.cursosService.questionsHum;
  private questionsBio: Question[] = this.cursosService.questionsBio;
  private questionsInfo: Question[] = this.cursosService.questionsInfo;
  private questionsDi: Question[] = this.cursosService.questionsDi;
  private questionsSec: Question[] = this.cursosService.questionsSec;
  constructor(private router: Router, private cursosService: CursosService) {
    this.questionsEtim.sort((a, b) => 0.5 - Math.random());
    this.questionsAdm.sort((a, b) => 0.5 - Math.random());
    this.questionsSj.sort((a, b) => 0.5 - Math.random());
    this.questionsDg.sort((a, b) => 0.5 - Math.random());
    this.questionsEv.sort((a, b) => 0.5 - Math.random());
    this.questionsHum.sort((a, b) => 0.5 - Math.random());
    this.questionsBio.sort((a, b) => 0.5 - Math.random());
    this.questionsInfo.sort((a, b) => 0.5 - Math.random());
    this.questionsDi.sort((a, b) => 0.5 - Math.random());
    this.questionsSec.sort((a, b) => 0.5 - Math.random());
  }

  nextQuestionEtim(): Question {
    if (this.questionCount < 5) {
      const randomIndex: number = Math.floor(Math.random() * this.questionsEtim.length);
      this.questionCount++;
      return this.questionsEtim.splice(randomIndex, 1)[0];
    } else {
      this.questionsEtim = [];
      const backup: Question[] = this.cursosService.questionsEtim;
      this.questionsEtim = backup;
      this.endpoint = 0;
      this.questionCount = 0;
      this.endpoint = this.points;
      this.points = 0;
      this.router.navigate(['end']);
    }

}
  nextQuestionAdm(): Question {
  if (this.questionCount < 5) {
    const randomIndex: number = Math.floor(Math.random() * this.questionsAdm.length);
    this.questionCount++;
    return this.questionsAdm.splice(randomIndex, 1)[0];
  } else {
    this.questionsAdm = [];
    const backup: Question[] = this.cursosService.questionsAdm;
    this.questionsAdm = backup;
    this.endpoint = 0;
    this.questionCount = 0;
    this.endpoint = this.points;
    this.points = 0;
    this.router.navigate(['end']);
  }

}
  nextQuestionSj(): Question {
  if (this.questionCount < 5) {
    const randomIndex: number = Math.floor(Math.random() * this.questionsSj.length);
    this.questionCount++;
    return this.questionsSj.splice(randomIndex, 1)[0];
  } else {
    this.questionsSj = [];
    const backup: Question[] = this.cursosService.questionsSj;
    this.questionsSj = backup;
    this.endpoint = 0;
    this.questionCount = 0;
    this.endpoint = this.points;
    this.points = 0;
    this.router.navigate(['end']);
  }

}
  nextQuestionDg(): Question {
  if (this.questionCount < 5) {
    const randomIndex: number = Math.floor(Math.random() * this.questionsDg.length);
    this.questionCount++;
    return this.questionsDg.splice(randomIndex, 1)[0];
  } else {
    this.questionsDg = [];
    const backup: Question[] = this.cursosService.questionsDg;
    this.questionsDg = backup;
    this.endpoint = 0;
    this.questionCount = 0;
    this.endpoint = this.points;
    this.points = 0;
    this.router.navigate(['end']);
  }

}
  nextQuestionEv(): Question {
  if (this.questionCount < 5) {
    const randomIndex: number = Math.floor(Math.random() * this.questionsEv.length);
    this.questionCount++;
    return this.questionsEv.splice(randomIndex, 1)[0];
  } else {
    this.questionsEv = [];
    const backup: Question[] = this.cursosService.questionsEv;
    this.questionsEv = backup;
    this.endpoint = 0;
    this.questionCount = 0;
    this.endpoint = this.points;
    this.points = 0;
    this.router.navigate(['end']);
  }

}
  nextQuestionHum(): Question {
  if (this.questionCount < 5) {
    const randomIndex: number = Math.floor(Math.random() * this.questionsHum.length);
    this.questionCount++;
    return this.questionsHum.splice(randomIndex, 1)[0];
  } else {
    this.questionsHum = [];
    const backup: Question[] = this.cursosService.questionsHum;
    this.questionsHum = backup;
    this.endpoint = 0;
    this.questionCount = 0;
    this.endpoint = this.points;
    this.points = 0;
    this.router.navigate(['end']);
  }

}
  nextQuestionBio(): Question {
  if (this.questionCount < 5) {
    const randomIndex: number = Math.floor(Math.random() * this.questionsBio.length);
    this.questionCount++;
    return this.questionsBio.splice(randomIndex, 1)[0];
  } else {
    this.questionsBio = [];
    const backup: Question[] = this.cursosService.questionsBio;
    this.questionsBio = backup;
    this.endpoint = 0;
    this.questionCount = 0;
    this.endpoint = this.points;
    this.points = 0;
    this.router.navigate(['end']);
  }

}
  nextQuestionInfo(): Question {
  if (this.questionCount < 5) {
    const randomIndex: number = Math.floor(Math.random() * this.questionsInfo.length);
    this.questionCount++;
    return this.questionsInfo.splice(randomIndex, 1)[0];
  } else {
    this.questionsInfo = [];
    const backup: Question[] = this.cursosService.questionsInfo;
    this.questionsInfo = backup;
    this.endpoint = 0;
    this.questionCount = 0;
    this.endpoint = this.points;
    this.points = 0;
    this.router.navigate(['end']);
  }

}
  nextQuestionDi(): Question {
  if (this.questionCount < 5) {
    const randomIndex: number = Math.floor(Math.random() * this.questionsDi.length);
    this.questionCount++;
    return this.questionsDi.splice(randomIndex, 1)[0];
  } else {
    this.questionsDi = [];
    const backup: Question[] = this.cursosService.questionsDi;
    this.questionsDi = backup;
    this.endpoint = 0;
    this.questionCount = 0;
    this.endpoint = this.points;
    this.points = 0;
    this.router.navigate(['end']);
  }

}
  nextQuestionSec(): Question {
  if (this.questionCount < 5) {
    const randomIndex: number = Math.floor(Math.random() * this.questionsSec.length);
    this.questionCount++;
    return this.questionsSec.splice(randomIndex, 1)[0];
  } else {
    this.questionsSec = [];
    const backup: Question[] = this.cursosService.questionsSec;
    this.questionsSec = backup;
    this.endpoint = 0;
    this.questionCount = 0;
    this.endpoint = this.points;
    this.points = 0;
    this.router.navigate(['end']);
  }

}
}
