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

@Controller('word')
export class WordController {
  constructor(private readonly wordService: WordService) {}
  @Get()
  async getAllWords() {
    return await this.wordService.getAllWords();
  }

  @Post()
  async addWord(
    @Body('word') prodWord: string,
    @Body('category') prodCategory: string,
    @Body('level') prodLevel: number,
  ) {
    return await this.wordService.addWord(prodWord, prodCategory, prodLevel);
  }

  //   // @Get(':id')
  //   // async getWord(@Param('id') prodId: string) {
  //   //   const data = await this.wordsService.getSingleWord(prodId);
  //   //   return data;
  //   // }

  @Patch(':id')
  async updateWord(
    @Param('id') prodId: number,
    @Body('word') prodWord: string,
    @Body('category') prodCategory: string,
    @Body('level') prodLevel: number,
  ) {
    return await this.wordService.updateWord(
      prodId,
      prodWord,
      prodCategory,
      prodLevel,
    );
  }

  @Delete(':id')
  async deleteWord(@Param('id') prodId: number) {
    return await this.wordService.deleteWord(prodId);
  }
}
