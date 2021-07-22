import { Sector } from '../../entities/sector'

export interface ICreateSectorRepo {
  create: (name: string) => Promise<Sector>
}
