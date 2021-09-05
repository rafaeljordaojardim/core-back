import { UnauthorizedError } from '../../data/errors'
import { GenerateTokenRepo } from '../../infra/token/generateToken'

const verifier = new GenerateTokenRepo()

export const authorizer = (req, res, next): void => {
  const headers = req.headers
  const authorizationHeader = headers.authorization
  try {
    if (authorizationHeader != null) {
      const token = authorizationHeader.replace('Bearer ', '')
      const jwt = verifier.verify(token)
      req.jwt = jwt
      return next()
    } else {
      throw new UnauthorizedError('Invalid jwt token')
    }
  } catch (error) {
    console.error(`Error to validate token ${String(error)}`)
    return res.status(401).json({ message: 'Invalid token' })
  }
}
