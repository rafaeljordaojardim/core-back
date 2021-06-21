import { IGetSectorByIdRepo } from '../../data/interfaces/getSectorByIdRepo'
import { SectorDb } from '../../db/models'
import { Sector } from '../../entities/sector'
import { LoggerThrow } from '../../utils/loggerThrow'

export class SectorPostgresRepo implements IGetSectorByIdRepo {
  public async get (id: number): Promise<Sector | undefined> {
    const sectorFromDb = await SectorDb.findByPk(id)
    if (sectorFromDb != null) {
      return Sector.convertFromDb(sectorFromDb)
    }
    LoggerThrow.error(`The Sector id ${id} is not present on database`)
  }
}
