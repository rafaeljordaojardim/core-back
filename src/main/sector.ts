import { Router } from 'express'
import { makeCreateSector, makeUpdateSector } from '../factories/sector'
import { createSectorValidator, updateSectorValidator } from '../presentation/validators'

const router = Router()

router.post('/', createSectorValidator, async (req, res, next) => {
  const response = await makeCreateSector().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

router.patch('/:id', updateSectorValidator, async (req, res, next) => {
  const response = await makeUpdateSector().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

export default router
