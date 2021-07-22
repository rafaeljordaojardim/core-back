import { created, serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { IResponse } from '../../interfaces/response'
import { Request, Response } from 'express'
import { ICreateLocation } from '../../../domain/location/use-cases/createLocation'

export class CreateLocationController implements IController {
  constructor (private readonly createLocation: ICreateLocation) {}
  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const name = req.body.name
      const sectorId = req.body.sectorId
      const response = await this.createLocation.create(name, sectorId)
      return created({ location: response })
    } catch (error) {
      console.error(`Error creating location: ${String(error)}`)
      return serverError()
    }
  }
}
