import { Location } from '../../entities/location'

export interface ICreateLocationRepo {
  create: (name: string, sectorId: number) => Promise<Location>
}
