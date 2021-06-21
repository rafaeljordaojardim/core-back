import { ICreateUserRepo } from '../data/interfaces/createUserRepo'
import { IGetProfileByIdRepo } from '../data/interfaces/getProfileByIdRepo'
import { IGetSectorByIdRepo } from '../data/interfaces/getSectorByIdRepo'
import { IGetUserByEmailRepo } from '../data/interfaces/getUserByEmailRepo'
import { IGetUsersRepo } from '../data/interfaces/getUsersRepo'
import { DBCreateUser } from '../data/user/dbCreateUser'
import { DBGetUserByEmail } from '../data/user/dbGetUserByEmail'
import { DBGetUsers } from '../data/user/dbGetUsers'
import { ProfilePostgresRepo } from '../infra/profile/profilePostgresRepo'
import { SectorPostgresRepo } from '../infra/sector/sectorPostgresRepo'
import { UserPostgresRepo } from '../infra/user/userPostgresRepo'
import { CreateUserController } from '../presentation/controllers/user/createUser'
import { GetUserByEmailController } from '../presentation/controllers/user/getUserByEmail'
import { GetUsersController } from '../presentation/controllers/user/getUsers'
import { IController } from '../presentation/interfaces/controller'

export const makeCreateUser = (): IController => {
  const createUserRepo: ICreateUserRepo = new UserPostgresRepo()
  const getSectorById: IGetSectorByIdRepo = new SectorPostgresRepo()
  const getProfileById: IGetProfileByIdRepo = new ProfilePostgresRepo()
  const dbCreateUser = new DBCreateUser(createUserRepo, getSectorById, getProfileById)
  return new CreateUserController(dbCreateUser)
}

export const makeGetUserByEmail = (): IController => {
  const getUserByEmailRepo: IGetUserByEmailRepo = new UserPostgresRepo()
  const dbGetUserByEmail = new DBGetUserByEmail(getUserByEmailRepo)
  return new GetUserByEmailController(dbGetUserByEmail)
}

export const makeGetUsers = (): IController => {
  const getUsersRepo: IGetUsersRepo = new UserPostgresRepo()
  const dbGetUsers = new DBGetUsers(getUsersRepo)
  return new GetUsersController(dbGetUsers)
}
