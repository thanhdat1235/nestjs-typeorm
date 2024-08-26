import { Exclude, Expose } from 'class-transformer';
import { Order } from 'src/order/entities/order.entity';
import { Roles } from 'src/utility/common/user-roles.enum';
import {
  BeforeInsert,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
@Index(['email'], { unique: true })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @Expose()
  id: string;

  @Expose()
  @Column()
  name: string;

  @Expose()
  @Column()
  email: string;

  @Expose()
  @Column()
  phoneNumber: string;

  @Exclude()
  @Column()
  password: string;

  @Expose()
  @Column()
  address: string;

  @Column({
    type: 'simple-json',
  })
  roles: Roles[];

  @BeforeInsert()
  setDefaultRoles() {
    if (!this.roles || this.roles.length === 0) {
      this.roles = [Roles.USER];
    }
  }

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
