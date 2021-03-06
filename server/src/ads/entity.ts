import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'


@Entity()
export default class Ad extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text')
  title: string

  @Column('text')
  description: string

  @Column('text')
  picture: string

  @Column('text')
  price: string

  @Column('text')
  email: string

  @Column('text')
  phonenr: string
}