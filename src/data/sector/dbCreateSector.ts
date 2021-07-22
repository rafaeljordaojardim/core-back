/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { ICreateSector } from '../../domain/sector/use-cases/createSector'
import { Sector } from '../../entities/sector'
import { ICreateSectorRepo } from '../interfaces/createSectorRepo'

export class DBCreateSector implements ICreateSector {
  constructor (
    private readonly createSector: ICreateSectorRepo
  ) {}

  public async create (name: string): Promise<Sector> {
    const sector = await this.createSector.create(name)
    return sector
  }
}
