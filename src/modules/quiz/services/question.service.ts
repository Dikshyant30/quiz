import { Injectable } from '@nestjs/common';
import { QuestionRepository } from '../repositories/question.repository';
import { CreateQuestionDto } from '../dto/createQuestion.dto';
import { Question } from '../entities/question.entity';
import { Quiz } from '../entities/quiz.entity';


@Injectable()
export class QuestionService {
  constructor(private quesRepo: QuestionRepository){}

  async createQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<Question> {
    const newQues = await this.quesRepo.save({
      question:question.question
    });
    quiz.questions = [...quiz.questions,newQues];

    await quiz.save();
    return newQues;
  }
}
