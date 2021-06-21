import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript'
import { ProfileDb, ActionProfileDb } from '.'

@Table({ tableName: 'actions' })
export class ActionDb extends Model {
  @Column
  name: string

  @Column
  actionNumber: number

  @BelongsToMany(() => ProfileDb, () => ActionProfileDb)
  profiles: ProfileDb[]
}
