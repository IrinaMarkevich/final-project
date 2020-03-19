import { Entity, Column, PrimaryGeneratedColumn, OneToOne, RelationId } from 'typeorm'
import { User } from 'src/user/user.entity';
// import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class Cart {

//   @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

//   @ApiProperty()
  @OneToOne(type => User)
  @Column({ type: 'character varying' })
  user: User;

// @ApiProperty()
  @Column({ type: 'character varying' })
  @RelationId((cart: Cart) => cart.user)
  userId: string;

}
