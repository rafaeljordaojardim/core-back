/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IUpdateSector } from '../../domain/sector/use-cases/updateSector'
import { Sector } from '../../entities/sector'
import { IUpdateSectorRepo } from '../interfaces/updateSector'

export class DBUpdateSector implements IUpdateSector {
  constructor (
    private readonly updateSector: IUpdateSectorRepo
  ) {}

  public async update (id: number, name: string): Promise<Sector> {
    return await this.updateSector.update(id, name)
  }
}
