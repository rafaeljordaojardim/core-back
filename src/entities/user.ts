import { UserDb } from '../db/models'
import { Profile } from './profile'
import { Sector } from './sector'

export class User {
  public id?: number
  public firstName: string
  public lastName: string
  public email: string
  public status: boolean
  public profileId?: number
  public sectorId?: number
  public bossId?: number
  public sector?: Sector
  public profile?: Profile

  public static fromDbModel (userDb: UserDb): User {
    const user = new User()
    user.id = userDb.id
    user.firstName = userDb.firstName
    user.lastName = userDb.lastName
    user.email = userDb.email
    user.status = userDb.status
    user.bossId = userDb.bossId
    user.sector = Sector.convertFromDb(userDb.sector)
    user.profile = Profile.convertFromDb(userDb.profile)
    return user
  }
}
