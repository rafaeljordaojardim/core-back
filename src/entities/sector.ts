import { SectorDb } from '../db/models'

export class Sector {
  public id?: number
  public name: string

  public static convertFromDb (sectorDb: SectorDb): Sector {
    const sector = new Sector()
    sector.id = sectorDb.id
    sector.name = sectorDb.name
    return sector
  }
}
