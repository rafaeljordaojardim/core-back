import { IGetUserByEmail } from '../../../domain/user/use-cases/getUserByEmail'
import { ok, serverError } from '../../commons/responses'
import { IController } from '../../interfaces/controller'
import { Request, Response } from 'express'
import { IResponse } from '../../interfaces/response'
import { IFillUserWithAssociations } from '../../../domain/user/use-cases/fillUserWithAssociations'

export class GetUserByEmailController implements IController {
  constructor (
    private readonly getUserByEmail: IGetUserByEmail,
    private readonly fillUserWithAssociations: IFillUserWithAssociations) {}

  public async handle (req: Request, res: Response): Promise<IResponse> {
    try {
      const { email } = req.params
      let user = await this.getUserByEmail.get(email)
      if (user != null) {
        user = await this.fillUserWithAssociations.fill(user)
      }
      return ok({ user })
    } catch (error) {
      console.error(`Error getting user: ${String(error)}`)
      return serverError()
    }
  }
}
