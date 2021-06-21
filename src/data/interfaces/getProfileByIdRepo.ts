import { Profile } from '../../entities/profile'

export interface IGetProfileByIdRepo {
  get: (id: number) => Promise<Profile | undefined>
}
