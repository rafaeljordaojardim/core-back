import { DBCreateProfile } from '../data/profile/dbCreateProfile'
import { ActionPostgresRepo } from '../infra/action/actionPostgresRepo'
import { ProfilePostgresRepo } from '../infra/profile/profilePostgresRepo'
import { CreateProfileController } from '../presentation/controllers/profile/createProfile'
import { ActionProfilePostgresRepo } from '../infra/action-profile/actionProfilePostgresRepo'
import { IController } from '../presentation/interfaces/controller'
import { DBUpdateProfile } from '../data/profile/dbUpdateProfile'
import { IUpdateProfileRepo } from '../data/interfaces/updateProfileRepo'
import { ICreateProfileRepo } from '../data/interfaces/createProfileRepo'
import { IGetProfileByIdRepo } from '../data/interfaces'
import { IDeleteAllActionsFromProfileRepo } from '../data/interfaces/deleteAllActionsFromProfileRepo'
import { UpdateProfileController } from '../presentation/controllers/profile/updateProfile'
import { ListProfilesController } from '../presentation/controllers/profile/listProfiles'
import { DBListProfiles } from '../data/profile/dbListProfiles'
import { IGetProfilesRepo } from '../data/interfaces/getProfilesRepo'

export const makeCreateProfile = (): IController => {
  const createProfileRepo: ICreateProfileRepo = new ProfilePostgresRepo()
  const getActionByNumberRepo = new ActionPostgresRepo()
  const createActionProfileRepo = new ActionProfilePostgresRepo()
  const dbCreateProfile = new DBCreateProfile(createProfileRepo, getActionByNumberRepo, createActionProfileRepo)
  return new CreateProfileController(dbCreateProfile)
}

export const makeUpdateProfile = (): IController => {
  const updateProfileRepo: IUpdateProfileRepo = new ProfilePostgresRepo()
  const getActionByNumberRepo = new ActionPostgresRepo()
  const createActionProfileRepo = new ActionProfilePostgresRepo()
  const getProfileById: IGetProfileByIdRepo = new ProfilePostgresRepo()
  const deleteAllActionsFromProfile: IDeleteAllActionsFromProfileRepo = new ActionProfilePostgresRepo()
  const dbUpdateProfile = new DBUpdateProfile(
    updateProfileRepo,
    deleteAllActionsFromProfile,
    getActionByNumberRepo,
    createActionProfileRepo,
    getProfileById
  )
  return new UpdateProfileController(dbUpdateProfile)
}

export const makeListProfiles = (): IController => {
  const getProfilesRepo: IGetProfilesRepo = new ProfilePostgresRepo()
  const dbListProfiles = new DBListProfiles(getProfilesRepo)
  return new ListProfilesController(dbListProfiles)
}
