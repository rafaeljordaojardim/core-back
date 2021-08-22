import { Location } from '../../entities/location'

export interface IGetLocationRepo {
  get: (id?: number) => Promise<Location | Location[]>
}
