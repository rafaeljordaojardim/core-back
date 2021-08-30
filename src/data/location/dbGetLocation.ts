/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IGetLocation } from '../../domain/location/use-cases/getLocation'
import { Location } from '../../entities/location'
import { IGetLocationRepo } from '../interfaces'

export class DBListLocation implements IGetLocation {
  constructor (
    private readonly getLocation: IGetLocationRepo
  ) {}

  public async get (id?: number): Promise<Location | Location[]> {
    const result = await this.getLocation.get(id)
    return result
  }
}
