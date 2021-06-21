import { User } from '../../entities/user'

export interface IGetUserByEmailRepo {
  getByEmail: (email: string) => Promise<User | undefined>
}
