import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Product } from 'src/product/product.entity';
// import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class User {
//   @ApiProperty()
  @PrimaryGeneratedColumn("uuid")
  id: string;

//   @ApiProperty()
  @Column({ type: 'character varying' })
  login: string;

//   @ApiProperty()
  @Column({ type: 'character varying' })
  password: string;

  @OneToMany(type => Product, product => product.user, { eager: true })
    products: Product[];
}
