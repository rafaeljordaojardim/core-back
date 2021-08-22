
import { Request, Response, NextFunction } from 'express'
import * as Joi from 'joi'

export function updateLocationValidator (req: Request, res: Response, next: NextFunction): any {
  try {
    const schema = Joi.object({
      name: Joi.string().optional(),
      sectorId: Joi.number().optional()
    }).unknown(false)
    Joi.assert(req.body, schema)
    return next()
  } catch (error) {
    console.error(`Error create location validator: ${String(error)}`)
    return res.status(400).json({ message: String(error) })
  }
}
