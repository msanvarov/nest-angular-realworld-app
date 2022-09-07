import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Tag Entity Class
 */
@Entity({ name: 'tags' })
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;
}
