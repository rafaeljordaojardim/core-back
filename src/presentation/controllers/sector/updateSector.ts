import { conflict, ok, serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { Request, Response } from 'express'
import { IResponse } from '../../interfaces/response'
import { IUpdateSector } from '../../../domain/sector/use-cases/updateSector'
import { IGetSector } from '../../../domain/sector/use-cases/getSector'

export class UpdateSectorController implements IController {
  constructor (
    private readonly updateSector: IUpdateSector,
    private readonly getSectorByName: IGetSector
  ) {}

  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const exists = await this.getSectorByName.get({ name: req.body.name })
      if (exists != null) {
        return conflict()
      }
      const id = Number(req.params.id)
      const { name } = req.body
      const sector = await this.updateSector.update(id, name)
      return ok(sector)
    } catch (error) {
      console.error(`Error updating user: ${String(error)}`)
      return serverError()
    }
  }
}
