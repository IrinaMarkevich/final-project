import { Entity, Column, PrimaryGeneratedColumn, OneToOne, RelationId, ManyToOne } from 'typeorm'
import { User } from 'src/user/user.entity';
import { Product } from 'src/product/product.entity';
// import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class Cart {

//   @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

//   @ApiProperty()
  @OneToOne(type => User)
  // @Column({ type: 'character varying' })
  user: User;

// @ApiProperty()
  @Column({ type: 'character varying' })
  @RelationId((cart: Cart) => cart.user)
  userId: string;

  @ManyToOne(type => Product, product => product.carts)
  product: Product;

//   @ApiProperty()
  @Column({ type: 'number' })
  @RelationId((cart: Cart) => cart.product)
  productId: string;

}
