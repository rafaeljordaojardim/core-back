/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { notFound, ok, serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { IResponse } from '../../interfaces/response'
import { Request, Response } from 'express'
import { IGetLocation } from '../../../domain/location/use-cases/getLocation'

export class ListLocationsController implements IController {
  constructor (private readonly listLocations: IGetLocation) {}
  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const id = (req.params?.id) ? Number(req.params.id) : undefined
      const response = await this.listLocations.get(id)
      if (Array.isArray(response)) {
        return ok({ locations: response })
      }
      if (response?.name != null) {
        return ok({ location: response })
      }
      return notFound()
    } catch (error) {
      console.error(`Error listing location: ${String(error)}`)
      return serverError()
    }
  }
}
