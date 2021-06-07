import { Table, Column, Model, BelongsToMany, BelongsTo } from 'sequelize-typescript'
import { UserDb } from '.'
import { Action } from './Action'
import { ActionProfile } from './ActionProfile'

@Table({ tableName: 'profiles' })
export class Profile extends Model {
  @BelongsToMany(() => Action, () => ActionProfile)
  actions: Action[]

  @Column
  name: string

  @BelongsTo(() => UserDb, 'profileId')
  user: UserDb
}
