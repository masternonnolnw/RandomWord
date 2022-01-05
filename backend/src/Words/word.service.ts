import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import console from 'console';
import { Repository } from 'typeorm';
import { Word } from './word.entity';

@Injectable()
export class WordService {
  constructor(@InjectRepository(Word) private WordRepo: Repository<Word>) {}
  async getAllWords() {
    return await this.WordRepo.find({});
  }
  async addWord(word: string, category: string, level: number) {
    const checkId = await this.WordRepo.findOne({ word, category });
    if (checkId != null) {
      return 'word alredy exit.';
    }
    const newWord = await new Word();
    newWord.word = word;
    newWord.category = category;
    newWord.level = level;
    newWord.save();
    return newWord;
  }
  async updateWord(id: number, word: string, category: string, level: number) {
    const getWord = await this.WordRepo.findByIds([id]);
    const selectWord = getWord[0];
    if (word) {
      selectWord.word = word;
    }
    if (category) {
      selectWord.category = category;
    }
    if (level) {
      selectWord.level = level;
    }
    selectWord.save();
    return selectWord;
  }
  async deleteWord(id: number) {
    const getWord = await this.WordRepo.findByIds([id]);
    const selectWord = getWord[0];
    return await selectWord.remove();
  }

  async getRandomWord() {
    var allWords = await this.getAllWords();
    var max = allWords.length - 1;
    var min = 0;
    var randomInx = Math.floor(Math.random() * (max - min + 1)) + min;
    return allWords[randomInx];
  }
}
