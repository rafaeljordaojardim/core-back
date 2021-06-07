import { Table, Column, Model, HasMany } from 'sequelize-typescript'
import { UserDb } from '.'
import { Location } from './Location'

@Table({ tableName: 'sectors' })
export class Sector extends Model {
  @Column
  name: string

  @HasMany(() => UserDb)
  users: UserDb[]

  @HasMany(() => Location)
  locations: Location[]
}
