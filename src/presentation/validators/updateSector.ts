import { Request, Response, NextFunction } from 'express'
import * as Joi from 'joi'

export function updateSectorValidator (req: Request, res: Response, next: NextFunction): any {
  try {
    const schemaBody = Joi.object({
      name: Joi.string().required().error(new Error('name is required'))
    }).unknown(false)
    Joi.assert(req.body, schemaBody)
    return next()
  } catch (error) {
    console.error(`Error update sector validator: ${String(error)}`)
    return res.status(400).json({ message: String(error) })
  }
}
