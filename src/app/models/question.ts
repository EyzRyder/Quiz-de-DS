export interface Question {
  title: string;
  description: string;
  answers: QuestionAnswer[];
}

export interface QuestionAnswer {
  description: string;
  isRight: boolean;
}
