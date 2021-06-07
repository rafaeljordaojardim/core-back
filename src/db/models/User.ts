import { Table, Column, Model, ForeignKey, HasOne } from 'sequelize-typescript'
import { Profile } from './Profile'
import { Sector } from './Sector'

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

  @ForeignKey(() => Profile)
  @Column
  profileId: number

  @ForeignKey(() => Sector)
  @Column
  sectorId: number

  @HasOne(() => Profile, 'profileId')
  profile: Profile

  @HasOne(() => Sector, 'sectorId')
  sector: Sector
}
