import { DBCreateSector } from '../data/sector/dbCreateSector'
import { SectorPostgresRepo } from '../infra/sector/sectorPostgresRepo'
import { CreateSectorController } from '../presentation/controllers/sector/createSector'
import { IController } from '../presentation/interfaces/controller'

export const makeCreateSector = (): IController => {
  const createSectorRepo = new SectorPostgresRepo()
  const dbCreateProfile = new DBCreateSector(createSectorRepo)
  return new CreateSectorController(dbCreateProfile)
}
