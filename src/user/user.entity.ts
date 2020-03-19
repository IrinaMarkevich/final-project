import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
// import { ApiProperty } from '@nestjs/swagger'

@Entity()
export class User {
//   @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

//   @ApiProperty()
  @Column({ type: 'character varying' })
  login: string;

//   @ApiProperty()
  @Column({ type: 'character varying' })
  password: string;
}
