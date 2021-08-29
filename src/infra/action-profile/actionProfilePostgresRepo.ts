import { ICreateActionProfileRepo } from '../../data/interfaces/createActionProfileRepo'
import { IDeleteAllActionsFromProfileRepo } from '../../data/interfaces/deleteAllActionsFromProfileRepo'
import { ActionProfileDb } from '../../db/models'
import { Action } from '../../entities/action'

export class ActionProfilePostgresRepo implements ICreateActionProfileRepo, IDeleteAllActionsFromProfileRepo {
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

  public async delete (profileId: number): Promise<void> {
    await ActionProfileDb.destroy(
      { where: { profileId } }
    )
  }
}
