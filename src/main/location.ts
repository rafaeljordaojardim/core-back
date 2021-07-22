import { Router } from 'express'
import { makeCreateLocation } from '../factories/location'
import { requestValidator } from '../presentation/validators/createLocation'

const router = Router()

router.post('/', requestValidator, async (req, res, next) => {
  const response = await makeCreateLocation().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

export default router
