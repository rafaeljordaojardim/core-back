/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IGetSector } from '../../domain/sector/use-cases/getSector'
import { Sector } from '../../entities/sector'
import { IGetSectorByIdRepo, IGetSectorByNameRepo, IGetSectorsRepo } from '../interfaces'

export class DBGetSector implements IGetSector {
  constructor (
    private readonly getSectorById: IGetSectorByIdRepo,
    private readonly getSectorByName: IGetSectorByNameRepo,
    private readonly getSectors: IGetSectorsRepo
  ) {}

  public async get (query?: { id?: number, name?: string }): Promise<Sector | Sector[] | undefined> {
    if (query == null) {
      return await this.getSectors.get()
    }
    if (query?.id != null) {
      const sector = await this.getSectorById.getById(query.id)
      if (sector != null) {
        return sector
      }
    }

    if (query?.name != null) {
      const sector = await this.getSectorByName.getByName(query.name)
      if (sector != null) {
        return sector
      }
    }
  }
}
