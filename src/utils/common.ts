export const parseToTableFormat = (items: any[]): any => {
  return items?.map((item) => ({
    data: Object.keys(item).map(userKey => {
      const response = {}
      response[userKey] = item[userKey]
      return response
    })
  }))
}

export const makeGetUserQuery = (email: string = ''): string => {
  const conditionalPart = email != null ? ` where u.email = '${email}' limit 1` : ''
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
