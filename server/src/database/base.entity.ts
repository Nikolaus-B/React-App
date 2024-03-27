import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id', type: 'int8' })
  id: string;
}
