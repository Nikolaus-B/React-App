import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PocService } from './poc.service';
import { CreatePocDto } from './dto/create-poc.dto';
import { UpdatePocDto } from './dto/update-poc.dto';

@Controller('poc')
export class PocController {
  constructor(private readonly pocService: PocService) {}

  @Post()
  create(@Body() createPocDto: CreatePocDto) {
    return this.pocService.create(createPocDto);
  }

  @Get()
  findAll() {
    return this.pocService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pocService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePocDto: UpdatePocDto) {
    return this.pocService.update(+id, updatePocDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pocService.remove(+id);
  }
}
