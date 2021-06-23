import { ICreateUser } from '../../../domain/user/use-cases/createUser'
import { IController } from '../../interfaces/controller'
import { IResponse } from '../../interfaces/response'
import { Request, Response } from 'express'
import { created, serverError } from '../../commons/responses'
import { IFillUserWithAssociations } from '../../../domain/user/use-cases/fillUserWithAssociations'

export class CreateUserController implements IController {
  constructor (
    private readonly createUser: ICreateUser,
    private readonly fillUserWithAssociations: IFillUserWithAssociations
  ) {}

  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const userParams = req.body
      let user = await this.createUser.create(userParams)
      user = await this.fillUserWithAssociations.fill(user)
      return created({ user })
    } catch (error) {
      console.error(`Error creating user: ${String(error)}`)
      return serverError()
    }
  }
}
