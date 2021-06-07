import { ICreateUserRepo } from '../../data/interfaces/createUserRepo'
import { UserDb } from '../../db/models'
import { User } from '../../entities/user'
import { IUser } from '../../presentation/interfaces/user'

export class CreateUserPostgresRepo implements ICreateUserRepo {
  public async create (user: IUser): Promise<User> {
    const userCreated = await UserDb.create({ ...user })
    return User.fromDbModel(userCreated)
  }
}
