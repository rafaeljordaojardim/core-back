import { Sector } from '../../entities/sector'

export interface IGetSectorByIdRepo {
  getById: (id: number) => Promise<Sector | undefined>
}
