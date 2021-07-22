export const parseToTableFormat = (items: any[]): any => {
  return items?.map((item) => ({
    data: Object.keys(item).map(userKey => {
      const response = {}
      response[userKey] = item[userKey]
      return response
    })
  }))
}
