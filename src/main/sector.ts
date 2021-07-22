import { Router } from 'express'
import { makeCreateSector } from '../factories/sector'
import { requestValidator } from '../presentation/validators/createSector'

const router = Router()

router.post('/', requestValidator, async (req, res, next) => {
  const response = await makeCreateSector().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

export default router
