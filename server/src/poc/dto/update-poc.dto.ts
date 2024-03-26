import { PartialType } from '@nestjs/mapped-types';
import { CreatePocDto } from './create-poc.dto';

export class UpdatePocDto extends PartialType(CreatePocDto) {}
