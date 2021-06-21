import { DBCreateProfile } from '../data/profile/dbCreateProfile'
import { ActionPostgresRepo } from '../infra/action/actionPostgresRepo'
import { ProfilePostgresRepo } from '../infra/profile/profilePostgresRepo'
import { CreateProfileController } from '../presentation/controllers/profile/createProfile'
import { ActionProfilePostgresRepo } from '../infra/action-profile/actionProfilePostgresRepo'
import { IController } from '../presentation/interfaces/controller'

export const makeCreateProfile = (): IController => {
  const createProfileRepo = new ProfilePostgresRepo()
  const getActionByNumberRepo = new ActionPostgresRepo()
  const createActionProfileRepo = new ActionProfilePostgresRepo()
  const dbCreateProfile = new DBCreateProfile(createProfileRepo, getActionByNumberRepo, createActionProfileRepo)
  return new CreateProfileController(dbCreateProfile)
}
