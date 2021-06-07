import { IUser } from '../../presentation/interfaces/user'

export interface ICreateUserRepo {
  create: (user: IUser) => void
}
