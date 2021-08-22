import { Sector } from '../../entities/sector'

export interface IGetSectorsRepo {
  get: () => Promise<Sector[]>
}
