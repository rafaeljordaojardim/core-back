import { DBCreateUser } from '../data/user/dbCreateUser'
import { CreateUserPostgresRepo } from '../infra/user/createUserPostgresRepo'
import { CreateUserController } from '../presentation/controllers/users/createUser'
import { IController } from '../presentation/interfaces/controller'

export const makeCreateUser = (): IController => {
  const createUserRepo = new CreateUserPostgresRepo()
  const dbCreateUser = new DBCreateUser(createUserRepo)
  return new CreateUserController(dbCreateUser)
}
