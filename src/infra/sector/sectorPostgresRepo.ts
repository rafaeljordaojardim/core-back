import { ICreateSectorRepo } from '../../data/interfaces/createSectorRepo'
import { IGetSectorByIdRepo } from '../../data/interfaces/getSectorByIdRepo'
import { SectorDb } from '../../db/models'
import { Sector } from '../../entities/sector'
import { LoggerThrow } from '../../utils/loggerThrow'

export class SectorPostgresRepo implements IGetSectorByIdRepo, ICreateSectorRepo {
  public async create (name: string): Promise<Sector> {
    const sectorCreated = await SectorDb.create({ name })
    if (sectorCreated == null) {
      LoggerThrow.error(`Could not create sector ${name} on database`)
    }
    return Sector.convertFromDb(sectorCreated)
  }

  public async get (id: number): Promise<Sector | undefined> {
    const sectorFromDb = await SectorDb.findByPk(id)
    if (sectorFromDb != null) {
      return Sector.convertFromDb(sectorFromDb)
    }
    LoggerThrow.error(`The Sector id ${id} is not present on database`)
  }
}
