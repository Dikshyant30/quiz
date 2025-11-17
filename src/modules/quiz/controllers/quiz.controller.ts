import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/createQuiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private service: QuizService) {}
  // @Get('/')
  // getAllQui() {
  //   return this.service.getAllQuiz();
  // }
  @Get('/:id')
  async getQuizById(@Param('id', ParseIntPipe) id: number){
    return await this.service.getQuiById(id);
  }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    return await this.service.ceateNewQuiz(quizData);
  }
}
