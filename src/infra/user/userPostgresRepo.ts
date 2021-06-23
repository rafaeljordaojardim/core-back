import { ICreateUserRepo } from '../../data/interfaces/createUserRepo'
import { IGetUserByEmailRepo } from '../../data/interfaces/getUserByEmailRepo'
import { IGetUserByIdRepo } from '../../data/interfaces/getUserByIdRepo'
import { IGetUsersRepo } from '../../data/interfaces/getUsersRepo'
import { ActionDb, ProfileDb, SectorDb, UserDb } from '../../db/models'
import { User } from '../../entities/user'
import { IUser } from '../../presentation/interfaces/user'

export class UserPostgresRepo implements ICreateUserRepo, IGetUserByEmailRepo, IGetUsersRepo, IGetUserByIdRepo {
  public async getById (id: number): Promise<User | undefined> {
    const user = await UserDb.findByPk(id, {
      include: [
        { model: SectorDb, as: 'sector' },
        { model: ProfileDb, as: 'profile', include: [{ model: ActionDb }] }]
    })
    if (user != null) {
      return User.fromDbModel(user)
    }
  }

  public async create (user: IUser): Promise<User> {
    const userToSave = new UserDb({ ...user })
    const userCreated = await userToSave.save()
    if (userCreated == null) {
      throw new Error(`Error creating user: ${JSON.stringify(user)}`)
    }
    return User.fromDbModel(userCreated)
  }

  public async getByEmail (email: string): Promise<User | undefined> {
    const user = await UserDb.findOne({
      include: [
        { model: SectorDb },
        { model: ProfileDb, include: [{ model: ActionDb }] }],
      where: { email }
    })
    if (user != null) {
      return User.fromDbModel(user)
    }
  }

  public async get (): Promise<User[] | undefined> {
    return await UserDb.findAll({
    }).then((users) => users.map(user => User.fromDbModel(user)))
  }
}
