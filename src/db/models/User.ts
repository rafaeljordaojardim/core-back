import { Table, Column, Model, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript'
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
  @Column({ field: 'boss_id' })
  bossId: number

  @ForeignKey(() => ProfileDb)
  @Column({ field: 'profile_id' })
  profileId: number

  @ForeignKey(() => SectorDb)
  @Column({ field: 'sector_id' })
  sectorId: number

  @HasOne(() => ProfileDb, 'id')
  profile: ProfileDb

  @HasOne(() => SectorDb, 'id')
  sector: SectorDb

  @BelongsTo(() => UserDb, 'bossId')
  boss: UserDb
}
