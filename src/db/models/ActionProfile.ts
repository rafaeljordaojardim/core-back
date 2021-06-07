import { Table, Column, Model, ForeignKey } from 'sequelize-typescript'
import { Action, Profile } from './'

@Table({ tableName: 'action_profile' })
export class ActionProfile extends Model {
  @ForeignKey(() => Action)
  @Column
  actionId: number

  @ForeignKey(() => Profile)
  @Column
  profileId: number
}
