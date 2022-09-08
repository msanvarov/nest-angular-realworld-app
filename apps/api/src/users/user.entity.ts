import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ArticleEntity } from '../article/article.entity';
import { CommentEntity } from '../article/comment.entity';
import { PasswordTransformer } from './password.transformer';
import { UserRoles } from './user-role.entity';

/**
 * User Entity Class
 */
@Entity({
  name: 'users',
})
export class UserEntity {
  /**
   * UUID column
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Username column
   */
  @Column({ unique: true })
  username: string;

  /**
   * Email column
   */
  @Column()
  email: string;

  /**
   * Bio column
   */
  @Column({ default: '' })
  bio: string;

  /**
   * Gravatar column (gravatar url)
   */
  @Column()
  image: string;

  /**
   * Column to represent a one to many relationship with the roles entity
   */
  @OneToMany(() => UserRoles, (role) => role.user)
  roles: UserRoles[];

  /**
   * Column that employs the PasswordTransformer to hash passwords before writing to database
   */
  @Column({
    name: 'password',
    length: 255,
    transformer: new PasswordTransformer(),
    select: false,
  })
  @Exclude()
  password: string;

  @OneToMany(() => ArticleEntity, (article) => article.author)
  articles: ArticleEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.author)
  comments: CommentEntity[];

  @ManyToMany(() => ArticleEntity)
  @JoinTable()
  favorites: ArticleEntity[];
}
