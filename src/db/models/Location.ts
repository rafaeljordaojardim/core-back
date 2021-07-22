import { Table, Column, Model, ForeignKey } from 'sequelize-typescript'
import { SectorDb } from './Sector'

@Table({ tableName: 'locations' })
export class LocationDb extends Model {
  @Column
  name: string

  @ForeignKey(() => SectorDb)
  @Column({ field: 'sector_id' })
  sectorId: number

  @Column({ field: 'created_at' })
  createdAt: Date

  @Column({ field: 'updated_at' })
  updatedAt: Date
}
