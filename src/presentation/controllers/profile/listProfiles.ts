import { created, serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { IResponse } from '../../interfaces/response'
import { Request, Response } from 'express'
import { IGetProfile } from '../../../domain/profile/use-cases/getProfile'

export class ListProfilesController implements IController {
  constructor (private readonly listProfiles: IGetProfile) {}
  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const response = await this.listProfiles.get()
      return created({ profiles: response })
    } catch (error) {
      console.error(`Error listing profiles: ${String(error)}`)
      return serverError()
    }
  }
}
