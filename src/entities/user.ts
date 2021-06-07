import { UserDb } from '../db/models'

export class User {
  public id?: number
  public firstName: string
  public lastName: string
  public email: string
  public status: boolean
  public profileId?: number
  public sectorId?: number
  public bossId?: number

  public static fromDbModel (userDb: UserDb): User {
    const user = new User()
    user.id = userDb.id
    user.firstName = userDb.firstName
    user.lastName = userDb.lastName
    user.email = userDb.email
    user.status = userDb.status
    user.profileId = userDb.profileId
    user.sectorId = userDb.sectorId
    user.bossId = userDb.bossId

    return user
  }
}
