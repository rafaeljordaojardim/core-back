import { Table, Column, Model, ForeignKey } from 'sequelize-typescript'
import { SectorDb } from './Sector'

@Table({ tableName: 'locations' })
export class LocationDb extends Model {
  @Column
  name: string

  @ForeignKey(() => SectorDb)
  @Column
  sectorId: number
}
