import { IGetSectorByNameRepo, IGetSectorsRepo, IGetSectorByIdRepo } from '../data/interfaces'
import { DBCreateSector } from '../data/sector/dbCreateSector'
import { DBGetSector } from '../data/sector/dbGetSector'
import { DBUpdateSector } from '../data/sector/dbUpdateSector'
import { SectorPostgresRepo } from '../infra/sector/sectorPostgresRepo'
import { CreateSectorController } from '../presentation/controllers/sector/createSector'
import { ListSectorsController } from '../presentation/controllers/sector/listSector'
import { UpdateSectorController } from '../presentation/controllers/sector/updateSector'
import { IController } from '../presentation/interfaces/controller'

export const makeCreateSector = (): IController => {
  const createSectorRepo = new SectorPostgresRepo()
  const dbCreateSector = new DBCreateSector(createSectorRepo)
  return new CreateSectorController(dbCreateSector)
}

export const makeUpdateSector = (): IController => {
  const updateSectorRepo = new SectorPostgresRepo()
  const dbUpdateSector = new DBUpdateSector(updateSectorRepo)
  const getSectorByNameRepo: IGetSectorByNameRepo = new SectorPostgresRepo()
  const getSectorById: IGetSectorByIdRepo = new SectorPostgresRepo()
  const getSectors: IGetSectorsRepo = new SectorPostgresRepo()
  const dbSectorByName = new DBGetSector(getSectorById, getSectorByNameRepo, getSectors)
  return new UpdateSectorController(dbUpdateSector, dbSectorByName)
}

export const makeGetSector = (): IController => {
  const getSectorById: IGetSectorByIdRepo = new SectorPostgresRepo()
  const getSectorByName: IGetSectorByNameRepo = new SectorPostgresRepo()
  const getSectors: IGetSectorsRepo = new SectorPostgresRepo()
  const dbCreateSector = new DBGetSector(getSectorById, getSectorByName, getSectors)
  return new ListSectorsController(dbCreateSector)
}
