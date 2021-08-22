import { Sector } from '../../../entities/sector'

export interface IUpdateSector {
  update: (id: number, name: string) => Promise<Sector>
}
