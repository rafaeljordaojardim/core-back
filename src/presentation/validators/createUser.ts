import { Request, Response, NextFunction } from 'express'
import * as Joi from 'joi'

export function requestValidator (req: Request, res: Response, next: NextFunction): any {
  try {
    const schema = Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().min(4).max(100).email().required(),
      password: Joi.string().required(),
      status: Joi.boolean().default(true)
    })
    Joi.assert(req.body, schema)
    return next()
  } catch (error) {
    console.error(error)
    return next(error)
  }
}
