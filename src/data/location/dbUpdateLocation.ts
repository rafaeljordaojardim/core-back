/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IUpdateLocation, IUpdateLocationParams } from '../../domain/location/use-cases'
import { Location } from '../../entities/location'
import { IUpdateLocationRepo } from '../interfaces/updateLocationRepo'

export class DBUpdateLocation implements IUpdateLocation {
  constructor (
    private readonly updateRepo: IUpdateLocationRepo
  ) {}

  public async update (id: number, body: IUpdateLocationParams): Promise<Location> {
    const result = await this.updateRepo.update(id, body)
    return result
  }
}
