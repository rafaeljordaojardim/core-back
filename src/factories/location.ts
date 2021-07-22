import { DBCreateLocation } from '../data/location/dbCreateLocation'
import { LocationPostgresRepo } from '../infra/location/locationPostgresRepo'
import { SectorPostgresRepo } from '../infra/sector/sectorPostgresRepo'
import { CreateLocationController } from '../presentation/controllers/location/createLocation'
import { IController } from '../presentation/interfaces/controller'

export const makeCreateLocation = (): IController => {
  const createLocationRepo = new LocationPostgresRepo()
  const getSectorByIdRepo = new SectorPostgresRepo()
  const dbCreateLocation = new DBCreateLocation(createLocationRepo, getSectorByIdRepo)
  return new CreateLocationController(dbCreateLocation)
}
