import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuestionDto } from "../dto/createQuestion.dto";
import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service';
import { Question } from '../entities/question.entity';

@Controller('question')
export class QuestionController {
  constructor(private quesServ: QuestionService, private quizServ: QuizService){}
  @Post('')
  @UsePipes(ValidationPipe)
  async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
    const quiz = await this.quizServ.getQuiById(question.quizId)
    return await this.quesServ.createQuestion(question, quiz);
  }
}
