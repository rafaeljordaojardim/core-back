/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IGetProfile } from '../../domain/profile/use-cases/getProfile'
import { Profile } from '../../entities/profile'
import { IGetProfilesRepo } from '../interfaces/getProfilesRepo'

export class DBListProfiles implements IGetProfile {
  constructor (
    private readonly getProfiles: IGetProfilesRepo
  ) {}

  public async get (): Promise<Profile[]> {
    const result = await this.getProfiles.get()
    return result
  }
}
