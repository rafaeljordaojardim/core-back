import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { Action, ActionProfile, Location, Profile, Sector, UserDb } from '.'
import database from '../config/database'

const models = [
  Action,
  ActionProfile,
  Location,
  Profile,
  Sector,
  UserDb
]

export const init = (): Sequelize => {
  const sequelize = new Sequelize(database as SequelizeOptions)
  sequelize.addModels([...models])
  return sequelize
}
