import { Table, Column, Model, ForeignKey, HasOne } from 'sequelize-typescript'
import { ProfileDb } from './Profile'
import { SectorDb } from './Sector'

@Table({ tableName: 'users' })
export class UserDb extends Model {
  @Column
  firstName: string

  @Column
  lastName: string

  @Column
  email: string

  @Column
  password: string

  @Column
  status: boolean

  @ForeignKey(() => UserDb)
  @Column
  bossId: number

  @ForeignKey(() => ProfileDb)
  @Column
  profileId: number

  @ForeignKey(() => SectorDb)
  @Column
  sectorId: number

  @HasOne(() => ProfileDb, 'id')
  profile: ProfileDb

  @HasOne(() => SectorDb, 'id')
  sector: SectorDb
}
