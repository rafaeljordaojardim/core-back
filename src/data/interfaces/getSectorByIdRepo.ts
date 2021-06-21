import { Sector } from '../../entities/sector'

export interface IGetSectorByIdRepo {
  get: (id: number) => Promise<Sector | undefined>
}
