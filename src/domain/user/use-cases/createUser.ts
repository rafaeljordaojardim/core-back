import { IUser } from '../../../presentation/interfaces/user'

export interface ICreateUser {
  create: (user: IUser) => void
}
