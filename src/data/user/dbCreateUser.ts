import { ICreateUser } from '../../domain/user/use-cases/createUser'
import { IUser } from '../../presentation/interfaces/user'
import { ICreateUserRepo } from '../interfaces/createUserRepo'

export class DBCreateUser implements ICreateUser {
  constructor (private readonly createUser: ICreateUserRepo) {}
  public async create (user: IUser): Promise<void> {
    return this.createUser.create(user)
  }
}
