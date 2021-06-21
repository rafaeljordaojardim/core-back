import { Action } from '../../entities/action'

export interface IGetActionsByProfileIdRepo {
  get: (id: number) => Promise<Action[]>
}
