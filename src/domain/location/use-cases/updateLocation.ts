import { Location } from '../../../entities/location'

export interface IUpdateLocationParams {
  sectorId?: number
  name?: string
}

export interface IUpdateLocation {
  update: (id: number, body: IUpdateLocationParams) => Promise<Location>
}
