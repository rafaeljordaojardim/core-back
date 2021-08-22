/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { ICreateLocation } from '../../domain/location/use-cases/createLocation'
import { Location } from '../../entities/location'
import { ICreateLocationRepo } from '../interfaces/createLocationRepo'
import { IGetSectorByIdRepo } from '../interfaces/getSectorByIdRepo'

export class DBCreateLocation implements ICreateLocation {
  constructor (
    private readonly createLocation: ICreateLocationRepo,
    private readonly getSectorById: IGetSectorByIdRepo
  ) {}

  public async create (name: string, sectorId: number): Promise<Location> {
    const sector = await this.getSectorById.getById(sectorId)
    const location = await this.createLocation.create(name, sectorId)
    location.sectorName = sector?.name
    location.sectorId = sectorId
    return location
  }
}
