import { Request, Response, NextFunction } from 'express'
import * as Joi from 'joi'

export function requestValidator (req: Request, res: Response, next: NextFunction): any {
  try {
    const schema = Joi.object({
      name: Joi.string().required().error(new Error('name is required')),
      sectorId: Joi.number().required().error(new Error('sectorId is required'))
    })
    Joi.assert(req.body, schema)
    return next()
  } catch (error) {
    console.error(`Error create location validator: ${String(error)}`)
    return res.status(400).json({ message: String(error) })
  }
}
