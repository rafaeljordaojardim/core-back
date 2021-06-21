import { Table, Column, Model, ForeignKey } from 'sequelize-typescript'
import { ActionDb, ProfileDb } from './'

@Table({ tableName: 'action_profile' })
export class ActionProfileDb extends Model {
  @ForeignKey(() => ActionDb)
  @Column
  actionId: number

  @ForeignKey(() => ProfileDb)
  @Column
  profileId: number
}
