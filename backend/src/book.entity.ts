import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  author: string;

  @Column({ nullable: true })
  genre: string;

  @Column({ nullable: true })
  language: string;

  @Column({ nullable: true, type: 'text' })
  description: string;

  @Column({ type: 'float', nullable: false })
  price: number;

  @Column({ type: 'float', nullable: true, default: 0 })
  discount: number;

  @Column({ nullable: true })
  isbn: string;

  @Column({ nullable: true })
  coverImage: string;

  @Column({ type: 'boolean', default: true })
  inStock: boolean;
}
