/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export class Location {
  public id?: number
  public name: string
  public sectorId: number
  public sectorName?: string

  public static convertFromDb (row: any): Location {
    const location = new Location()
    location.name = row['name'] ? row['name'] : undefined
    location.id = row['id'] ? row['id'] : undefined
    location.sectorId = row['sector_id'] ? row['sector_id'] : undefined
    location.sectorName = row['sector_name'] ? row['sector_name'] : undefined
    return location
  }
}
