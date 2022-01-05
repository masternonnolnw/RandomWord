import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Res,
} from '@nestjs/common';
import { WordService } from './word.service';

@Controller('randomword')
export class RandomWordController {
  constructor(private readonly wordService: WordService) {}
  //Math.floor(Math.random() * (max - min + 1) ) + min;
  @Get()
  async getRandomWord() {
    return await this.wordService.getRandomWord();
  }
}
