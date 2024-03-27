import { BaseEntity } from 'src/database/base.entity';
import { Column, Entity, Index } from 'typeorm';

@Index('task_pkey', ['id'], { unique: true })
@Entity('task', { schema: 'public' })
export class Task extends BaseEntity {
  @Column({
    type: 'text',
    name: 'title',
  })
  title: string;

  @Column({
    type: 'text',
    name: 'description',
    nullable: true,
  })
  description: string | null;

  @Column({
    type: 'timestamp',
    name: 'date',
  })
  date: Date;

  @Column({
    type: 'text',
    name: 'priority',
  })
  priority: string;

  @Column({
    type: 'text',
    name: 'status',
  })
  status: string;
}
