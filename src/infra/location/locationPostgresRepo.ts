import { ICreateLocationRepo } from '../../data/interfaces/createLocationRepo'
import { IGetLocationRepo } from '../../data/interfaces/getLocationRepo'
import { IUpdateLocationRepo } from '../../data/interfaces/updateLocationRepo'
import { LocationDb } from '../../db/models'
import { IUpdateLocationParams } from '../../domain/location/use-cases'
import { Location } from '../../entities/location'
import { makeGetLocationQuery } from '../../utils/common'
import { LoggerThrow } from '../../utils/loggerThrow'

export class LocationPostgresRepo implements ICreateLocationRepo, IGetLocationRepo, IUpdateLocationRepo {
  public async update (id: number, body: IUpdateLocationParams): Promise<Location> {
    const [, [userUpdated]] = await LocationDb.update({ ...body }, {
      where: { id },
      returning: true
    })
    return Location.convertFromDb(userUpdated)
  }

  public async get (id?: number): Promise<Location | Location[]> {
    const query = makeGetLocationQuery(id)
    if (id != null) {
      const location = await LocationDb.sequelize?.query(query)
      if (location?.[0][0] != null) {
        return Location.convertFromDb(location[0][0])
      }
    } else {
      const locations = await LocationDb.sequelize?.query(query)
      if (locations != null) {
        return locations[0].map(Location.convertFromDb)
      }
    }
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return (id != null) ? {} as Location : [] as Location[]
  }

  public async create (name: string, sectorId: number): Promise<Location> {
    const locationCreated = await LocationDb.create({ name, sectorId })
    if (locationCreated == null) {
      LoggerThrow.error(`Could not create the location ${name} with sectorId ${sectorId}`)
    }
    return Location.convertFromDb(locationCreated)
  }
}
