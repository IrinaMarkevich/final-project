import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, RelationId, OneToMany } from 'typeorm'
import { User } from '../user/user.entity'
import { Cart } from 'src/cart/cart.entity';
// import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class Product {
//   @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

//   @ApiProperty()
  @Column({ type: 'character varying' })
  title: string;

//   @ApiProperty()
  @Column({ type: 'character varying' })
  description: string;

  @ManyToOne(type => User, user => user.products)
  user: User;

//   @ApiProperty()
  @Column({ type: 'character varying' })
  @RelationId((product: Product) => product.user)
  userId: string;

  @OneToMany(type => Cart, cart => cart.user, { eager: true })
  carts: Cart[];
}
