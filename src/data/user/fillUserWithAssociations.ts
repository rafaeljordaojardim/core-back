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
      const sector = await this.getSectorById.get(user.sectorId)
      user.sector = sector
    }
    if (user.profileId != null) {
      const profile = await this.getProfileById.get(user.profileId)
      user.profile = profile
    }
    if (user.bossId != null) {
      const boss = await this.getUserById.getById(user.bossId)
      user.boss = boss != null ? User.convertToBoss(boss) : undefined
    }
    return user
  }
}
