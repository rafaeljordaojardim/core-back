import { Sector } from '../../entities/sector'

export interface IGetSectorByNameRepo {
  getByName: (name: string) => Promise<Sector | undefined>
}
