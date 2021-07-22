import { ICreateLocationRepo } from '../../data/interfaces/createLocationRepo'
import { LocationDb } from '../../db/models'
import { Location } from '../../entities/location'
import { LoggerThrow } from '../../utils/loggerThrow'

export class LocationPostgresRepo implements ICreateLocationRepo {
  public async create (name: string, sectorId: number): Promise<Location> {
    const locationCreated = await LocationDb.create({ name, sectorId })
    if (locationCreated == null) {
      LoggerThrow.error(`Could not create the location ${name} with sectorId ${sectorId}`)
    }
    return Location.convertFromDb(locationCreated)
  }
}
