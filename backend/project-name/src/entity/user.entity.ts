import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Products from './product.entity';

@Entity('users')
class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  phone_number: string;

  @OneToMany(() => Products, (product) => product.user)
  product: Products[];
}

export default Users;
