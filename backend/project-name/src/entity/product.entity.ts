/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Users from './user.entity';

@Entity('products')
class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Users, (user) => user.product)
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @Column()
  productNm: string;

  @Column()
  price: string;
}

export default Products;
