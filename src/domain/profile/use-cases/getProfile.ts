import { Profile } from '../../../entities/profile'

export interface IGetProfile {
  get: () => Promise<Profile[]>
}
