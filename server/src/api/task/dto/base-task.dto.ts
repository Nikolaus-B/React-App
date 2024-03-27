import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsString } from 'class-validator';
import { TaskPriority } from '../../../models/task/task.enum';

export class BaseTaskDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsString()
  description: string;

  @ApiProperty()
  @IsDateString()
  date: Date;

  @ApiProperty()
  @IsString()
  @IsEnum(TaskPriority)
  priority: string;

  @ApiProperty()
  @IsString()
  status: string;
}
