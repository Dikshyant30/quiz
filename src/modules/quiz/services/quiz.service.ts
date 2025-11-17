import { Injectable, NotFoundException } from '@nestjs/common';
import { QuizRepository } from '../repositories/quiz.repository';
import { CreateQuizDto } from '../dto/createQuiz.dto';

@Injectable()
export class QuizService {
  constructor(private quizRepo: QuizRepository){}

async getQuiById(id: number) {
  const quiz = await this.quizRepo.findOne({
    where: { id },
    relations: ['questions'],
  });

  if (!quiz) {
    throw new NotFoundException(`Quiz with ID ${id} not found`);
  }

  return quiz;
}


  async ceateNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepo.save(quiz);
  }
}
