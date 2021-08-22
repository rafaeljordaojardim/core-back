import { Location } from '../../../entities/location'

export interface IGetLocation {
  get: (id?: number) => Promise<Location | Location[]>
}
