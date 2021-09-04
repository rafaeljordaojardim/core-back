import { IGetSectorByNameRepo, IGetSectorsRepo } from '../../data/interfaces'
import { ICreateSectorRepo } from '../../data/interfaces/createSectorRepo'
import { IGetSectorByIdRepo } from '../../data/interfaces/getSectorByIdRepo'
import { IUpdateSectorRepo } from '../../data/interfaces/updateSector'
import { SectorDb } from '../../db/models'
import { Sector } from '../../entities/sector'
import { LoggerThrow } from '../../utils/loggerThrow'

export class SectorPostgresRepo implements IGetSectorByIdRepo, ICreateSectorRepo, IGetSectorByNameRepo, IGetSectorsRepo, IUpdateSectorRepo {
  public async create (name: string): Promise<Sector> {
    const sectorCreated = await SectorDb.create({ name })
    if (sectorCreated == null) {
      LoggerThrow.error(`Could not create sector ${name} on database`)
    }
    return Sector.convertFromDb(sectorCreated)
  }

  public async getById (id: number): Promise<Sector | undefined> {
    const sectorFromDb = await SectorDb.findByPk(id)
    if (sectorFromDb != null) {
      return Sector.convertFromDb(sectorFromDb)
    }
  }

  public async getByName (name: string): Promise<Sector | undefined> {
    const sectorFromDb = await SectorDb.findOne({ where: { name } })
    if (sectorFromDb != null) {
      return Sector.convertFromDb(sectorFromDb)
    }
    return undefined
  }

  public async get (): Promise<Sector[]> {
    const sectorsFromDb = await SectorDb.findAll()
    return sectorsFromDb.map((sectorDb) => Sector.convertFromDb(sectorDb))
  }

  public async update (id: number, name: string): Promise<Sector> {
    const [, [sectorUpdated]] = await SectorDb.update({ name }, {
      where: { id },
      returning: true
    })
    return Sector.convertFromDb(sectorUpdated)
  }
}
