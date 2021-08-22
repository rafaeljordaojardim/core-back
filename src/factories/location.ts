import { IUpdateLocationRepo } from '../data/interfaces/updateLocationRepo'
import { DBCreateLocation } from '../data/location/dbCreateLocation'
import { DBUpdateLocation } from '../data/location/dbUpdateLocation'
import { LocationPostgresRepo } from '../infra/location/locationPostgresRepo'
import { SectorPostgresRepo } from '../infra/sector/sectorPostgresRepo'
import { CreateLocationController } from '../presentation/controllers/location/createLocation'
import { UpdateLocationController } from '../presentation/controllers/location/updateLocation'
import { IController } from '../presentation/interfaces/controller'

export const makeCreateLocation = (): IController => {
  const createLocationRepo = new LocationPostgresRepo()
  const getSectorByIdRepo = new SectorPostgresRepo()
  const dbCreateLocation = new DBCreateLocation(createLocationRepo, getSectorByIdRepo)
  return new CreateLocationController(dbCreateLocation)
}

export const makeUpdateLocation = (): IController => {
  const updateLocationRepo: IUpdateLocationRepo = new LocationPostgresRepo()
  const dbUpdateLocation = new DBUpdateLocation(updateLocationRepo)
  return new UpdateLocationController(dbUpdateLocation)
}
