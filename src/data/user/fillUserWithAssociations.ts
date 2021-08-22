import { IFillUserWithAssociations } from '../../domain/user/use-cases/fillUserWithAssociations'
import { User } from '../../entities/user'
import { IGetProfileByIdRepo } from '../interfaces/getProfileByIdRepo'
import { IGetSectorByIdRepo } from '../interfaces/getSectorByIdRepo'
import { IGetUserByIdRepo } from '../interfaces/getUserByIdRepo'

export class FillUserWithAssociations implements IFillUserWithAssociations {
  constructor (
    private readonly getSectorById: IGetSectorByIdRepo,
    private readonly getProfileById: IGetProfileByIdRepo,
    private readonly getUserById: IGetUserByIdRepo
  ) {}

  public async fill (user: User): Promise<User> {
    if (user.sectorId != null) {
      const sector = await this.getSectorById.getById(user.sectorId)
      user.sectorName = sector?.name
    }
    if (user.profileId != null) {
      const profile = await this.getProfileById.get(user.profileId)
      user.profileName = profile?.name
    }
    if (user.bossId != null) {
      const boss = await this.getUserById.getById(user.bossId)
      user.bossName = boss?.name
    }
    return user
  }
}
