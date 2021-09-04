import { ForbiddenError } from '../data/errors'
import { IResponse } from '../presentation/interfaces/response'
import { forbidden, serverError } from '../presentation/commons/responses'

export const parseToTableFormat = (items: any[]): any => {
  return items?.map((item) => ({
    data: Object.keys(item).map(userKey => {
      const response = {}
      response[userKey] = item[userKey]
      return response
    })
  }))
}

export const makeGetUserQuery = (email?: string): string => {
  const conditionalPart = email != null ? `\nwhere u.email = '${email}' limit 1;` : ''
  const query = `SELECT u.*, 
    pr.name as profile_name, pr.id as profile_id,
    sc.name as sector_name, sc.id as sector_id,
    us.first_name as boss_first_name, us.id as boss_id
    FROM users AS u 
    INNER JOIN profiles AS pr ON pr.id = u.profile_id
    INNER JOIN sectors AS sc ON sc.id = u.sector_id
    LEFT JOIN users AS us ON us.id = u.boss_id ${conditionalPart}`
  return query
}

export const makeGetLocationQuery = (id?: number): string => {
  const conditionalPart = id != null ? `\nwhere l.id = ${id} limit 1` : ''
  const query = `SELECT l.id as id, l.name as name, s.name as sector_name from locations AS l 
  INNER JOIN sectors as s ON s.id = l.sector_id ${conditionalPart}`
  return query
}

export const errorProcessor = (error: Error): IResponse => {
  if (error instanceof ForbiddenError) {
    return forbidden({ message: error.message })
  }

  return serverError()
}
