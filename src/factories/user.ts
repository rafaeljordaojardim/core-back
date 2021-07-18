import { ICreateUserRepo } from '../data/interfaces/createUserRepo'
import { IGetProfileByIdRepo } from '../data/interfaces/getProfileByIdRepo'
import { IGetSectorByIdRepo } from '../data/interfaces/getSectorByIdRepo'
import { IGetUserByEmailRepo } from '../data/interfaces/getUserByEmailRepo'
import { IGetUserByIdRepo } from '../data/interfaces/getUserByIdRepo'
import { IGetUsersRepo } from '../data/interfaces/getUsersRepo'
import { DBCreateUser } from '../data/user/dbCreateUser'
import { DBGetUserByEmail } from '../data/user/dbGetUserByEmail'
import { DBGetUsers } from '../data/user/dbGetUsers'
import { FillUserWithAssociations } from '../data/user/fillUserWithAssociations'
import { IFillUserWithAssociations } from '../domain/user/use-cases/fillUserWithAssociations'
import { ProfilePostgresRepo } from '../infra/profile/profilePostgresRepo'
import { SectorPostgresRepo } from '../infra/sector/sectorPostgresRepo'
import { UserPostgresRepo } from '../infra/user/userPostgresRepo'
import { CreateUserController } from '../presentation/controllers/user/createUser'
import { GetUserByEmailController } from '../presentation/controllers/user/getUserByEmail'
import { GetUsersController } from '../presentation/controllers/user/getUsers'
import { IController } from '../presentation/interfaces/controller'

export const makeFillUserWithAssociations = (): IFillUserWithAssociations => {
  const getUserById: IGetUserByIdRepo = new UserPostgresRepo()
  const getSectorById: IGetSectorByIdRepo = new SectorPostgresRepo()
  const getProfileById: IGetProfileByIdRepo = new ProfilePostgresRepo()
  return new FillUserWithAssociations(getSectorById, getProfileById, getUserById)
}

export const makeCreateUser = (): IController => {
  const createUserRepo: ICreateUserRepo = new UserPostgresRepo()
  const dbCreateUser = new DBCreateUser(createUserRepo)
  const fillUserWithAssociations = makeFillUserWithAssociations()
  return new CreateUserController(dbCreateUser, fillUserWithAssociations)
}

export const makeGetUserByEmail = (): IController => {
  const getUserByEmailRepo: IGetUserByEmailRepo = new UserPostgresRepo()
  const dbGetUserByEmail = new DBGetUserByEmail(getUserByEmailRepo)
  const fillUserWithAssociations = makeFillUserWithAssociations()
  return new GetUserByEmailController(dbGetUserByEmail, fillUserWithAssociations)
}

export const makeGetUsers = (): IController => {
  const getUsersRepo: IGetUsersRepo = new UserPostgresRepo()
  const dbGetUsers = new DBGetUsers(getUsersRepo)
  return new GetUsersController(dbGetUsers)
}
