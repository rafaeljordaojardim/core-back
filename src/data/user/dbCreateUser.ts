import { ICreateUser } from '../../domain/user/use-cases/createUser'
import { User } from '../../entities/user'
import { IUser } from '../../presentation/interfaces/user'
import { ICreateUserRepo } from '../interfaces/createUserRepo'
import { IGetProfileByIdRepo } from '../interfaces/getProfileByIdRepo'
import { IGetSectorByIdRepo } from '../interfaces/getSectorByIdRepo'

export class DBCreateUser implements ICreateUser {
  constructor (
    private readonly createUser: ICreateUserRepo,
    private readonly getSectorById: IGetSectorByIdRepo,
    private readonly getProfileById: IGetProfileByIdRepo
  ) {}

  public async create (user: IUser): Promise<User> {
    const userCreated = await this.createUser.create(user)
    if (userCreated.sectorId != null) {
      const sector = await this.getSectorById.get(userCreated.sectorId)
      userCreated.sector = sector
    }
    if (userCreated.profileId != null) {
      const profile = await this.getProfileById.get(userCreated.profileId)
      userCreated.profile = profile
    }
    return userCreated
  }
}
