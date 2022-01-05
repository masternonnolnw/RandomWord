import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RandomWordController } from './randomWord.controller ';
import { WordController } from './word.controller';
import { Word } from './word.entity';
import { WordService } from './word.service';
@Module({
  imports: [TypeOrmModule.forFeature([Word])],
  controllers: [WordController, RandomWordController],
  providers: [WordService],
})
export class WordModule {}
