/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { notFound, ok, serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { IResponse } from '../../interfaces/response'
import { Request, Response } from 'express'
import { IGetSector } from '../../../domain/sector/use-cases/getSector'

export class ListSectorsController implements IController {
  constructor (private readonly listSectors: IGetSector) {}
  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const id = (req.params?.id) ? Number(req.params.id) : undefined
      const query = id ? { id } : undefined
      const response = await this.listSectors.get(query)
      if (Array.isArray(response)) {
        return ok({ sectors: response })
      }
      if (response?.name != null) {
        return ok({ sector: response })
      }
      return notFound()
    } catch (error) {
      console.error(`Error listing sectors: ${String(error)}`)
      return serverError()
    }
  }
}
