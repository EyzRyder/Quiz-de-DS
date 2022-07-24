export interface Quiz {
  title: string;
  curso: Question[];
}
export interface Question {
  title: string;
  description: string;
  answers: QuestionAnswer[];
}

export interface QuestionAnswer {
  description: string;
  isRight: boolean;
}
