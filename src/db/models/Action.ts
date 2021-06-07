import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript'
import { Profile, ActionProfile } from '.'

@Table({ tableName: 'actions' })
export class Action extends Model {
  @Column
  name: string

  @Column
  actionNumber: number

  @BelongsToMany(() => Profile, () => ActionProfile)
  profiles: Profile[]
}
