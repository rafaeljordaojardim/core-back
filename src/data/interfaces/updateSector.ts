import { Sector } from '../../entities/sector'

export interface IUpdateSectorRepo {
  update: (id: number, name: string) => Promise<Sector>
}
