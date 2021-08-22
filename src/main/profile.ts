import { Router } from 'express'
import { makeCreateProfile } from '../factories/profile'
import { createProfileValidator } from '../presentation/validators'

const router = Router()

router.post('/', createProfileValidator, async (req, res, next) => {
  const response = await makeCreateProfile().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

export default router
