import { Table, Column, Model, HasMany } from 'sequelize-typescript'
import { UserDb } from '.'
import { LocationDb } from './Location'

@Table({ tableName: 'sectors' })
export class SectorDb extends Model {
  @Column
  name: string

  @HasMany(() => UserDb)
  users: UserDb[]

  @HasMany(() => LocationDb)
  locations: Location[]
}
