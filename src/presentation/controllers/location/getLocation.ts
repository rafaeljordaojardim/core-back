import { created, serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { IResponse } from '../../interfaces/response'
import { Request, Response } from 'express'
import { IGetLocation } from '../../../domain/location/use-cases/getLocation'

export class ListLocationsController implements IController {
  constructor (private readonly listLocations: IGetLocation) {}
  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const id = Number(req.params.id)
      const response = await this.listLocations.get(id)
      return created({ location: response })
    } catch (error) {
      console.error(`Error creating location: ${String(error)}`)
      return serverError()
    }
  }
}
