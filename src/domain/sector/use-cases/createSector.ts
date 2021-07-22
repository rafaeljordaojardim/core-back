import { Sector } from '../../../entities/sector'

export interface ICreateSector {
  create: (name: string) => Promise<Sector>
}
