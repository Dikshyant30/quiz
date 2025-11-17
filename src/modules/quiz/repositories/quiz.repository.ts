import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuizRepository extends Repository<Quiz> {
   constructor(private readonly dataSource: DataSource) {
    super(Quiz, dataSource.createEntityManager());
  }
}
