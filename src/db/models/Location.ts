import { Table, Column, Model, ForeignKey } from 'sequelize-typescript'
import { Sector } from './Sector'

@Table({ tableName: 'locations' })
export class Location extends Model {
  @Column
  name: string

  @ForeignKey(() => Sector)
  @Column
  sectorId: number
}
