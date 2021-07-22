import { ok, serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { Request, Response } from 'express'
import { IResponse } from '../../interfaces/response'
import { IGetUsers } from '../../../domain/user/use-cases/getUsers'
import { parseToTableFormat } from '../../../utils/common'

export class GetUsersController implements IController {
  constructor (
    private readonly getUsers: IGetUsers) {}

  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const users = await this.getUsers.get()
      if (users != null) {
        return ok(parseToTableFormat(users))
      }
      return ok(users)
    } catch (error) {
      console.error(`Error getting user: ${String(error)}`)
      return serverError()
    }
  }
}
