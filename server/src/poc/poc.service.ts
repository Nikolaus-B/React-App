import { Injectable } from '@nestjs/common';
import { CreatePocDto } from './dto/create-poc.dto';
import { UpdatePocDto } from './dto/update-poc.dto';

@Injectable()
export class PocService {
  create(createPocDto: CreatePocDto) {
    return 'This action adds a new poc';
  }

  findAll() {
    return `This action returns all poc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} poc`;
  }

  update(id: number, updatePocDto: UpdatePocDto) {
    return `This action updates a #${id} poc`;
  }

  remove(id: number) {
    return `This action removes a #${id} poc`;
  }
}
