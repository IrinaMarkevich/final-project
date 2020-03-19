import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, RelationId } from 'typeorm'
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

  @ManyToOne(type => Cart, cart => cart.products)
  cart: Cart;

// //   @ApiProperty()
//   @Column({ type: 'character varying' })
//   @RelationId((product: Product) => product.user)
//   userId: string;
}
