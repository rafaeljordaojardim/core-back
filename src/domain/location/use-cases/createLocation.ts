import { Location } from '../../../entities/location'

export interface ICreateLocation {
  create: (name: string, sectorId: number) => Promise<Location>
}
