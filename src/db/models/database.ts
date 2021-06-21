import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { ActionDb, ActionProfileDb, LocationDb, ProfileDb, SectorDb, UserDb } from '.'
import database from '../config/database'

const models = [
  ActionDb,
  ActionProfileDb,
  LocationDb,
  ProfileDb,
  SectorDb,
  UserDb
]

export const init = (): Sequelize => {
  const sequelize = new Sequelize(database as SequelizeOptions)
  sequelize.addModels([...models])
  return sequelize
}
