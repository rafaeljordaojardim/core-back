import { Router } from 'express'
import { makeCreateLocation, makeGetLocations, makeUpdateLocation } from '../factories/location'
import { createLocationValidator, updateLocationValidator } from '../presentation/validators/'

const router = Router()

router.post('/', createLocationValidator, async (req, res, next) => {
  const response = await makeCreateLocation().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

router.patch('/:id', updateLocationValidator, async (req, res, next) => {
  const response = await makeUpdateLocation().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

router.get('/', updateLocationValidator, async (req, res, next) => {
  const response = await makeGetLocations().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

router.get('/:id', updateLocationValidator, async (req, res, next) => {
  const response = await makeGetLocations().handle(req, res)
  res.statusCode = response.status
  return res.json(response?.body)
})

export default router
