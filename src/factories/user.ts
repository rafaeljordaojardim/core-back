import {
  ICreateUserRepo,
  IGetProfileByIdRepo,
  IGetSectorByIdRepo,
  IGetUserByEmailRepo,
  IGetUserByIdRepo,
  IGetUsersRepo,
  IUpdateUserRepo
} from '../data/interfaces/'
import { DBCreateUser, DBGetUserByEmail, DBGetUsers, DBUpdateUser, FillUserWithAssociations } from '../data/user/'
import { IFillUserWithAssociations } from '../domain/user/use-cases/fillUserWithAssociations'
import { ProfilePostgresRepo } from '../infra/profile/profilePostgresRepo'
import { SectorPostgresRepo } from '../infra/sector/sectorPostgresRepo'
import { UserPostgresRepo } from '../infra/user/userPostgresRepo'
import {
  CreateUserController,
  GetUserByEmailController,
  GetUsersController,
  UpdateUserController
} from '../presentation/controllers/user'
import { IController } from '../presentation/interfaces/controller'

export const makeFillUserWithAssociations = (): IFillUserWithAssociations => {
  const getUserById: IGetUserByIdRepo = new UserPostgresRepo()
  const getSectorById: IGetSectorByIdRepo = new SectorPostgresRepo()
  const getProfileById: IGetProfileByIdRepo = new ProfilePostgresRepo()
  return new FillUserWithAssociations(getSectorById, getProfileById, getUserById)
}

export const makeCreateUser = (): IController => {
  const createUserRepo: ICreateUserRepo = new UserPostgresRepo()
  const getUserByEmailRepo: IGetUserByEmailRepo = new UserPostgresRepo()
  const dbGetUserByEmail = new DBGetUserByEmail(getUserByEmailRepo)
  const dbCreateUser = new DBCreateUser(createUserRepo)
  const fillUserWithAssociations = makeFillUserWithAssociations()
  return new CreateUserController(dbCreateUser, dbGetUserByEmail, fillUserWithAssociations)
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

export const makeUpdateUser = (): IController => {
  const updateUserRepo: IUpdateUserRepo = new UserPostgresRepo()
  const dbGetUsers = new DBUpdateUser(updateUserRepo)
  const getUserByEmailRepo: IGetUserByEmailRepo = new UserPostgresRepo()
  const dbGetUserByEmail = new DBGetUserByEmail(getUserByEmailRepo)
  return new UpdateUserController(dbGetUsers, dbGetUserByEmail)
}
