import { created, serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { IResponse } from '../../interfaces/response'
import { Request, Response } from 'express'
import { ICreateSector } from '../../../domain/sector/use-cases/createSector'

export class CreateSectorController implements IController {
  constructor (private readonly createSector: ICreateSector) {}
  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const name = req.body.name
      const response = await this.createSector.create(name)
      return created({ sector: response })
    } catch (error) {
      console.error(`Error creating sector: ${String(error)}`)
      return serverError()
    }
  }
}
