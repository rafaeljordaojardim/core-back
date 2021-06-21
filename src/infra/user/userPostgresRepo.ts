import { ICreateUserRepo } from '../../data/interfaces/createUserRepo'
import { IGetUserByEmailRepo } from '../../data/interfaces/getUserByEmailRepo'
import { IGetUsersRepo } from '../../data/interfaces/getUsersRepo'
import { ActionDb, ProfileDb, SectorDb, UserDb } from '../../db/models'
import { User } from '../../entities/user'
import { IUser } from '../../presentation/interfaces/user'

export class UserPostgresRepo implements ICreateUserRepo, IGetUserByEmailRepo, IGetUsersRepo {
  public async create (user: IUser): Promise<User> {
    const userCreated = await UserDb.create({ ...user })
    return User.fromDbModel(userCreated)
  }

  public async getByEmail (email: string): Promise<User | undefined> {
    console.log('getting user')
    const user = await UserDb.findOne({
      where: { email },
      include: [
        { model: SectorDb },
        { model: ProfileDb, include: [{ model: ActionDb }] }]
    })
    if (user != null) {
      return User.fromDbModel(user)
    }
  }

  public async get (): Promise<User[] | undefined> {
    console.log('getting user')
    const users = await UserDb.findAll({
      include: [
        { model: SectorDb },
        { model: ProfileDb, include: [{ model: ActionDb }] }]
    })
    if (users != null) {
      return users.map(user => User.fromDbModel(user))
    }
  }
}
