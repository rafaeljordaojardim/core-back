import { LocationDb } from '../db/models'

export class Location {
  public id?: number
  public name: string
  public sectorId: number
  public sectorName?: string

  public static convertFromDb (locationDb: LocationDb): Location {
    const location = new Location()
    location.name = locationDb.name
    location.id = locationDb.id
    return location
  }
}
