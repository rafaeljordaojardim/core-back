import { Router } from 'express'
import { makeCreateProfile } from '../factories/profile'
import { requestValidator } from '../presentation/validators/createProfile'

const router = Router()

router.post('/', requestValidator, async (req, res, next) => {
  const response = await makeCreateProfile().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

export default router
