import { ICreateUser } from '../../../domain/user/use-cases/createUser'
import { IController } from '../../interfaces/controller'
import { IResponse } from '../../interfaces/response'
import { Request, Response } from 'express'
import { created, serverError } from '../../commons/responses'

export class CreateUserController implements IController {
  constructor (private readonly createUser: ICreateUser) {}
  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const user = req.body
      const response = await this.createUser.create(user)
      return created({ user: response })
    } catch (error) {
      console.error(`Error creating user: ${String(error)}`)
      return serverError()
    }
  }
}
