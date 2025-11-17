import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizRepository } from './repositories/quiz.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './controllers/question.controller';
import { QuizService } from './services/quiz.service';
import { QuestionRepository } from './repositories/question.repository';
import { QuestionService } from './services/question.service';

@Module({
  controllers: [QuizController,QuestionController],
  // imports: [TypeOrmModule.forFeature([QuizRepository])],
  providers: [QuizService,QuizRepository,QuestionService,QuestionRepository],
})
export class QuizModule {}
