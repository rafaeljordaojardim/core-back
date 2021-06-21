import { ICreateActionProfileRepo } from '../../data/interfaces/createActionProfileRepo'
import { ActionProfileDb } from '../../db/models'
import { Action } from '../../entities/action'

export class ActionProfilePostgresRepo implements ICreateActionProfileRepo {
  public async create (profileId: number, actions: Action[]): Promise<void> {
    for (const action of actions) {
      const actionProfileDb = new ActionProfileDb()
      actionProfileDb.profileId = profileId
      if (action.id != null) {
        actionProfileDb.actionId = action?.id
      }
      await actionProfileDb.save()
    }
  }
}
