import { Sector } from '../../../entities/sector'

export interface IGetSector {
  get: (query?: { id?: number, name?: string }) => Promise<Sector | Sector[] | undefined>
}
