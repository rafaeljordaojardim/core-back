import { IUpdateLocationParams } from '../../domain/location/use-cases'
import { Location } from '../../entities/location'

export interface IUpdateLocationRepo {
  update: (id: number, body: IUpdateLocationParams) => Promise<Location>
}
