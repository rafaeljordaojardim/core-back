import { ok, serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { IResponse } from '../../interfaces/response'
import { Request, Response } from 'express'
import { IUpdateLocation } from '../../../domain/location/use-cases/updateLocation'

export class UpdateLocationController implements IController {
  constructor (private readonly updateLocation: IUpdateLocation) {}
  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const id = Number(req.params.id)
      const { sectorId, name } = req.body
      const response = await this.updateLocation.update(id, { sectorId, name })
      return ok({ location: response })
    } catch (error) {
      console.error(`Error updating location: ${String(error)}`)
      return serverError()
    }
  }
}
